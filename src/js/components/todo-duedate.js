import React from 'react';
import moment from 'moment';


class TodoDueDate extends React.Component {
  state = {dueDate: this.props.initDate};
  
  startEdit() {
    this.dateDisplay.classList.add('is-hidden');
    this.dateInputContainer.classList.remove('is-hidden');
    this.dateInput.focus();
  }

  endEdit() {
    this.dateDisplay.classList.remove('is-hidden');
    this.dateInputContainer.classList.add('is-hidden');
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        this.endEdit();
        break;
    }
  }

  render() {
    var {dueDate} = this.state; 
    console.log(dueDate.toLocaleDateString())
    return (
      <div>
        <div 
          className='level-item'
          ref={ref => (this.dateDisplay = ref)} 
          onClick={() => {this.startEdit()}}
        >
          <div className='tags has-addons'>
            <span className='tag is-primary'>Due</span>
            <span className='tag'>
              {dueDate.toLocaleDateString('en-AU')}
            </span>
          </div>
        </div>

        <div
          className='level-item is-hidden'
          ref={ref => (this.dateInputContainer = ref)}
        >
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='date'
                ref={ref => (this.dateInput = ref)}
                onKeyDown={e => {
                  this.onKeyDown(e);
                }}
                onBlur={() => {
                  this.endEdit();
                }}
                onChange={e => {
                  this.props.onChange(e);
                }}
                onInput={e => {
                  this.props.onChange(e);
                }}
                value={moment(dueDate).format('YYYY-MM-DD')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoDueDate;
