import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Consumer } from '../context';
import './contact.css'
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactToggle: true
  }

  showContact(myMessage) {
    console.log('salam: ', myMessage);
    
    this.setState({
      showContactToggle: !this.state.showContactToggle
    });
  }

  onDeleteClick = async (id, dispatch) => {

  try {

    const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
   
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    })

  }
  catch(e) {
    console.log(e.error)
  }
   

   
  }

  render() {
    const { id, name, phone, email } = this.props.data;

    return (
      <Consumer>
        {value => {
               const { dispatch } = value;
               return (
                <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    { name } <i onClick={ this.showContact.bind(this, name) } 
                    className="fa fa-sort-down" style={{ cursor: 'pointer' }}></i>
                    

                     <Link to={`/contact/edit/${id}`}>
                        <i className="fa fa-pencil" style={{
                          color: 'orange',
                          float: 'right',
                          cursor: 'pointer',
                          marginLeft: '8px'
                        }}>
                        </i>
                     </Link>

                    <i style={{color: 'red', float:'right', cursor: 'pointer'}} className="fa fa-times" aria-hidden="true"
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    ></i>


                  </h4>
                  <div className="card-text">
                  {(this.state.showContactToggle) ? (
                     <ul className="list-group">
                     <li className="list-group-item">{ phone }</li>
                     <li className="list-group-item">{ email }</li>
                   </ul>
                  ) : null}
                   
                  </div>
                </div>
              </div>
              )
          }
        }
      </Consumer>
    )
    
  }
}



Contact.propTypes = {
  data: PropTypes.object.isRequired
}

export default Contact;
