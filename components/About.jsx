import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { APP_TITLE } from '../constants'
import Description from './Description'

const About = () => {
  const {
    modal,
    setModal
  } = useContext(GlobalContext)

  const handleClose = () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className='modal-box relative'>
        <label htmlFor='my-modal-3' className='btn btn-sm btn-circle absolute right-4 top-4' onClick={handleClose}>✕</label>
        <h3 className='font-bold text-xl flex'>
          <span className='text-2xl pb-4'>
            About {APP_TITLE}
          </span>
        </h3>
        <div>
          <Description />
        </div>
        <div className='modal-action pt-5'>
          <label htmlFor='my-modal' className='btn' onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About
