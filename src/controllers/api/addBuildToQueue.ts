import api from '../../api/api';
import { exec, execSync } from 'child_process';
import serialize from 'serialize-javascript';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    const commitHash = req.params.commitHash;

    const commit = execSync(`
        cd local-repo
        git log --oneline --pretty=format:"%H, %an, %s"
    `, {
        encoding: 'utf8'
    }).split('\n').find(e => e.includes(commitHash))?.split(', ') || [];

    const branch = execSync(`
        cd local-repo
        git rev-parse --abbrev-ref HEAD 
    `, {
        encoding: 'utf8'
    }).split('\n')[0];

    const config = {
        commitMessage: commit[2] || "",
        commitHash: commitHash,
        branchName: branch,
        authorName: commit[1] || "",
        start: new Date().toISOString(),
        duration: 0
    };

    try {
        const build = (await api.addBuildToQueue(config));
        const execConfig = await api.startBuild({
            buildId: build.data.id,
            dateTime: new Date().toISOString()
        });
        execBuild(JSON.parse(execConfig));
        return res.status(200).json({
            build: build.data
        });
    } 
    catch (error) {
        return res.status(500).json({ 
            error: error
        })
    }
};

const execBuild = async ({ buildId, dateTime }: { buildId: string, dateTime: string }) => {
    const settings = await api.getSettings();
    const buildCommand = settings.data.buildCommand;
    const mainBranch = settings.data.mainBranch;

    try {
        exec(`
            cd local-repo
            git checkout ${mainBranch}
            ${buildCommand}
        `, async (error, stdout, stderr) => {
            if (error) {
                await api.finishBuild({
                    buildId: buildId,
                    duration: Date.now() - (+new Date(dateTime)) + new Date().getTimezoneOffset()*60*1000,
                    success: false,
                    buildLog: serialize({logs: `<div>{${stderr} + \n + ${stdout}}</div>`})
                })
                return;
            }

            await api.finishBuild({
                buildId: buildId,
                duration: Date.now() - (+new Date(dateTime)) + new Date().getTimezoneOffset()*60*1000,
                success: true,
                buildLog: serialize({logs: JSON.stringify(stdout)})
            })
            return;
        });
    }
    catch (error) {
        console.log('error', error)
    }
}
