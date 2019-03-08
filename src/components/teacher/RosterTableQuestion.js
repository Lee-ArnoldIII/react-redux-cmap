import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'

class RosterTableQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleAnsweredModal = this.handleAnsweredModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  handleAnsweredModal (index) {
    this.setState({ showModal: false })
    this.props.answered(false, this.props.index)
  }

  render () {
    return (
      <React.Fragment>
        <td>
          <button onClick={this.handleOpenModal} className='button is-danger is-small modal-button' data-target='modal-ter' aria-haspopup='true'>Question</button>
          {this.state.showModal ? <Modal text={this.props.text}
            name={this.props.name}
            close={this.handleCloseModal}
            answeredBtn={this.handleAnsweredModal}
            hasQuestion={this.props.hasQuestion} /> : null}
        </td>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  answered: (answered, index) => dispatch({ type: 'DELETE_QUESTION', answered, index })
})

export default connect(null, mapDispatchToProps)(RosterTableQuestion)
