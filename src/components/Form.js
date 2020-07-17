import React, { Component } from "react";

<<<<<<< HEAD
=======
import { Button } from "@material-ui/core";

>>>>>>> e26f3312fe0270249d9307399d704919d63d13b3
import styles from "./Form.module.css";

const initialState = {
  title: "",
  description: "",
  photos: "",
  rooms: "",
  address: "",
  price: "",
  phone: "",
  titleError: "",
  descriptionError: "",
  addressError: "",
  priceError: "",
  phoneError: "",
};

class Form extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let titleError = "";
    let descriptionError = "";
    let addressError = "";
    let priceError = "";
    let phoneError = "";

    if (!this.state.title) {
      titleError = "Title is required!";
    }

    if (!this.state.description) {
      descriptionError = "Description is required!";
    }

    if (!this.state.address) {
      addressError = "Address is required!";
    }

    if (!this.state.price) {
      priceError = "Price is required!";
    }

    if (!this.state.phone) {
      phoneError = "Phone number is required!";
    } else if (this.state.phone.length < 10) {
      phoneError = "Phone number is too short";
    } else if (this.state.phone.length > 10) {
      phoneError = "Phone number is too long";
    }

    if (
      titleError ||
      descriptionError ||
      addressError ||
      priceError ||
      phoneError
    ) {
      this.setState({
        titleError,
        descriptionError,
        addressError,
        priceError,
        phoneError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      alert("Your Ad was successfull created!");
      this.setState(initialState);
    }
  };

  onChangeHandler = (event) => {
    let files = event.target.files;
    if (this.minSelectedFiles(event)) {
      this.setState({
        photos: files,
      });
    }
  };

  minSelectedFiles = (event) => {
    let files = event.target.files;
    if (files.length < 2) {
      const msg = "Atleast 2 photos are required!";
      event.target.value = null;
      alert(msg);
      return false;
    }
    return true;
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
        <div className={styles.error}>{this.state.titleError}</div>
        <textarea
          name="description"
          placeholder="Description..."
          value={this.state.description}
          onChange={this.handleChange}
          maxLength={500}
        />
        <div className={styles.error}>{this.state.descriptionError}</div>
        <div className={styles.select}>
          <label>Select a number of rooms:</label>
          <select
            name="rooms"
            required
            value={this.state.rooms}
            onChange={this.handleChange}
          >
            <option disabled></option>
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
          <div className={styles.error}>{this.state.roomsError}</div><div className={styles.error}>{this.state.roomsError}</div>
        </div>
        <div className={styles.image}>
          <input
            type="file"
            name="photos"
            multiple
            onChange={this.onChangeHandler}
            className={styles.upload}
          />
<<<<<<< HEAD
=======
          <Button
            variant="contained"
            color="primary"
            onClick={this.onClickHandler}
          >
            Upload
          </Button>
>>>>>>> e26f3312fe0270249d9307399d704919d63d13b3
        </div>
        <input
          name="address"
          placeholder="Address..."
          value={this.state.address}
          onChange={this.handleChange}
        />
        <div className={styles.error}>{this.state.addressError}</div>
        <div className={styles.contact}>
          <div className={styles.left}>
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <div className={styles.error}>{this.state.priceError}</div>
          </div>
          <div className={styles.right}>
            <input
              name="phone"
              placeholder="Phone Number"
              type="number"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <div className={styles.error}>{this.state.phoneError}</div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
