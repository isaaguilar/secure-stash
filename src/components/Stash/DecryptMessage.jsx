import React from 'react'
import { connect } from 'react-redux'
import { decrypt } from "aes-cbc-async"

import { fetchEncrypted } from '../../actions/stashActions'

@connect((store) => {
  return {
    msg: store.stash.msg
  }
})
export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      password: "password",
      encrypted: "d3V0eGplNWcyOSthNDY0ZjMyZWI2MjE5OGMwNzRkYzYxZDM3OWRkODg3NjozNTYzMDU3YTg0ZTcwNDBmYTMwODYzZTFhMzBjY2U1YTFmMGQzMjBlNGY3MTU1MTNjNDNhYzNhZGIzYTk2YWI1",
      plaintext: ""
    }
  }

  componentWillMount(){
    this.handleDecrypt()
  }

  handleDecrypt(){
    decrypt(this.state.password, this.state.encrypted, (plaintext) => {
      this.setState({plaintext})
    })
  }

  handleOnChange(e){
    this.setState({[e.currentTarget.id]: e.currentTarget.value})
    this.state[e.currentTarget.id] = e.currentTarget.value
    this.handleDecrypt()
  }

  handleFetch(){
    this.props.dispatch(fetchEncrypted(this.state.title))
      .then(() => {
        this.setState({encrypted: this.props.msg})
        this.handleDecrypt()
      })
  }

  handleDelete(){

  }

  render(){
    return(
      <div style={{padding: 20}}>
        Title
        <br />
        <input
          id="title"
          type="text"
          defaultValue={this.state.title}
          placeholder="example: top-secret"
          autoComplete="off"
          data-lpignore="true"
          onChange={this.handleOnChange.bind(this)}
        />
        <br />
        <button
          onClick={this.handleFetch.bind(this)}
        >
          Fetch encrypted text
        </button>
        <br />
        <button
          style={{borderColor: "red"}}
          onClick={this.handleDelete.bind(this)}
        >
          Delete message from server
        </button>
        <br />
        <br />
        Secret Key
        <br />
        <input
          id="password"
          type="text"
          defaultValue="password"
          autoComplete="off"
          data-lpignore="true"
          onChange={this.handleOnChange.bind(this)}
        />
        <br />
        <br />
        Encrypted Text
        <br />
        <textarea
          style={{width: "90%", height: 200}}
          data-gramm_editor="false"
          id="encrypted"
          // defaultValue={this.state.encrypted}
          value={this.state.encrypted}
          onChange={this.handleOnChange.bind(this)}
        />
        <br />
        <br />
        Plain text
        <br />
        <p
          style={{fontFamily: "monospace", wordBreak: "break-all"}}
        >
          {this.state.plaintext}
        </p>
        <br />
      </div>
    )
  }
}