import React from "react";
import styled from "styled-components";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: ""
    };
  }

  componentDidMount() {
    let number = Math.floor(Math.random() * 5 + 0);
    let backgrounds = [
      "linear-gradient(#a09fa3, #565957)",
      "linear-gradient(#418A53, #224D2E)",
      "linear-gradient(#E23C35, #551516)",
      "linear-gradient(#EE8D3F, #9E5A27)",
      "linear-gradient(#41464C, #2A2D37)"
    ];
    this.setState({
      backgroundImage: backgrounds[number]
    });
  }

  randomTime = () => {
    let hrs = Math.round(Math.random() * 23);
    let mins = Math.round(Math.random() * 60);
    var hFormat = hrs < 10 ? "0" : "";
    var mFormat = mins < 10 ? "0" : "";
    return String(hFormat + hrs + ":" + mFormat + mins + " ");
  };

  render() {
    const { date } = this.props;
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let preday = date.getDay() - Math.floor(Math.random() * 4 + 1);
    let day = Math.abs(preday);
    let month = months[date.getMonth()];
    // let hour = Math.floor(Math.random() * 18 + 1);
    // let minutes = Math.floor(Math.random() * 59 + 1);
    return (
      <div className="result-block">
        <ResultWrapper
          className="result-wrapper"
          background={this.state.backgroundImage}
        >
          <Name>{this.props.result}</Name>
          <DateTime>
            {this.randomTime()} {day} {month}
          </DateTime>
        </ResultWrapper>
      </div>
    );
  }
}

export default Result;

const ResultWrapper = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  height: 45px;
  background-image: ${props =>
    props.background || "linear-gradient(#a09fa3, #565957)"};
  border-radius: 6px;
  width: 110px;
`;

// background-image: linear-gradient(#a09fa3, #565957);

const Name = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const DateTime = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`;
