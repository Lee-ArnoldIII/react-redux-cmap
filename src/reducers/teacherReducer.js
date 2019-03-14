
// Populate with temporary data
const initialState = {
  student: [
    { name: 'Johnny Bravo', attendance: true, restroom: { request: false, accepted: '' }, question: { hasQuestion: false, text: 'help' } },
    { name: 'Suzy Cue', attendance: true, restroom: { request: false, accepted: '' }, question: { hasQuestion: false, text: '' } },
    { name: 'Audy Arandela', attendance: true, restroom: { request: false, accepted: '' }, question: { hasQuestion: false, text: '' } },
    { name: 'Lee Arnold', attendance: true, restroom: { request: false, accepted: '' }, question: { hasQuestion: false, text: 'help' } }
  ],
  agenda: {
    warmUp: { task: '', done: false },
    lesson: { task: '', done: false },
    activity: { task: '', done: false },
    exit: { task: '', done: false }
  }
}

const reducer = (state = initialState, action) => {
  console.log('action in reducer', action)
  const { warmUpText, lessonText, activityText,
    exitText, answered, index, accepted, indexRR } = action

  switch (action.type) {
    case 'ADD_AGENDA':
      let newStateAgenda = JSON.parse(JSON.stringify(state))
      newStateAgenda.agenda = {
        warmUp: { task: warmUpText, done: false },
        lesson: { task: lessonText, done: false },
        activity: { task: activityText, done: false },
        exit: { task: exitText, done: false }
      }
      return newStateAgenda
    case 'DELETE_QUESTION':
      let newStateQuestion = JSON.parse(JSON.stringify(state))
      newStateQuestion.student[index].question = { hasQuestion: answered, text: '' }
      return newStateQuestion

    case 'ACCEPT_RR':
      let newStateRR = JSON.parse(JSON.stringify(state))
      newStateRR.student[indexRR].restroom = { request: false, accepted }
      return newStateRR

    case 'ASK_QUESTION':
      let newStateAskQuestion = JSON.parse(JSON.stringify(state))
      console.log(newStateAskQuestion)
      console.log(action.studentIndex)
      newStateAskQuestion.student[action.studentIndex].question = { hasQuestion: true, text: action.requestQuestionText }
      return newStateAskQuestion

    case 'RR_REQUEST':
      let newStateRRRequest = JSON.parse(JSON.stringify(state))
      newStateRRRequest.student[action.studentIndex].restroom = { request: true, accepted: '' }
      return newStateRRRequest

    case 'RR_REQUEST_RESET':
      return { ...state, rrRequest: false }
    default:
      return state
  }
}

export default reducer
