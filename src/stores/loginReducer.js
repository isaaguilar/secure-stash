const initLogin = {
  authenticated: window.localStorage.getItem("access_token") != null,
  email: null,
  error: null
}

export default function reducer(state = initLogin, action) {
  switch (action.type) {
    case "LOGIN_REJECTED": {
      return {
        ...state,
        error: action.payload.message,
        email: null,
        authenticated: false
      }
    }
  }
  return state
}
