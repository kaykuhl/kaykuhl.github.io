import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import CarInfo from "./CarInfo";
import CarList from "../data/cars.json";

class CarContainer extends Component {
  state = {
    result: [],
    search: "Mazda"
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchCars();
  }

  searchCars = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = CarList.filter((car) => car.make === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCars();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="Make"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <CarInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default CarContainer;
