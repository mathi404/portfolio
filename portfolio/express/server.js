import projectsData from "../src/data/projects.json" with { type: "json"}
import "dotenv/config"
import express from "express"


const app = express()
// line supports the app to parse json
app.use(express.json());

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

app.post("/form", async (req, res) => {

    try {
        if (!WEBHOOK_URL) {
            return res.status(500).json({ error: "missing discord webhook url" })
        }
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing name, email, or message" });
        }

        const payload = {
            username: "Porfolio bot",
            content: " **New portfolio submission**",
            embeds: [
                {
                    title: "Contact Form",
                    fields: [
                        { name: "Name", value: String(name).slice(0, 256), inline: true },
                        { name: "Email", value: String(email).slice(0, 256), inline: true },
                        {
                            name: "Message",
                            value: String(message).slice(0, 1024) || "(empty)",
                        },
                    ],
                },
            ],


        }
        const discordResponse = await fetch(WEBHOOK_URL,{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });

            if(!discordResponse.ok){
                const text = await discordResponse.text();
                return res.status(502).json({error: "Discord webhook failed", details: text});
            }
            res.json({ok:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Server error"})

    }

    const data = req.body
    console.log(data);
    res.status(201)




})
app.get("/projects", (req, res) => {
    res.status(202)
    res.json(projectsData)

})
app.listen(8080, () => {
    console.log("server is running on 8080")
})
