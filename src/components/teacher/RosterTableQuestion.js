import React from 'react'

const RosterTableQuestion = ({ text }) => {
  return (
    <React.Fragment>
      <td>
          <button class="button is-danger is-small modal-button" data-target="modal-ter" aria-haspopup="true">question</button>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            {text}
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
      </td>
    </React.Fragment>
  )
}

export default RosterTableQuestion
