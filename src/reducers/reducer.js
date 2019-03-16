import db from '../database/db'

const reducer = (state = db, action) => {
  const { warmUpText, lessonText, activityText,
    exitText, answered, index, accepted, indexRR, teacherAnswered } = action

  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_AGENDA':
      newState.agenda = {
        warmUp: { task: warmUpText, done: false },
        lesson: { task: lessonText, done: false },
        activity: { task: activityText, done: false },
        exit: { task: exitText, done: false }
      }
      return newState
    case 'DELETE_QUESTION':
      newState.student[index].question = { hasQuestion: answered, text: '' }
      return newState
    case 'ACCEPT_RR':
      newState.student[indexRR].restroom = { request: true, accepted, teacherAnswered }
      setTimeout(() => {
        newState.student[indexRR].restroom = { request: false, accepted, teacherAnswered: false }
      }, 2000)
      return newState
    case 'ASK_QUESTION':
      newState.student[action.studentIndex].question = { hasQuestion: true, text: action.requestQuestionText }
      return newState
    case 'RR_REQUEST':
      newState.student[action.studentIndex].restroom = { request: true, accepted: '', teacherAnswered: true }
      return newState
    default:
      return state
  }
}

export default reducer
