// Populate with temporary data
const initialState = {
  student: [
    { name: 'Johnny Bravo', attendance: true },
    { name: 'Suzy Cue', attendance: true },
    { name: 'Audy Arandela', attendance: false },
    { name: 'Lee Arnold', attendance: true }
  ],
  agenda: {
    warmUp: { task: '', done: false },
    lesson: { task: '', done: false },
    activity: { task: '', done: false },
    exit: { task: '', done: false }
  },
  restroom: false
}

const agendaReducer = (state = initialState, action) => {
  // Add more cases (delete, toggleRR, adding student, etc..)
  // Or add different reducers (student/attendance, restroom)
  switch (action.type) {
    case 'ADD_AGENDA':
      return state
    default:
      return state
  }
}

export default agendaReducer