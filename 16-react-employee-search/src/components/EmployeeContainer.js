import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "../data/Employees.json";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = EmployeeList.filter((employee) => employee.name === searchQuery);
    this.setState({ 'result': searchResults });
  };

  sortEmployeesLocationA = () => {
    const sortResults = EmployeeList.sort(function (a, b) {
      var nameA = a.location.toUpperCase(); // ignore upper and lowercase
      var nameB = b.location.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.setState({ sortResults })
  };

  sortEmployeesLocationB = () => {
    const sortResults = EmployeeList.sort(function (a, b) {
      var nameA = a.location.toUpperCase(); // ignore upper and lowercase
      var nameB = b.location.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    })
    this.setState({ sortResults })
  };

  sortEmployeesNamesA = () => {
    const sortResults = EmployeeList.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.setState({ sortResults })
  };

  sortEmployeesNamesB = () => {
    const sortResults = EmployeeList.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    })
    this.setState({ sortResults })
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="Name"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-12">
            <div className="buttons-div">
              <button onClick={this.sortEmployeesNamesA} className="btn filter-btn">
                Sort By Name
            <br></br>(Ascending A-Z)
        </button>
              <button onClick={this.sortEmployeesNamesB} className="btn filter-btn">
                Sort By Name
            <br></br>(Decending Z-A)
        </button>
              <button onClick={this.sortEmployeesLocationA} className="btn filter-btn">
                Sort By Location
            <br></br>(Ascending A-Z)
        </button>
              <button onClick={this.sortEmployeesLocationB} className="btn filter-btn">
                Sort By Location
            <br></br>(Decending Z-A)
        </button>
            </div>
            <hr />
            <EmployeeInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmployeeContainer;
