import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    output,
    isSubmitting,
    setIsSubmitting,
    setInputText,
    setOutput,
  } = useContext(GlobalContext)

  const handleClear = (e) => {
    setInputText('')
    setIsSubmitting(null)
    setOutput(null)
  }

  if (!output) {
    return <></>
  }

  return (
    <div className="w-80 md:w-[32rem] m-auto pb-4 text-center">
      <div className="mt-1 text-left border p-3 rounded">{output.text}</div>
      {isSubmitting === false && (
        <button className="btn mt-4" onClick={handleClear}>Clear and play again</button>
      )}
    </div>
  )
}