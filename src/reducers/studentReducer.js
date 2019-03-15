const initialState = {
  requestQuestion: '',
  rrRequest: false
}

const studentReducer = (state = initialState, action) => {
  console.log('student reducer being fired')
  switch (action.type) {
    case 'ASK_QUESTION':
      console.log(action.requestQuestionText)
      return { ...state, requestQuestion: action.requestQuestionText }

    case 'RR_REQUEST':
      console.log(action.rrRequest)
      return { ...state, rrRequest: true }

    case 'RR_REQUEST_RESET':
      return { ...state, rrRequest: false }

    default:
      return state
  }
}

export default studentReducer
