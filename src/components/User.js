import React from 'react';
 import Modal from "@/components/Modal"


const User = ({ name, location, email, picture, birthdate, phoneNumber }) => {

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
    return (
        <div className="random-user">
            <div><strong>Name:</strong> {name.first} {name.last}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>City/Country:</strong> {location.country}</div>
            <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

       <Modal onClose={this.showModal} show={this.state.show}>
        <div className="user-image">
                <img src={picture.medium} alt={name.first} />
            </div> 
            <div><strong>Name:</strong> {name.first} {name.last}</div>
            <div><strong>Location:</strong> {location.country}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Phone Number:</strong> {phoneNumber}</div>
            <div><strong>Date of Birth:</strong> {birthdate}</div>
        </Modal> 
        </div>
    );
};

export default User;