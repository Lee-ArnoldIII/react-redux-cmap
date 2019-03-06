import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './components/App'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducer'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
