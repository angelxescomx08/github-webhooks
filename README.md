# github-webhooks

Proyecto para utilizar webhooks de github y también para probar discord.

# Para configurar un webhook en github

1. Ir al repositorio en github
2. Ir a la sección de settings
3. Ir a la sección de webhooks
4. Dar click en el botón de "Add webhook"
5. En la sección de "Payload URL" poner la url del servidor donde se va a recibir el webhook
6. En la sección de "Content type" seleccionar "application/json"
7. En la sección de "Which events would you like to trigger this webhook?" seleccionar los que te interesen pero en este proyecto se usan **issue** y **star**