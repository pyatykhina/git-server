import api from '../../api/api';
import db from '../../db/database';
import Settings from '../../db/Settings';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    await api.getSettings()
        .then(async response => {
            const settingsFile = new Settings(response.data);
            await db.insertSettings(settingsFile, JSON.stringify(response.data));

            return res.status(200).json({ 
                settings: response.data
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
