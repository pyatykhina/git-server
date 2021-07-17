import api from '../../api/api';
import { execSync } from 'child_process';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    const config = {
        repoName: req.body.repoName,
        buildCommand: req.body.buildCommand,
        mainBranch: req.body.mainBranch,
        period: req.body.period
    };

    try {
        execSync(`
            rm -rf local-repo
            git clone ${config.repoName} local-repo
        `);
    } 
    catch (error) {
        return res.status(500).json({ 
            error: 'Error while cloning repo' 
        });
    }

    await api.setSettings(config)
        .then(response => {
            return res.status(200).json({
                settings: JSON.parse(response.config.data)
            });
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
  