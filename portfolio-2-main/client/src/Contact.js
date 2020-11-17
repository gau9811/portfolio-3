import { colors } from '@material-ui/core'
import React, { useState } from 'react'
import Axios from "axios"

import "./App.css"
const Contact = ({ dark }) => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const SendMsg = (e) => {

    var opt = {
      email: email,
      msg: msg
    }
    fetch('/sendMsg', {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opt)
    }).then(success => {
      console.log(success.status)
      if (success.status === 200) {
        setSuccess(true)
        setMsg('')
        setEmail('')
      } else {
        setSuccess(false)
      }
      e.preventDefault();
    }).catch(err => err)
  }







  return (
    <div>
      <form onSubmit={(e) => { SendMsg(e) }}>
        <div className="Contact">
          <h1 style={{
            color: "white",
            marginTop: "150px"
          }}>Contact</h1>
          <p style={{
            color: "white",
            width: "100px"
          }}>Email</p>
          <input
            style={{

              width: "200px"
            }}
            type="email" onChange={(e) => setEmail(e.target.value)} />
          <div>
            <p style={{
              color: "white"
            }}>Inbox</p>
            <input style={{
              height: "100px",
              width: "200px"
            }} type="textArea" onChange={(e) => setMsg(e.target.value)} />
          </div>
          <button style={
            {
              backgroundColor: "white",
              color: "black",
              marginTop: "10px",
              border: "none",
              height: "20px"
            }
          } type="submit" class="btn btn-dark " >send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
