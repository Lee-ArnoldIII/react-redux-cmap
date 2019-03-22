import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Landing from './components/Landing'

// Components
import App from './components/App'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducer'
import StudentDashboard from './components/student/StudentDashboard'
import TeacherDashboard from './components/teacher/TeacherDashboard'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/student' component={StudentDashboard} />
        <Route exact path='/teacher' component={TeacherDashboard} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

</Provider>, document.getElementById('root'))
