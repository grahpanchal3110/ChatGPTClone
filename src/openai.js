// // const { Configuration, OpenAIApi } = require("openai");

// // const configuration = new Configuration({
// //   apiKey:
// //     "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",
// // });

// // const openai = new OpenAIApi(configuration);

// // export async function sendMsgOpenAI(message) {
// //   const res = await openai.createCompletion({
// //     model: "gpt-3.5-turbo-instruct",
// //     prompt: message,
// //     temperature: 0.7,
// //     max_tokens: 256,
// //     top_p: 1,
// //     frequency_penalty: 0,
// //     presence_penalty: 0,
// //   });

// //   return res.data.choices[0].text;
// // }

// // import { Configuration, OpenAIApi } from "openai";

// // const configuration = new Configuration({
// //   apiKey:
// //     "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",
// // });

// // const openai = new OpenAIApi(configuration);

// // export async function sendMsgOpenAI(message) {
// //   const res = await openai.createCompletion({
// //     model: "text-davinci-003",
// //     prompt: message,
// //     temperature: 0.7,
// //     max_tokens: 256,
// //     top_p: 1,
// //     frequency_penalty: 0,
// //     presence_penalty: 0,
// //   });

// //   return res.data.choices[0].text;
// // }

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey:
//     "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",
//   dangerouslyAllowBrowser: true,
// });

// export async function sendMsgOpenAI(message) {
//   try {
//     const completion = await openai.completions.create({
//       model: "gpt-3.5-turbo-0125",
//       prompt: message,
//       temperature: 0.7,
//       max_tokens: 256,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });

//     return completion.choices[0].text;
//   } catch (error) {
//     console.error("Error calling OpenAI:", error);
//     throw error;
//   }
// }

import axios from "axios";

const API_KEY =
  "a726492776b76185123fdbef500c038bdb1be4a419a3fea2f189c86267e074eb"; // Replace with your API key

export async function sendMsgOpenAI(message) {
  try {
    const response = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "meta-llama/Llama-2-7b-chat-hf", // Free model (or try "gpt-3.5-turbo")
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
        max_tokens: 256,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling Together.AI:", error);
    return "Error: Unable to process request.";
  }
}
