import React from "react";
import styled from "styled-components";
import Result from "./Result.jsx";

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resultsName: [],
      randomRead: "",
      backgroundImage: ""
    };
  }

  componentDidMount() {
    let results = this.props.bed.results.split(",").slice(0, -1);
    let randomRead = Math.floor(Math.random() * results.length + 1);
    this.setState({
      results,
      randomRead
    });
    let number = Math.floor(Math.random() * 4 + 0);
    let backgrounds = [
      "linear-gradient(#a09fa3, #565957)",
      "linear-gradient(#41464C, #2A2D37)",
      "linear-gradient(#E23C35, #551516)",
      "linear-gradient(#EE8D3F, #9E5A27)"
    ];
    this.setState({
      backgroundImage: backgrounds[number]
    });
  }

  render() {
    return (
      <div className="row">
        <RowWrapper number={this.props.number}>
          <AreaBedWrapper>
            <AreaBed>
              <Area>{this.props.area}</Area>
              <Bed>{this.props.bed.bedNumber}</Bed>
            </AreaBed>
          </AreaBedWrapper>
          <PatientWrapper>
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
          </PatientWrapper>
          <GenderAge>
            <Gender>{this.props.patientSex[0]}</Gender>
            <Age>{this.props.patientAge[0]}y</Age>
          </GenderAge>
          <LosWrapper>
            <Los>{this.props.bed.LOS}</Los>
          </LosWrapper>
          <Results>
            {this.state.results.map((result, index) => {
              return <Result result={result} key={index} />;
            })}
          </Results>
          <ReadResultsCounter background={this.state.backgroundImage}>
            <TopLineReadResults>
              {this.state.randomRead} of {this.state.results.length}
            </TopLineReadResults>
            <BotLineReadResults>unread</BotLineReadResults>
          </ReadResultsCounter>
        </RowWrapper>
      </div>
    );
  }
}

export default Rows;

const RowWrapper = styled.div`
  color: white;
  background: ${props => (props.number % 2 === 0 ? "#383638" : "#232824")};
  height: 55px;
  display: flex;
  align-items: center;
`;

const AreaBedWrapper = styled.div``;

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

const PatientWrapper = styled.div``;

const Patient = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  /* border-right: 1px solid #333334; */
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
  width: 260px;
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

const Results = styled.div`
  display: flex;
  overflow: auto;
  width: 760px;
  border-right: 1px solid #333334;
`;

const ReadResultsCounter = styled.div`
  background-image: ${props =>
    props.background || "linear-gradient(#a09fa3, #565957)"};
  width: 60px;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TopLineReadResults = styled.div`
  margin: 0 auto;
`;

const BotLineReadResults = styled.div`
  margin: 0 auto;
`;

//   if (this.props.number % 2 === 0) {
//     background-color: black
// } else {
//     background-color: blue;
// }
