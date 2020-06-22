import React, { Component } from 'react'
import axios from 'axios'

import './GraphQL.css'

class GraphQL extends Component {

  // Component state
  state = {
    messages: null,
    newMessage: null,
    input: 'Type your message here',
    error: null
  }


  // Axios config
  // (obviously don't store an actual token like this)
  config = {
    headers: {
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkeWxhbmNydXNlQGxpdmUuY29tIiwidXNlcm5hbWUiOiJkeWxhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTU5Mjc4OTEzOCwiZXhwIjoxNTkzMzg5MTM4fQ.Zuxs5GOWvvhf88EcoUbWojLLdgQoiPI1l7xlUNa-PuM'
    }
  }


  // GraphQL endpoint
  endpoint = 'http://localhost:8000/graphql'


  // Get the messages when the component loads
  async componentDidMount() {

    // Query to get messages
    const query = `
      query messages {
        messages {
          edges {
            id
            text
            userId
            createdAt
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `

    // Send request to the GraphQL API
    let response
    try {
      response = await axios.post(
        this.endpoint,
        { query }
      )
    } catch(error) {
      console.log(error)
    }

    // Add the messages to state
    this.setState({
      messages: response.data.data.messages.edges
    })
  }


  // Function to handle new input values
  handleInput = event => {

    event.preventDefault()

    this.setState({
      input: event.target.value
    })
  }


  // Function to create a new message
  createMessage = async event => {

    event.preventDefault()

    const query = `
      mutation {
        createMessage(text: "${this.state.input}") {
          id
          text
          userId
          createdAt
        }
      }
    `

    // Send request to the GraphQL API
    let response
    try {
      response = await axios.post(
        this.endpoint,
        { query },
        this.config
      )
    } catch(error) {
      console.log(error)
    }

    // Add the new message to state
    if (response && response.data && response.data.data && response.data.data.createMessage) {
      this.setState({
        newMessage: response.data.data.createMessage
      })
    } else {
      this.setState({
        error: 'Message creation failed'
      })
    }
  }


  render() {
    return (
      <div className='graphql'>

        <h1 className='graphql_messages-header'>Messages</h1>

        <div className='graphql_messages-wrapper'>
          {/* If there are messages, loop through them and display to page */}
          {this.state.messages && this.state.messages.map(message => (
            <div className='graphql__message' key={message.id}>
              <p>ID: {message.id}</p>
              <p>{message.text}</p> 
              <p>by User {message.userId}</p>
            </div>
          ))}
        </div>

        <div className='graphql_create-msg-wrapper'>
          {/* If a new message was created, display it */}
          {this.state.newMessage && 
            <p>
              Message "{this.state.newMessage.text}" created 
              <span role='img' aria-label='checkmark'>✅</span>
            </p>
          }

          {/* If there was an error, display that */}
          {this.state.error && 
            <p>
              {this.state.error} 
              <span role='img' aria-label='checkmark'>⛔</span>
            </p>
          }

          <input 
            type='text' 
            value={this.state.input} 
            className='graphql_create-msg-input'
            onChange={this.handleInput}
          />
          <button 
            type='submit'
            onClick={this.createMessage}
            className='graphql_create-msg-btn'
          >
            Create Message
          </button>
        </div>

      </div>
    )
  }
}

export default GraphQL
