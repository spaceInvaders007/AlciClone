import React from "react";
import Rows from "./Rows.jsx";
import styled from "styled-components";
import { Link } from "@reach/router";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: this.props.displayResults,
      beds: [],
      areaId: "1",
      patients: [],
      doctors: [],
      area: "",
      results: []
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
    try {
      await fetch("/results");
      let response = await fetch("/results");
      let results = await response.json();
      //  console.log(results);
      this.setState({ results: results });
    } catch (err) {
      console.error("Encountered error fetching results", err);
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

  handleAreaClick = () => {};
  render() {
    // let resultsArray = this.props.bed.results.split(",");

    // console.log(resultsArray);

    return (
      <div className="App">
        <header className="App-header"></header>
        <TopNav>
          <Area onClick={this.handleAreaClick}>
            <AreaButtonLeftSide>
              <AreaButtonDesc>Area</AreaButtonDesc>
              <AreaButtonTriangle>&#9660;</AreaButtonTriangle>
            </AreaButtonLeftSide>
            <AreaButtonRightSide>{this.state.area}</AreaButtonRightSide>
          </Area>
          <Filter>Filter</Filter>
          <Sort>Sort</Sort>
          <Set>Set</Set>
          <Link to="/">
            <Home onClick={this.handleHomeClick}>Home</Home>
          </Link>
        </TopNav>
        <BlueBar>
          <AreaBed>Area / Bed</AreaBed>
          <NameDetails>Name & Details</NameDetails>
          <LOS>LOS</LOS>
          <ResultsTitle>Results</ResultsTitle>
        </BlueBar>
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
  display: flex;
  justify-content: flex-start;
  color: #616062;
`;

const TopNav = styled.div`
  background-color: #0f0d0a;
  display: flex;
  justify-content: center;
`;

const Area = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  border: none;
  margin: 4px 8px;
  background-image: linear-gradient(#1b1a1c, #0f0e11);
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 160px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  }
`;

const Filter = styled.button`
  border: none;
  margin: 4px 8px;
  background-image: linear-gradient(#1b1a1c, #0f0e11);
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  }
`;

const Sort = styled.button`
  border: none;
  margin: 4px 8px;
  background-image: linear-gradient(#1b1a1c, #0f0e11);
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  }
`;

const Set = styled.button`
  border: none;
  margin: 4px 8px;
  background-image: linear-gradient(#1b1a1c, #0f0e11);
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  }
`;

const Home = styled.button`
  border: none;
  margin: 4px 8px;
  background-image: linear-gradient(#1b1a1c, #0f0e11);
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  }
`;

const AreaBed = styled.div`
  min-width: 100px;
  padding-left: 5px;
  align-self: center;
`;

const NameDetails = styled.div`
  min-width: 338px;
  align-self: center;
`;

const LOS = styled.div`
  min-width: 62px;
  align-self: center;
`;

const ResultsTitle = styled.div`
  min-width: 800px;
  align-self: center;
`;

const AreaButtonLeftSide = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
`;

const AreaButtonDesc = styled.div`
  margin: 0 auto;
  color: #a3a8a5;
`;

const AreaButtonTriangle = styled.div`
  margin: 0 auto;
  color: #070607;
  text-shadow: 1px 1px 2px #888888;
`;

const AreaButtonRightSide = styled.div`
  font-size: 16px;
  align-self: center;
  margin-left: 20px;
  color: #a3a8a5;
`;
