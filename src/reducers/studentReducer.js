const initialState = {
  requestQuestion: '',
  rrRequest: false
}

const studentReducer = (state = initialState, action) => {
  console.log('student reducer being fired')
  switch (action.type) {
    case 'ASK_QUESTION':
      console.log(action.requestQuestionText)
      return state

    default:
      return state
  }
}

export default studentReducer
