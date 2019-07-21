import React from 'react'

class Welcome extends React.Component {
    render() {
      return (
        <div className='title'>
          <h1>Hello, {this.props.name}!</h1>
        </div>
      )
    }
  }
  
  export default Welcome;
  