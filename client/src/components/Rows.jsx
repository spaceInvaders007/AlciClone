import React from 'react';
import styled from 'styled-components';

class Rows extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        area: ''
      }
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


    render () {
    const {LOS, areaId, } = this.props.bed;
    //const {doctor} = this.props.doctor
  //   let patient = this.props.patient[0];
  //  let doctor = this.props.doctor[0]
 //console.log(this.props.doctor[0])
    //console.log(patient.firstName)
      return (
        <div className="row">
          <RowWrapper number={this.props.number}>
          <AreaBed>
            {this.props.area}
            {this.props.bed.bedNumber}
          </AreaBed>
          <Patient>{this.props.doctor[0]}</Patient>
          <GenderAge></GenderAge>
          <Los></Los>
          <Results></Results>
          </RowWrapper>
        </div>
      );
    }
  
  }
  
  export default Rows;
  
  const RowWrapper = styled.div `
   color: white; 
   background: ${props => props.number % 2 === 0 ? '#383638' : '#232824'};
   height: 50px;
   `
  
  const AreaBed = styled.div `
  
  `

  const Patient = styled.div ``

  const GenderAge = styled.div ``

  const Los = styled.div ``

  const Results = styled.div ``



//   if (this.props.number % 2 === 0) {
//     background-color: black
// } else {
//     background-color: blue;
// }