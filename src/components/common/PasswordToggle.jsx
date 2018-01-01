import React from "react"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordInputType: "text"
    }
  }

  toggleShowPassword() {
    if (this.state.passwordInputType === "password") {
      this.setState({ passwordInputType: "text" })
    } else {
      this.setState({ passwordInputType: "password" })
    }
  }

  render() {
    const isPasswordType = this.state.passwordInputType === "password"

    return (
      <div>
        <input
          id={this.props.id}
          // id="password"
          type={this.state.passwordInputType}
          defaultValue={this.props.defaultValue}
          // defaultValue="password"
          autoComplete="off"
          data-lpignore="true"
          // onChange={this.handleOnChange.bind(this)}
          onChange={this.props.change.bind(this)}
        />
        <button onClick={this.toggleShowPassword.bind(this)}>
          {isPasswordType ? "Show" : "Hide"} password
        </button>
      </div>
    )
  }
}
