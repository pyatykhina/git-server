import api from '../../api/api';
import { Request, Response } from "express";
import Convert from 'ansi-to-html';
const convert = new Convert({ bg: '#fff', fg: '#000' });

export default async (req: Request, res: Response) => {
    const buildId = req.originalUrl.split('/')[3];

    await api.getLogs(buildId)
        .then(response => response.logs && (
            res.status(200).json({ 
                logs: convert.toHtml(JSON.parse(response.logs)) 
            })
        ))
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
  