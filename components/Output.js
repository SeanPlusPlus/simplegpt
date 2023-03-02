import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    output,
    inputText,
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
    <div className="w-96 m-auto pb-4 py-4 text-center">
        <div className="card bg-neutral shadow-xl rounded">
          <div className="card-body text-left">
            <h2 className="card-title">{inputText}</h2>
            <p className="pb-2 text-sm">
              {output.text}
            </p>
          </div>
        </div>
      {isSubmitting === false && (
        <button className="btn mt-4 btn-outline" onClick={handleClear}>Clear and play again</button>
      )}
    </div>
  )
}