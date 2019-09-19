import React from "react";
import Rows from "./Rows.jsx";
import styled from "styled-components";
import { Link } from "@reach/router";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: this.props.displayResults,
      beds: [],
      areaId: "1",
      patients: [],
      doctors: [],
      area: ""
      // areas: []
    };
  }

  async componentDidMount() {
    try {
      await fetch("/beds");
      let response = await fetch("/beds");
      let beds = await response.json();
      this.setState({ beds });
    } catch (err) {
      console.error("Encountered error fetching beds", err);
    }
    try {
      await fetch("/patients");
      let response = await fetch("/patients");
      let patients = await response.json();
      this.setState({ patients });
    } catch (err) {
      console.error("Encountered error fetching patients", err);
    }
    try {
      await fetch("/doctors");
      let response = await fetch("/doctors");
      let doctors = await response.json();
      this.setState({ doctors });
    } catch (err) {
      console.error("Encountered error fetching doctors", err);
    }
    try {
      await fetch("/areas/" + this.state.areaId);
      let response = await fetch("/areas/" + this.state.areaId);
      let area = await response.json();
      this.setState({ area: area[0].areaName });
    } catch (err) {
      console.error("Encountered error fetching areas", err);
    }
    // try {
    //   await fetch("/areas");
    //   let response = await fetch("/areas");
    //   let areas = await response.json();
    //   this.setState({ areas });
    // } catch (err) {
    //   console.error("Encountered error fetching areas", err);
    // }
  }

  handleHomeClick = () => {
    this.props.hideResultsDisplay();
  };
  render() {
    //   var rows = [];
    // for (let i = 1; i < 51; i ++) {
    //   rows.push (
    //      <Rows number={i} key={i}/>
    //     )
    // }
    return (
      <div className="App">
        <header className="App-header"></header>
        <Area>Area</Area>
        <Filter>Filter</Filter>
        <Sort>Sort</Sort>
        <Set>Set</Set>
        <Link to="/">
          <Home onClick={this.handleHomeClick}>Home</Home>
        </Link>
        <BlueBar></BlueBar>
        {/* <RowStyle > */}
        {/* {rows} */}

        {/* </RowStyle> */}
        {/* <button onClick={this.handleResultsClick}>Results</button>
          <Results style={{display: this.state.resultsDisplay}}/> */}
        {this.state.beds
          .filter(bed => {
            return bed.areaId === Number(this.state.areaId);
          })
          .map(bed => {
            return (
              <Rows
                bed={bed}
                number={bed.bedNumber}
                key={bed.bedId}
                patientAge={this.state.patients
                  .filter(patient => {
                    return patient.patientId === bed.patientId;
                  })
                  .map(patient => {
                    return patient.age;
                  })}
                patientFirstName={this.state.patients
                  .filter(patient => {
                    return patient.patientId === bed.patientId;
                  })
                  .map(patient => {
                    return patient.firstName;
                  })}
                patientSex={this.state.patients
                  .filter(patient => {
                    return patient.patientId === bed.patientId;
                  })
                  .map(patient => {
                    return patient.sex;
                  })}
                patientLastName={this.state.patients
                  .filter(patient => {
                    return patient.patientId === bed.patientId;
                  })
                  .map(patient => {
                    return patient.lastName;
                  })}
                patientId={this.state.patients
                  .filter(patient => {
                    return patient.patientId === bed.patientId;
                  })
                  .map(patient => {
                    return patient.patientId;
                  })}
                doctor={this.state.doctors
                  .filter(doctor => {
                    return doctor.doctorId === bed.doctorId;
                  })
                  .map(doctor => {
                    return doctor.lastName;
                  })}
                area={this.state.area}
              />
            );
          })}
      </div>
    );
  }
}

export default Results;

const BlueBar = styled.div`
  height: 25px;
  background-image: linear-gradient(#1a2e41, #253945);
`;

const Area = styled.button``;

const Filter = styled.button``;

const Sort = styled.button``;

const Set = styled.button``;

const Home = styled.button``;
