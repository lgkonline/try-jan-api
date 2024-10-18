"use server"

import { OpenAI } from "openai"

const openai = new OpenAI({
    baseURL: "http://localhost:1337/v1",
    apiKey: "YOUR_API_KEY"
})

export async function makeRequest(prevState: any, formData: FormData) {
    "use server"

    const completion = await openai.chat.completions.create({
        model: "llama3.2-1b-instruct",
        messages: [
            {
                role: "system",
                content: "Du bist ein hilfreicher Assistent."
            },
            {
                role: "user",
                content: formData.get("userInput")?.toString() || ""
            }
        ]
    })

    return {
        message:
            completion.choices[0].message.content?.replace("<|eot_id|>", "") ||
            ""
    }
}
