import { GithubStarPayload } from "../../interfaces";

export class GithubService{
  constructor(){

  }

  onStar = (payload: GithubStarPayload): string => {

    const { action, sender, repository, starred_at } = payload;

    return `User ${sender.login} ${action} star ${repository.full_name} at ${starred_at}`;

  }
}