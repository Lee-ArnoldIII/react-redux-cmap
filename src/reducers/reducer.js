// Populate with temporary data
const initialState = {
  student: [
    { name: 'Johnny Bravo', attendance: true, question: { hasQuestion: true, text: 'help'} },
    { name: 'Suzy Cue', attendance: true, question: { hasQuestion: false, text: ''} },
    { name: 'Audy Arandela', attendance: false, question: { hasQuestion: true, text: ''} },
    { name: 'Lee Arnold', attendance: true, question: { hasQuestion: true, text: 'help'} }
  ],
  agenda: {
    warmUp: { task: '', done: false },
    lesson: { task: 'a', done: false },
    activity: { task: 'a\na\na', done: false },
    exit: { task: 'a', done: false }
  },
  restroom: true
}

const agendaReducer = (state = initialState, action) => {
  // Add more cases (delete, toggleRR, adding student, etc..)
  // Or add different reducers (student/attendance, restroom)
  console.log('action in reducer', action)
  const { warmUpText, lessonText, activityText, exitText } = action

  switch (action.type) {
    case 'ADD_AGENDA':
      return {
        ...state,
        agenda: {
          warmUp: { task: warmUpText, done: false },
          lesson: { task: lessonText, done: false },
          activity: { task: activityText, done: false },
          exit: { task: exitText, done: false }
        }
      }

    default:
      return state
  }
}

export default agendaReducer
