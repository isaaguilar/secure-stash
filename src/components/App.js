import React from "react"
import { connect } from "react-redux"

@connect(store => {
  return {
    authenticated: store.login.authenticated
  }
})
export default class extends React.Component {
  componentWillMount() {
    console.log("authenticated:", this.props.authenticated)
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <h1>Instructions</h1>
        <span style={{ fontWeight: "bolder" }}>Encrypt:</span> Type a secret key
        and a message to encrypt. The message gets encrypted in real time.
        To stash the message on the server for later retrival, input a title
        and select "Save to server."
        <br /><br />
        <span style={{ fontWeight: "bolder" }}>Decrypt:</span> Type the secret
        key and the encrypted message. The message gets decrypted in real
        time. To retrieve an encrypted message from the server, enter a title
        and select "Fetch encrypted text."
        {this.props.children}
      </div>
    )
  }
}
