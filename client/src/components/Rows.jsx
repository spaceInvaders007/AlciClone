import React from "react";
import styled from "styled-components";

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area: ""
    };
  }

  // async componentDidMount () {
  //   try {
  //     await fetch("/areas/" + this.state.areaId);
  //     let response = await fetch("/areas/" + this.state.areaId);
  //     let area = await response.json();
  //     this.setState({ area });
  //   } catch (err) {
  //     console.error("Encountered error fetching areas", err);
  //   }
  // }

  // async handleDelete(id) {
  //   try {
  //     await fetch("/timers/" + id, {
  //       method: "DELETE",
  //       body: JSON.stringify({ id })
  //     });
  //   } catch (err) {
  //     console.log(err, "Couldn't delete one timer");
  //   }
  // }

  render() {
    const { LOS, areaId } = this.props.bed;
    //const {doctor} = this.props.doctor
    //   let patient = this.props.patient[0];
    //  let doctor = this.props.doctor[0]
    //console.log(this.props.doctor[0])
    //console.log(patient.firstName)
    return (
      <div className="row">
        <RowWrapper number={this.props.number}>
          <AreaBed>
            <Area>{this.props.area}</Area>
            <Bed>{this.props.bed.bedNumber}</Bed>
          </AreaBed>
          <Patient>
            <PatientName>
              <LastName>{this.props.patientLastName[0]},</LastName>
              <FirstName>&nbsp; {this.props.patientFirstName[0]}</FirstName>
            </PatientName>
            <PatientIdAndDoctor>
              <Urn>URN {this.props.patientId[0]}</Urn>
              <Doctor>Dr {this.props.doctor[0]}</Doctor>
            </PatientIdAndDoctor>
          </Patient>
          <GenderAge></GenderAge>
          <Los></Los>
          <Results></Results>
        </RowWrapper>
      </div>
    );
  }
}

export default Rows;

const RowWrapper = styled.div`
  color: white;
  background: ${props => (props.number % 2 === 0 ? "#383638" : "#232824")};
  height: 50px;
  display: flex;
  align-items: center;
`;

const AreaBed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

const Patient = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenderAge = styled.div``;

const Los = styled.div``;

const Results = styled.div``;

const Area = styled.div`
  margin: 0 auto;
  margin-bottom: 8px;
`;

const Bed = styled.div`
  margin: 0 auto;
`;

const FirstName = styled.div``;

const LastName = styled.div``;

const Urn = styled.div`
  margin-right: 8px;
`;

const Doctor = styled.div``;

const PatientName = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const PatientIdAndDoctor = styled.div`
  display: flex;
`;

//   if (this.props.number % 2 === 0) {
//     background-color: black
// } else {
//     background-color: blue;
// }
