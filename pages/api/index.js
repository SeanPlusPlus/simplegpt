import _get from 'lodash/get'
import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'

require('dotenv').config()

// Slack
const SLACK_WEB_HOOK_URL = process.env.SLACK_WEB_HOOK_URL

// OpenAI
const MAX_TOKENS = 1024
const TEMPERATURE = 0.1
const MODEL = 'text-davinci-003'
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

// handler
const handleInput = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const json = req.body
  const inputText = _get(json, 'inputText')

  if (!inputText) {
    res.status(400).send({ message: 'must pass inputText' })
    return
  }

  const prompt = `Explain ${inputText} in simple terms`

  const baseCompletion = await openai.createCompletion({
    prompt,
    model: MODEL,
    temperature: TEMPERATURE,
    max_tokens: MAX_TOKENS
  })

  const output = baseCompletion.data.choices.pop()

  if (SLACK_WEB_HOOK_URL) {
    const slackData = JSON.stringify({
      text: output.text
    })
    await axios.post(SLACK_WEB_HOOK_URL, slackData)
  }

  res.status(200).json({
    received: inputText,
    output,
    prompt
  })
}

export default handleInput
