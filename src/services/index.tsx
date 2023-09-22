import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const client = new OpenAIClient(
  process.env.REACT_APP_API || "https://momo-genai-9.openai.azure.com",
  new AzureKeyCredential(
    process.env.REACT_APP_OPENAI_API_KEY || "9d9ec18c38cd467b9eaa0ce3064f2ff2"
  )
);

export const chat = async (
  message: string,
  callback: (value: string) => void
) => {
  const deploymentId = "gpt-4";
  const messages = [{ role: "user", content: message }];
  const events = client.listChatCompletions(deploymentId, messages);
  let mess = "";
  for await (const event of events) {
    for (const choice of event.choices) {
      const delta = choice.delta?.content;
      if (delta !== undefined) {
        mess = mess + delta;
      }
    }
  }
  setTimeout(() => {
    callback(mess);
  }, 100);
};
