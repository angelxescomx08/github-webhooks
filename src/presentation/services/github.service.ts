import { GithubIssuePayload, GithubStarPayload } from "../../interfaces";

export class GithubService{
  constructor(){

  }

  onStar = (payload: GithubStarPayload): string => {

    const { action, sender, repository, starred_at } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name} at ${starred_at}`;

  }

  onIssues = (payload: GithubIssuePayload): string => {
    let message = '';
    const { action, issue, repository } = payload;
    if(action === 'opened'){
      message = `New issue ${issue.title} created in ${repository.full_name} by ${issue.user.login}`;
    }else if(action === 'closed'){
      message = `Issue ${issue.title} closed in ${repository.full_name} by ${issue.user.login}`;
    }else if(action === 'reopened'){
      message = `Issue ${issue.title} reopened in ${repository.full_name} by ${issue.user.login}`;
    }else{
      message = `Unknown issue action ${action}`;
    }
    return message;
  }
}