import React, { Component } from 'react'
import Tabs from './Tabs'

// Components
import StudentDashboard from './student/StudentDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: 0
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (newTab) {
    this.setState({
      activeTab: newTab
    })
  }

  render () {
    return (
      <div>

        <section class='hero'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>
        Welcome To CMAP
              </h1>
              <h2 class='subtitle'>
        The Classroom Assistance Tool of Tomorrow
              </h2>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default App
