import api from '../../api/api';
import db from '../../db/database';
import Builds from '../../db/Builds';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    const offset: any = req.query.offset;
    const limit: any = req.query.limit;

    await api.getAllBuilds(offset, limit)
        .then(response => {
            response.data.forEach(async (item: IBuilds) => {
                const buildsFile = new Builds(item);
                await db.insertBuild(buildsFile, JSON.stringify(item));
            });

            return res.status(200).json({ 
                allBuilds: response.data
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};

interface IBuilds {
    id?: string,
    configurationId?: string,
    buildNumber: number,
    commitMessage: string,
    commitHash: string,
    branchName?: string,
    authorName: string,
    status?: string,
    start: string,
    duration: number,
    saveBuild(content: string): void
}
