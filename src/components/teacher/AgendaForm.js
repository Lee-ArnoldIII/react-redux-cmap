import React from 'react'

const AgendaForm = () => {
  return (
    <div className='column is-half'>
      <div class="box">
        <h1 class="title has-text-centered">Agenda Form</h1>

          <div class="field">
            <label class="label">Warm Up</label>
            <div class="control">
              <input class="input" type="text" placeholder="Warm up"/>
            </div>
          </div>

          <div class="field">
            <label class="label">Lesson/Content</label>
            <div class="control">
              <input class="input" type="text" placeholder=""/>
            </div>
          </div>

          <label class="label">Activity</label>
          <div class="control">
            <textarea class="textarea has-fixed-size" placeholder=""></textarea>
          </div>

          <div class="field">
            <label class="label">Exit</label>
            <div class="control">
              <input class="input" type="text" placeholder=""/>
            </div>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <a class="button is-primary">
                Submit
              </a>
            </p>
            <p class="control">
              <a class="button is-light">
                Cancel
              </a>
            </p>
          </div>
      </div>
    </div>
  )
}

export default AgendaForm
