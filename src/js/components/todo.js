import React from 'react'

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { editText: props.description };
    }
  
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
          this.setState({ editText: e.target.value });
          this.endEdit();
          break;
      }
    }
  
    onChange(e) {
      this.setState({ editText: e.target.value });
    }
  
    render() {
      const { id, description, done, dueDate } = this.props;
      return (
        <div className='level'>
          <div className='level-left'>
            <div className='level-item has-text-right'>{done ? '✔️' : '⭕'}</div>
            <div
              className='level-item has-text-left'
              ref={ref => (this.textDisplay = ref)}
              onClick={() => {
                if (!done) this.startEdit();
              }}
            >
              {done ? (
                <strike>
                  <em>{this.state.editText}</em>
                </strike>
              ) : (
                <span>{this.state.editText}</span>
              )}
            </div>

            {done ? (
              ''
            ) : (
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
                        this.onChange(e);
                      }}
                      value={this.state.editText}
                    />
                  </div>
                </div>
              </div>
            )}

            {dueDate ? (
              <div className='level-item'>
                <div className='tags has-addons'>
                  <span className='tag is-primary'>Due</span>
                  <span className='tag'>{dueDate.toLocaleDateString('en-AU')}</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    }
  }
  
  export default Todo;
  