import { envs } from "../../config";

export class DiscordService {
  constructor(
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL
  ) { }

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHA2OWo1bWd5bGYxZ2txOW1jcGdiZWVremVhYnpjOTZpcGgzNGNpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1ykDbRCjniBVxwPK7C/giphy.gif"
          }
        }
      ]
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