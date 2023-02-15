import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const About = () => {
  const title = 'Simple GPT'
 
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="text-2xl pb-4">
            About {title}
          </span>
        </h3>
        <div>
          <p className="pb-5">
            The idea here is really straightforward. The web app is simply asking the <a className="link link-primary" href="https://beta.openai.com/docs/guides/completion/prompt-design" target="_blank" rel="noopener noreferer">OpenAI text completion API</a> to explain your input in simple terms.
          </p>
          <p className="pb-5">
            Now, why did I build this? Great question! Mostly, I just love to mess around with prototypes and deploy little hacks so that I can use cool new tech. But in this case, in addition to using new tools, I often wanna just as chatgpt to explain something in simple terms, and this site gives me a blazingly fast and easy way to do so without having to authenticate first!
          </p>
          <p className="pb-5">
            Hit me up, and let me know how you like it! <a className="link link-primary" href="https://twitter.com/SeanPlusPlus/" target="_blank" rel="noopener noreferrer">@SeanPlusPlus</a>
          </p>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About
