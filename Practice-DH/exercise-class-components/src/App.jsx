import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      anecdotes: [],
      current: 0
    }
  }

  render(){

    if(this.state.anecdotes.length === 0){
      return <h4>No anecdotes here...</h4>
    }
      
    return(
      <div>
        <h4>Anecdote of the day</h4>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
        <button>Next</button>
      </div>
    )
  }
}

export default App
