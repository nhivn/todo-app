import React from 'react';

class TodoCheckbox extends React.PureComponent {
    render() {
        return (
            <div onClick={() => {this.props.onClick()}}>
              {this.props.done ? '✔️' : '⭕'}
            </div>
        )
    }
}

export default TodoCheckbox;