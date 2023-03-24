import { useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'

export default function Input () {
  const {
    output,
    inputText,
    isSubmitting,
    setInputText,
    setOutput,
    setIsSubmitting
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
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
    setOutput(r.data.output)
  }

  if (output) {
    return <></>
  }

  return (
    <div className='w-96 md:w-[32rem] m-auto pb-4 pl-4 pr-4 text-center'>
      <form onSubmit={handleSubmit}>
        <input
          className='w-full textarea textarea-bordered'
          placeholder='Enter text here'
          onChange={(e) => handleChange(e)}
          value={inputText}
          disabled={(isSubmitting === true || isSubmitting === false) && 'disabled'}
        />
        <div>
          {isSubmitting === null && (
            <button className='btn btn-accent mt-4'>Submit</button>
          )}
          {isSubmitting === true && (
            <div className='lds-facebook'><div /><div /><div /></div>
          )}
        </div>
      </form>
    </div>
  )
}
