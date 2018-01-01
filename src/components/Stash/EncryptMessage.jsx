import React from "react"
import { connect } from "react-redux"
import { encrypt } from "aes-cbc-async"

import PasswordField from "../common/PasswordToggle"
import { saveEncrypted } from "../../actions/stashActions"

@connect(store => {
  return {
    saveError: store.stash.saveError,
    saved: store.stash.saved
  }
})
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "password",
      title: "",
      plaintext: "our little secret",
      encrypted: " ",
      passwordInputType: "text"
    }
  }

  componentWillMount() {
    this.handleEncrypt()
  }

  handleEncrypt() {
    encrypt(this.state.password, this.state.plaintext, encrypted => {
      this.setState({ encrypted })
    })
  }

  handleOnChange(e) {
    this.state[e.currentTarget.id] = e.currentTarget.value
    this.handleEncrypt()
  }

  handleSave() {
    const { title, encrypted } = this.state
    console.log("Saving to server: " + title + ":" + encrypted)
    this.props.dispatch(saveEncrypted(title, encrypted))
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
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
        <br />
        Secret Key
        <br />
        <PasswordField
          id="password"
          defaultValue="password"
          change={this.handleOnChange.bind(this)}
        />
        <br />
        <br />
        Plain text
        <br />
        <textarea
          style={{ width: "90%", height: 200 }}
          data-gramm_editor="false"
          id="plaintext"
          defaultValue={this.state.plaintext}
          onChange={this.handleOnChange.bind(this)}
        />
        <br />
        <br />
        Encrypted Text
        <br />
        <p style={{ fontFamily: "monospace", wordBreak: "break-all" }}>
          {this.state.encrypted}
        </p>
        <br />
        <button onClick={this.handleSave.bind(this)}>
          Save to server
        </button>
        <br />
        <p style={{ color: "red" }}>
          {this.props.saveError ? "An error occurred saving to server" : ""}
        </p>
        <p style={{ color: "green" }}>
          {this.props.saved ? "Saved" : ""}
        </p>
      </div>
    )
  }
}
