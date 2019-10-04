import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      areaId: "1"
    };
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({
      showMenu: true
    });
  };
  hideMenu = event => {
    event.preventDefault();

    this.setState({
      showMenu: false
    });
  };

  handleAllAreasClick = () => {
    this.props.handleAreaClick("0");
    this.props.toggleAllResults();
    this.setState({
      showMenu: false
    });
  };

  handleSurgeryClick = () => {
    this.props.handleAreaClick("1");
    this.setState({
      showMenu: false
    });
  };

  handleGastroClick = () => {
    this.props.handleAreaClick("2");
    this.setState({
      showMenu: false
    });
  };

  handleNeuroClick = () => {
    this.props.handleAreaClick("3");
    this.setState({
      showMenu: false
    });
  };

  handleOncolClick = () => {
    this.props.handleAreaClick("4");
    this.setState({
      showMenu: false
    });
  };

  handleOphthalClick = () => {
    this.props.handleAreaClick("5");
    this.setState({
      showMenu: false
    });
  };

  render() {
    return (
      <Nav>
        <Area onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
          <AreaButtonLeftSide>
            <AreaButtonDesc>Area</AreaButtonDesc>
            <AreaButtonTriangle>&#9660;</AreaButtonTriangle>
          </AreaButtonLeftSide>
          <AreaButtonRightSide>{this.props.area}</AreaButtonRightSide>
          {this.state.showMenu ? (
            <AreaDropDown className="estoquee">
              <AllResultsButton onClick={this.handleAllAreasClick}>
                All Areas
              </AllResultsButton>
              <SurgeryButton onClick={this.handleSurgeryClick}>
                Surgery
              </SurgeryButton>
              <GastroButton onClick={this.handleGastroClick}>
                {" "}
                Gastro{" "}
              </GastroButton>
              <NeuroButton onClick={this.handleNeuroClick}> Neuro </NeuroButton>
              <OncolButton onClick={this.handleOncolClick}> Oncol </OncolButton>
              <OphthalButton onClick={this.handleOphthalClick}>
                Ophthal
              </OphthalButton>
            </AreaDropDown>
          ) : null}
        </Area>
        <Filter>Filter</Filter>
        <Sort>Sort</Sort>
        <Set>Set</Set>
        <Link to="/">
          <Home onClick={this.props.handleHomeClick}>Home</Home>
        </Link>
        {/* <Test onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
          <button>Show menu</button>

          {this.state.showMenu ? (
            <LastTabMenu>
              <button style={{ "z-index": "1" }}> Menu item 1 </button>
              <button style={{ "z-index": "1" }}> Menu item 2 </button>
              <button style={{ "z-index": "1" }}> Menu item 3 </button>
            </LastTabMenu>
          ) : null}
        </Test> */}
      </Nav>
    );
  }
}

export default TopNav;

const Nav = styled.div`
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
  /* :hover {
    background-image: linear-gradient(#1b1a1c, #114373);
  } */
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
  min-width: 64px;
`;

// const Test = styled.div`
//   height: 40px;
// `;

const AreaDropDown = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  z-index: 1;
  width: 158px;
  height: 137px;
  padding-left: 0;
  margin-left: -144px;
  border: 1px grey solid;
  height: fit-content;
`;

const SurgeryButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #222724;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;

const GastroButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #383638;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;

const NeuroButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #222724;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;

const OncolButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #383638;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;

const OphthalButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #222724;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;

const AllResultsButton = styled.button`
  font-size: 16px;
  color: #a3a8a5;
  padding: 7px;
  background-color: #383638;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #0f0d0a;
  }
`;
