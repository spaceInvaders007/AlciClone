import React from "react";
import styled from "styled-components";

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resultsName: []
    };
  }

  // componentDidMount() {
  //   //console.log(resultsArray);

  //   console.log(resultsLetters);
  // this.setState({
  //   resultsName: this.props.resultsName
  // });
  // console.log(this.state.resultsName);
  //console.log(this.props.patientAge[0]);

  // for (let i = 0; i < resultsArray.length; i++) {
  //   resultsLetters.push(this.props.results[Number(resultsArray[i])]);
  // }
  // }
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
    // let resultsArray = this.props.bed.results.split(",").slice(2);
    // let resultsLetters = this.props.resultsName;

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
              <Urn>
                <span style={{ color: "#616062" }}>URN</span>{" "}
                {this.props.patientId[0]}
              </Urn>
              <Doctor>Dr {this.props.doctor[0]}</Doctor>
            </PatientIdAndDoctor>
          </Patient>
          <GenderAge>
            <Gender>{this.props.patientSex[0]}</Gender>
            <Age>{this.props.patientAge[0]}y</Age>
          </GenderAge>
          <LosWrapper>
            <Los>{this.props.bed.LOS}</Los>
          </LosWrapper>
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
  border-right: 1px solid #333334;
  height: 100%;
`;

const Area = styled.div`
  margin: 0 auto;
  margin-bottom: 8px;
`;

const Bed = styled.div`
  margin: 0 auto;
`;

const Patient = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  border-right: 1px solid #333334;
  height: 100%;
`;

const FirstName = styled.div``;

const LastName = styled.div``;

const Urn = styled.div`
  margin-right: 8px;
`;

const Doctor = styled.div`
  color: #616062;
`;

const PatientName = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const PatientIdAndDoctor = styled.div`
  display: flex;
  width: 220px;
`;

const GenderAge = styled.div`
  display: flex;
  margin-left: 8px;
  border-right: 1px solid #333334;
  height: 100%;
  width: 60px;
`;

const Gender = styled.div`
  margin-right: 8px;
  align-self: center;
`;

const Age = styled.div`
  align-self: center;
`;

const LosWrapper = styled.div`
  display: flex;
  height: 100%;
  border-right: 1px solid #333334;
`;

const Los = styled.div`
  width: 45px;
  margin-left: 8px;
  margin-right: 8px;
  align-self: center;
`;

const Results = styled.div``;

//   if (this.props.number % 2 === 0) {
//     background-color: black
// } else {
//     background-color: blue;
// }
