import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Alert() {
  const {
    alert
  } = useContext(GlobalContext)

  if (!alert) {
    return <></>
  }

  return (
    <div className="w-96 md:w-[32rem] m-auto mt-6 mb-4 pl-4 pr-4">
      <div className={getAlertType()}>
        <div>
          <span>
            {alert.text}
          </span>
        </div>
      </div>
    </div>
  )
}

const getAlertType = () => {
  return 'rounded alert shadow-lg alert-info'
}