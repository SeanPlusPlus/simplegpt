import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from '../reducers/AppReducer';
import { log } from '../utils/logger'

const initialState = {
  modal: {},
  inputText: '',
  alert: {
    text: 'Ask GPT to explain anything in simple terms',
    status: 'info',
  },
  output: null,
  isSubmitting: null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setModal(data) {
    dispatch({
      type: 'UPDATE_MODAL',
      payload: data
    });
  }

  function setInputText(data) {
    dispatch({
      type: 'UPDATE_INPUT_TEXT',
      payload: data
    });
  }

  function setIsSubmitting(data) {
    dispatch({
      type: 'UPDATE_IS_SUBMITTING',
      payload: data
    });
  }

  function setAlert(data) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: data
    });
  }

  function setOutput(data) {
    dispatch({
      type: 'UPDATE_OUTPUT',
      payload: data
    });
  }

  useEffect(() => {
    log('state', 'rgb(217, 38, 169)', state)
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        ...state,
        setModal,
        setInputText,
        setIsSubmitting,
        setAlert,
        setOutput,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}