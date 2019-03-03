import React, { Component } from 'react'
import Tab from './Tab';

class Tabs extends Component {
  render() {
    let { activeTab, changeTab } = this.props
      return (
        <div className="tabs is-boxed is-medium is-centered">
          <ul>
            <Tab label="Student Dashboard"
                  handleClick={() => {changeTab(0)}}  
                  isActive={activeTab === 0}/>
            <Tab label="Teacher Dashboard" 
                  handleClick={() => {changeTab(1)}}
                  isActive={activeTab === 1}  />
          </ul>
        </div>
      )
  }
}

export default Tabs