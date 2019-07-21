import React from 'react'
import Todo from './components/todo'
import Welcome from './components/welcome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: Date.now(),
          description: 'Learn about React',
          done: false,
          dueDate: new Date()
        },
        {
          id: Date.now() + 1,
          description: 'Listen some music',
          completed: true
        },
        {
          id: Date.now() + 2,
          description: 'Debug the code',
          done: false
        },
        {
          id: Date.now() + 3,
          description: 'Dream',
          done: true
        }
      ]
    };
  }

  render() {
    return (
      <div className='center'>
        <Welcome name='Nhi' />
        {this.state.todos.map(todo => (<Todo id={todo.id} description={todo.description} done={todo.done} dueDate={todo.dueDate} />))}
      </div>
    );
  }
}

export default App;
