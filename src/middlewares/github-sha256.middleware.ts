import { NextFunction, Request, Response } from "express";

import { Webhooks } from "@octokit/webhooks";
import { envs } from "../config";

const webhooks = new Webhooks({
  secret: envs.SECRET_TOKEN,
});

export class GithubSha256Middleware{
  static verifySha256 = async (req: Request, res:Response, next: NextFunction) =>{
    try {
      
      const signature = req.headers["x-hub-signature-256"] as string ?? '';
      const body = JSON.stringify(req.body);
      
      if (!(await webhooks.verify(body, signature))) {
        res.status(401).json({
          message: 'Unauthorized'
        });
        return;
      }
  
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Unauthorized'
      });
    }
  }
}