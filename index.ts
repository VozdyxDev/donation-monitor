import * as io from "socket.io-client";
import { WebhookClient, MessageEmbed } from "discord.js";
import { config } from "./config";

const websocketUri = "wss://socket.donationalerts.ru:443";
const donationalerts = io(websocketUri);

donationalerts.emit("add-user", { token: config["donation-token"], type: "alert_widget" });

const channel = new WebhookClient(config["discord-webhook"]["id"], config["discord-webhook"]["token"]);
donationalerts.on("donation", (body) => {
    let donation = JSON.parse(body);
    channel.send(
        new MessageEmbed().setAuthor(`New donation from ${donation["username"]}`, config["discord-webhook"]["icon-url"])
        .setDescription(`Amount: **${donation["amount"]} ${donation["currency"]}**${donation["message"] ? "\nMessage: \`\`\`" + donation["message"] + "\`\`\`" : ""}`)
    );
});

