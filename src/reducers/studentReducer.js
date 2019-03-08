const initialState = {
  student: [
    { name: 'Johnny Bravo', attendance: true, question: { hasQuestion: true, text: 'help' } },
    { name: 'Suzy Cue', attendance: true, question: { hasQuestion: false, text: '' } },
    { name: 'Audy Arandela', attendance: true, question: { hasQuestion: true, text: '' } },
    { name: 'Lee Arnold', attendance: true, question: { hasQuestion: true, text: 'help' } }
  ],
  agenda: {
    warmUp: { task: '', done: false },
    lesson: { task: 'a', done: false },
    activity: { task: 'a\na\na', done: false },
    exit: { task: 'a', done: false }
  },
  restroom: false
}
