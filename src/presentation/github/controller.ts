import { Request, Response } from "express";
import { GithubService } from "../services/github.service";

export class GithubController{
  constructor(
    private readonly githubService = new GithubService()
  ){ }

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header('x-github-event') ?? 'unknown';
    const githubSignature = req.header('x-hub-signature') ?? 'unknown';
    const payload = req.body;

    let message = ''
    
    switch(githubEvent){
      case 'star':
        message = this.githubService.onStar(payload);
        break;
      default:
        message = `Unknown event ${githubEvent}`;
    }

    console.log(message);

    res.json({ message: 'Hello from GitHub API' });
  }
}