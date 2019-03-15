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

export default initialState
