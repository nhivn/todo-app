import React from 'react';

class TodoText extends React.Component {
  state = { description: this.props.initDescription };

  startEdit() {
    this.textDisplay.classList.add('is-hidden');
    this.textInputContainer.classList.remove('is-hidden');
    this.textInput.focus();
  }

  endEdit() {
    this.textDisplay.classList.remove('is-hidden');
    this.textInputContainer.classList.add('is-hidden');
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        this.endEdit();
        break;
    }
  }

  render() {
    var { done } = this.props;
    var { description } = this.state;
    return (
      <div>
        <div
          className='level-item has-text-left'
          ref={ref => (this.textDisplay = ref)}
          onClick={() => {
            this.startEdit();
          }}
        >
          {done ? (
            <strike>
              <em>{description}</em>
            </strike>
          ) : (
            <span>{description}</span>
          )}
        </div>

        <div
          className='level-item is-hidden'
          ref={ref => (this.textInputContainer = ref)}
        >
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                ref={ref => (this.textInput = ref)}
                onKeyDown={e => {
                  this.onKeyDown(e);
                }}
                onBlur={() => {
                  this.endEdit();
                }}
                onChange={e => {
                  this.props.onChange(e);
                }}
                value={description}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoText;
