import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubSha256Middleware } from './middlewares/github-sha256.middleware';

function main(){
  const app = express();

  app.use(express.json());

  const controller = new GithubController();

  app.use(GithubSha256Middleware.verifySha256)

  app.post('/api/github', controller.webhookHandler);

  app.listen(envs.PORT, () => {
    console.log(`Server started at ${envs.PORT}`);
  });
}

(()=>{
  main()
})()