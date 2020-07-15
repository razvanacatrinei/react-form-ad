import React, { Component } from "react";
import Image from './Image'


import styles from './Form.module.css'

class Form extends Component {
  state = {
    title: "",
    description: "",
    photos: "",
    rooms: "",
    address: "",
    price: "",
    phone: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder=" Title"
          value={this.state.title}
          onChange={this.handleChange}
          maxLength={150}
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={this.state.description}
          onChange={this.handleChange}
          maxLength={500}
        />
        <select
          name="rooms"
          value={this.state.rooms}
          onChange={this.handleChange}
        >
          <option>1 Room</option>
          <option>2 Rooms</option>
          <option>3 Rooms</option>
        </select>
        <div className={styles.image} name="photos" value={this.state.photos} onChange={this.handleChange}>
          <Image />
        </div>
        <input
          name="address"
          placeholder="Address..."
          value={this.state.address}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          type="number"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
