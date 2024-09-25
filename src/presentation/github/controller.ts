import { Request, Response } from "express";

export class GithubController{
  constructor(){

  }

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header('x-github-event') ?? 'unknown';
    const githubSignature = req.header('x-hub-signature') ?? 'unknown';
    const payload = req.body;
    console.log(JSON.stringify(payload));
    res.json({ message: 'Hello from GitHub API' });
  }
}