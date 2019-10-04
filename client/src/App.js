import React from "react";
import Results from "./components/Results.jsx";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsDisplay: "none",
      resultsButtonDisplay: "inline",
      date: ""
    };
  }

  handleResultsClick = () => {
    this.setState({
      resultsDisplay: "inline",
      resultsButtonDisplay: "none"
    });
  };

  hideResultsDisplay = () => {
    this.setState({
      resultsDisplay: "none",
      resultsButtonDisplay: "inline"
    });
  };

  componentDidMount() {
    let date = new Date();
    this.setState({
      date
    });
  }

  render() {
    return (
      <AppWrapper>
        <ResultButtonWrapper>
          <ResultsButton
            onClick={this.handleResultsClick}
            style={{ display: this.state.resultsButtonDisplay }}
          >
            Results
          </ResultsButton>
        </ResultButtonWrapper>
        <ResultsWrapper style={{ display: this.state.resultsDisplay }}>
          <Results
            date={this.state.date}
            resultsDisplay={this.state.resultsDisplay}
            hideResultsDisplay={this.hideResultsDisplay}
          />
        </ResultsWrapper>
      </AppWrapper>
    );
  }
}

export default App;

const ResultsWrapper = styled.div``;

const AppWrapper = styled.div``;

const ResultButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultsButton = styled.button`
  margin-top: 20px;
  background-color: #1c2f41;
  color: white;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  font-size: 24px;
  border: 2px solid white;
  box-shadow: 3px 3px 8px #888888;
  cursor: pointer;
  :hover {
    background-color: #114373;
  }
`;
