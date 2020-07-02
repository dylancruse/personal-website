import React, { Component } from 'react'
import axios from 'axios'


class DadJokes extends Component {

  // Component state
  state = {
    dadJoke: null
  }

  // Axios config
  config = {
    headers: {
      Accept: 'application/json'
    }
  }

  // Get the inital joke when the component mounts
  async componentDidMount() {

    // Send request to the API
    let response
    try {
      response = await axios.get('https://icanhazdadjoke.com/', this.config)
    } catch(error) {
      console.log(error)
    }

    // Add the joke to state
    if (response && response.data && response.data.joke) {
      this.setState({
        dadJoke: response.data.joke
      })
    } else {
      this.setState({
        dadJoke: 'Unable to get joke :('
      })
    }
  }

  // Function to fetch a new joke 
  getDadJoke = async () => {

    // Send request to the API
    let response
    try {
      response = await axios.get('https://icanhazdadjoke.com/', this.config)
    } catch(error) {
      console.log(error)
    }

    // Add the joke to state
    if (response && response.data && response.data.joke) {
      this.setState({
        dadJoke: response.data.joke
      })
    } else {
      this.setState({
        dadJoke: 'Unable to get joke :('
      })
    }
  }

  render() {
    return (
      <div className='dad-jokes'>

        <h1 className='dad-jokes__text'>{this.state.dadJoke}</h1>
        
        <button className='dad-jokes__btn' onClick={this.getDadJoke}>
          New joke <span role='img' aria-label='speech bubble'>💬</span>
        </button>

      </div>
    )
  }
}

export default DadJokes
