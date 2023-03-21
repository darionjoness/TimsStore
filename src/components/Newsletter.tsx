import React from 'react'
import { useState } from 'react'

const Newsletter = () => {
  const [inputText, setInputText] = useState<string>('')
  const [subscribedMsg, setSubscribedMsg] = useState<boolean>(false)
  const [emptyInputMsg, setEmptyInputMsg] = useState<boolean>(false)

  const newsletterSubscribed = () => {
    if(inputText != ''){
      setInputText('')
      setSubscribedMsg(true)
      hideNewsletterMsg()
    }
  }

  const hideNewsletterMsg = () => {
    setTimeout(() => {
      setSubscribedMsg(false)
    }, 3000)
  }

  return (
    <div className='newsLetter'>
        <div className="newsLetterItems container">
            <h2>Subscribe To Our Newsletter: </h2>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="email" placeholder='Email Address' />
            <button onClick={newsletterSubscribed}>Sign Up</button>
        </div>
        {subscribedMsg ? <p className='subscribed'>Subscribed!</p> : ''}
    </div>
  )
}

export default Newsletter