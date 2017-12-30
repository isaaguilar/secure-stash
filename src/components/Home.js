import React from "react"
import { encrypt, decrypt } from "aes-cbc-async"

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      password: "password",
      plaintext: "our little secret",
      encrypted: undefined,
      password2: "password",
      plaintext2: "out little secret",
      encrypted2: "dmd0NGg0MWJ1aDgrMTEyNDBkMTk5MDRmMzE0MGYwNTNlYTI0MjFhOTEzZDg6MzdiNzgxOTFhM2FmMjhmZDg2ZTdjNzJjOTEwZTU0MmIyOGZiMWJhZTYzOWZmZjU1ZDVhNGRjODhkNWVmYzA5ZA=="
    }
  }

  componentWillMount(){
    this.handleEncrypt()
    this.handleDecrypt2()
  }

  handleEncrypt(){
    encrypt(this.state.password, this.state.plaintext, (encrypted) => {
      this.setState({encrypted})
    })
  }

  handleDecrypt(){
    decrypt(this.state.password, this.state.encrypted, (plaintext) => {
      this.setState({plaintext})
    })
  }

  handleEncrypt2(){
    encrypt(this.state.password2, this.state.plaintext2, (encrypted2) => {
      this.setState({encrypted2})
    })
  }

  handleDecrypt2(){
    decrypt(this.state.password2, this.state.encrypted2, (plaintext2) => {
      this.setState({plaintext2})
    })
  }

  handleOnChange(e){
    this.state[e.currentTarget.id] = e.currentTarget.value
    this.handleEncrypt()
  }

  handleOnChange2(e){
    this.state[e.currentTarget.id] = e.currentTarget.value
    this.handleDecrypt2()
  }

  render() {
    return (
      <div style={{padding: 20}}>
        Secret Key
        <br />
        <input 
          id="password" 
          type="text"
          defaultValue="password" 
          onChange={this.handleOnChange.bind(this)} 
        />
        <br /><br />
        Plain text
        <br />
        <textarea
          data-gramm_editor="false"
          cols="50"
          rows="5"
          id="plaintext" 
          defaultValue={this.state.plaintext} 
          onChange={this.handleOnChange.bind(this)} 
        />
        <br />
        <br />
        Encrypted Text
        <br />
        <p 
          style={{fontFamily: "monospace", wordBreak: "break-all"}}
        >
          {this.state.encrypted}
        </p>
        <br />
        <hr />
        <br />
        Secret Key
        <br />
        <input 
          id="password2" 
          type="text"
          defaultValue="password" 
          onChange={this.handleOnChange2.bind(this)} 
        />
        <br /><br />
        Encrypted Text
        <br />
        <textarea
          data-gramm_editor="false"
          cols="50"
          rows="5"
          id="encrypted2" 
          defaultValue={this.state.encrypted2} 
          onChange={this.handleOnChange2.bind(this)} 
        />
        <br />
        <br />
        Plain text
        <br />
        <p 
          style={{fontFamily: "monospace", wordBreak: "break-all"}}
        >
          {this.state.plaintext2}
        </p>
        <br />
        <br />

        
        
      </div>
    )
  }
}
