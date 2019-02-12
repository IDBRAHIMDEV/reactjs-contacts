import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT': 
      return {
        contacts: state.contacts.filter((contact) => contact.id !== action.payload)
      };
      case 'ADD_CONTACT': 
      return {
        contacts: [action.payload, ...state.contacts]
      };
    default: 
      return state;
  }
}

export class Provider extends Component {

    state = {
        contacts: [
          {id: 1, name: "Mohamed IDBRAHIM", phone: "0650303315", email: "idbrahimdev@gmail.com"},
          {id: 2, name: "Basma IDBRAHIM", phone: "0650303315", email: "basma@gmail.com"},
          {id: 3, name: "Walid IDBRAHIM", phone: "0650303315", email: "walid@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
      }

  render() {
    return (
      <Context.Provider value={this.state}>
            {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
