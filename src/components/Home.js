import React from "react"
import EncryptMessage from "./Stash/EncryptMessage"
import DecryptMessage from "./Stash/DecryptMessage"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
  }

  toggler() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <button onClick={this.toggler.bind(this)}>
          Switch to {this.state.toggle ? "Decryption" : "Encryption"}
        </button>
        <h1>
          {this.state.toggle ? "Encrypt" : "Decrypt"}
        </h1>
        {this.state.toggle ? <EncryptMessage /> : <DecryptMessage />}
      </div>
    )
  }
}
