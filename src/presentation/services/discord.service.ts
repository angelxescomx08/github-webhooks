import { envs } from "../../config";

export class DiscordService {
  constructor(
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL
  ) { }

  async notify(message: string) {
    const body = {
      content: message
    }

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      console.log("Error sending message to Discord");
      return false
    }
    return true
  }
}