import axios from "axios"

export function saveEncrypted(title, msg) {
  return {
    type: "STASH",
    payload: axios({
      method: "post",
      url: "api/stash",
      data: { title, msg },
      headers: { "Content-Type": "application/json" }
    })
  }
}

export function fetchEncrypted(title) {
  return {
    type: "FETCH",
    payload: axios({
      method: "get",
      url: `/api/stash/${title}`
    })
  }
}
