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
      <section className='section'>
        <div className='container'>
          <Tabs
            activeTab={this.state.activeTab}
            changeTab={this.changeTab} />

          {this.state.activeTab === 0 ? <StudentDashboard /> : null}
          {this.state.activeTab === 1 ? <TeacherDashboard /> : null}
        </div>
      </section>
    )
  }
}

export default App