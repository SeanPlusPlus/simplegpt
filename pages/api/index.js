import _get from 'lodash/get'
import { Configuration, OpenAIApi } from 'openai'

require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

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

  const prompt = `Explain "${inputText}" in simple terms`

  const baseCompletion = await openai.createCompletion({
    prompt,
    model: 'text-davinci-003',
    temperature: 0.1,
    max_tokens: 256,
  });
  
  const output = baseCompletion.data.choices.pop()

  res.status(200).json({
    received: inputText,
    output,
    prompt,
  })
}

export default handleInput
