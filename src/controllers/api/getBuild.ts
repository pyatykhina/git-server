import api from '../../api/api';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    const buildId = req.originalUrl.split('/')[3];

    await api.getBuild(buildId)
        .then(response => {
            return res.status(200).json({ 
                build: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
  