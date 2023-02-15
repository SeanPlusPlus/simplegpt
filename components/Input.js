import { useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    inputText,
    setInputText,
    isSubmitting,
    setIsSubmitting,
    setAlert,
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleClear = (e) => {
    setInputText('')
    setAlert({
      text: 'Test whether a block of text was written by an AI or a human',
      status: 'info',
    })
    setIsSubmitting(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!inputText) {
      return
    }

    setIsSubmitting(true)
 
    const r = await axios.post(
      '/api', { inputText }
    )
  
    setIsSubmitting(false)

    const { status, output: { text } } = r.data

    console.log('*', r.data)

    const a = {
      status,
      text,
    }

  }

  return (
    <div className="w-80 md:w-[32rem] m-auto pb-4 text-center">
      <textarea
        className="w-full textarea textarea-bordered"
        placeholder="Enter text here" 
        onChange={(e) => handleChange(e)}
        value={inputText}
        disabled={(isSubmitting === false) && "disabled"}
      ></textarea>
      <div>
        {isSubmitting === null && (
          <button className="btn btn-accent mt-4" onClick={handleSubmit}>Submit</button>
        )}
        {isSubmitting === true && (
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        )}
        {isSubmitting === false && (
          <button className="btn mt-4" onClick={handleClear}>Clear and play again</button>
        )}
      </div>
    </div>
  )
}