import React from 'react';
import Results from './components/Results.jsx';
import styled from 'styled-components';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      resultsDisplay : 'none'
    }
  }

  handleResultsClick = () => {
    this.setState ({
      resultsDisplay : 'inline'
    })
  }

  hideResultsDisplay = () => {
    this.setState ({
      resultsDisplay : 'none'
    })
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        Hello
        <button onClick={this.handleResultsClick}>Results</button>
        <ResultsWrapper style={{display: this.state.resultsDisplay}}>
          <Results resultsDisplay={this.state.resultsDisplay} hideResultsDisplay={this.hideResultsDisplay}/>
        </ResultsWrapper>
        {/* <Results style={{display: this.state.resultsDisplay}}/> */}
      </div>
    );
  }

}

export default App;

const ResultsWrapper = styled.div `
`;