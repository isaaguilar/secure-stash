import axios from "axios"

export function logMeIn(email, password) {
  return {
    type: "LOGIN",
    payload: axios({
      method: "post",
      url: "api/user/auth",
      data: { email, password },
      headers: { "Content-Type": "application/json" }
    })
  }
}
