import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    authenticated: store.login.authenticated
  }
})
export default class extends React.Component{

  componentWillMount() {
    console.log("authenticated:", this.props.authenticated)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
