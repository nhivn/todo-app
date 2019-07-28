import React from 'react';
import TodoCheckbox from './todo-checkbox';
import TodoDueDate from './todo-duedate';
import TodoText from './todo-text';
import moment from 'moment';

class Todo extends React.Component {
  state = { 
    dueDate: this.props.dueDate,
    description: this.props.description, 
    done: this.props.done 
  };

  onTextChange(e) {
    this.setState({ description: e.target.value });
  }

  onDateChange(e) {
    this.setState({ dueDate: moment(e.target.value).toDate() });
  }

  toggleCheckBox() {
    this.setState({done: !this.state.done});
  }

  render() {
    const { id, description, done, dueDate } = this.state;
    return (
      <div className='level'>
        <div className='level-left'>
          <div className='level-item has-text-right'>
            <TodoCheckbox done={done} onClick={() => this.toggleCheckBox()} />
          </div>

          <TodoText initDescription={description} done={done} onChange={(e) => {this.onTextChange(e)}} />

          {dueDate ? (
            <TodoDueDate initDate={dueDate} onChange={(e) => this.onDateChange(e)} />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
  
export default Todo;
  