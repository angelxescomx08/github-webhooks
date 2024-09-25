import { Request, Response } from "express";
import { DiscordService, GithubService } from "../services";

export class GithubController{
  constructor(
    private readonly githubService = new GithubService(),
    private readonly discordService = new DiscordService()
  ){ }

  webhookHandler = async (req: Request, res: Response) => {
    const githubEvent = req.header('x-github-event') ?? 'unknown';
    const githubSignature = req.header('x-hub-signature') ?? 'unknown';
    const payload = req.body;

    let message = ''
    
    switch(githubEvent){
      case 'star':
        message = this.githubService.onStar(payload);
        break;
      case 'issues':
        message = this.githubService.onIssues(payload);
        break;
      default:
        message = `Unknown event ${githubEvent}`;
    }

    const wasSent = await this.discordService.notify(message);

    if(!wasSent){
      return res.json({ message: 'Error sending message to Discord' });
    }


    res.json({ message: 'Message sent to discord' });
  }
}