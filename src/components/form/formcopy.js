import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import IngredientsInputs from "./IngredientsInputs";

class CocktailForm extends Component {
  state = {
    name: "",
    description: "",
    instructions: "",
    ingredients: [{ name: "", quantity: "" }]
  };

  addIngredient = e => {
    e.preventDefault();
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, { name: "", quantity: "" }]
    }));
  };

  handleChange = e => {
    if (["name", "quantity"].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ingredients }, () => console.log(this.state.ingredients));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log(this.props);
    let { ingredients } = this.state;
    return (
      <form
        onSubmit={e => this.props.submitHandler(e, this.state)}
        onChange={this.handleChange}
      >
        <FormGroup>
          <h1>Create CockTail</h1>
          <br />
          <ControlLabel>
            <h5>Name:</h5>
          </ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter name"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <FormControl.Feedback />
          <br />
          <ControlLabel>
            <h5>Description:</h5>
          </ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Enter Description"
            name="description"
            value={this.state.description}
            id="description"
            onChange={this.changeHandler}
          />
          <FormControl.Feedback />
          <br />
          <ControlLabel>
            <h5>Instructions:</h5>
          </ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Enter Instructions"
            name="instructions"
            value={this.state.instructions}
            onChange={this.changeHandler}
            id="instructions"
          />
          <FormControl.Feedback />
          <br />
        </FormGroup>
        <button className="btn btn-info" onClick={this.addIngredient}>
          +
        </button>
        <Form componentClass="fieldset" inline>
          <IngredientsInputs
            ingredients={ingredients}
            changeHandler={this.changeHandler}
          />
        </Form>
        <br />
        <Button type="submit" className="btn btn-primary">
          Create CockTail
        </Button>
      </form>
    );
  }
}

export default CocktailForm;
