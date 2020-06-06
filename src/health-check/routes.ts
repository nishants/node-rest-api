import {Request, Response} from "express";
import {setValue, getStore} from "./controller";

export default [
    {
        path: "/api/v1/health/set-value",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                // @ts-ignore
                const queryParamNames = Object.keys(query);
                for (let i = 0; i < queryParamNames.length; i++) {
                    await setValue(queryParamNames[i], query[queryParamNames[i]])
                }
                res.status(200).send();
            }
        ]
    },
    {
        path: "/api/v1/health/all-data",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const data = await getStore();
                res.status(200).send(data);
            }
        ]
    }

];