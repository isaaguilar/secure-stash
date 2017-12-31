const initData = {
  saveError: null,
  saved: null,
  msg: null,
  title: null,
}

export default function reducer(state=initData, action) {
  switch (action.type) {
    case "STASH_FULFILLED": {
      return {
        ...state,
        saveError: null,
        saved: true,
      }
    }
    case "STASH_REJECTED": {
      return {
        ...state,
        saveError: action.payload.data.code,
        saved: null,
      }
    }
    case "STASH_PENDING": {
      return {
        ...state,
        saveError: null,
        saved: null,
      }
    }
    case "FETCH_FULFILLED": {
      return {
        ...state,
        fetchError: null,
        msg: action.payload.data.msg,
      }
    }
    case "FETCH_REJECTED": {
      return {
        ...state,
        fetchError: action.payload.data.code,
        msg: null,
      }
    }
    case "FETCH_PENDING": {
      return {
        ...state,
        fetchError: null,
        msg: null,
      }
    }
  }
  return state
}
