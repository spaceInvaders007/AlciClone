// import React from "react";
// import styled from "styled-components";

// class LOS extends React.Component {
//   constructor(props) {
//     super(props);

//     this.canvasRef = React.createRef();
//   }

//   componentDidMount() {
//     let now = `${this.props.date.getHours()}:${this.props.date.getMinutes()}`;
//     const canvas = this.canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     //ctx.fillRect(0, 0, 30, 30);

//     function drawPieSlice(
//       ctx,
//       centerX,
//       centerY,
//       radius,
//       startAngle,
//       endAngle,
//       color
//     ) {
//       ctx.fillStyle = color;
//       ctx.beginPath();
//       ctx.moveTo(centerX, centerY);
//       ctx.arc(centerX, centerY, radius, startAngle, endAngle);
//       ctx.closePath();
//       ctx.fill();
//     }

//     let LOShours = this.props.LOS.split(":")[0];
//     let LOSminutes = this.props.LOS.split(":")[1];
//     let LOSTotalMinutes = Number(LOShours * 60) + Number(LOSminutes);
//     let nowHours = now.split(":")[0];
//     let nowMinutes = now.split(":")[1];
//     let nowTotalMinutes = Number(nowHours * 60) + Number(nowMinutes);
//     let timeDiff = nowTotalMinutes - LOSTotalMinutes;
//     var start = 1.5 * Math.PI;
//     let angle = (timeDiff * 360) / 240;
//     var end = ((angle * 2) / 360 + 1.5) * Math.PI;
//     console.log(end);
//     if (timeDiff > Number("240") || timeDiff < Number("0")) {
//       ctx.fillStyle = "grey";
//       ctx.font = "16px Helvetica, Arial, sans-serif";
//       ctx.fillText(this.props.LOS, 0, 30);
//       ctx.fillText("hours", 0, 30);
//     } else if (timeDiff < Number("240") && timeDiff > Number("180")) {
//       //the range is from 0 to 240, so I need to calculate the equivalent to a 360 degree angle
//       drawPieSlice(ctx, 20, 20, 17, start, end, "#C53A34");
//     } else if (timeDiff < Number("180") && timeDiff > Number("120")) {
//       console.log(timeDiff);
//       //the range is from 0 to 240, so I need to calculate the equivalent to a 360 degree angle
//       drawPieSlice(ctx, 20, 20, 17, start, end, "#E56812");
//     } else if (timeDiff < Number("120") && timeDiff > Number("0")) {
//       drawPieSlice(ctx, 20, 20, 17, start, end, "#058D52");
//     }
//   }

//   render() {

//     return (
//       <div>
//         <Clock>
//           <canvas
//             width="40"
//             height="40"
//             style={{
//               display: "flex",
//               margin: " 0 auto",
//               background: "white",
//               borderRadius: "50%"
//             }}
//             ref={this.canvasRef}
//           />
//         </Clock>
//       </div>
//     );
//   }
// }

// export default LOS;

// const Clock = styled.div`
//   display: flex;
//   margin: 0 auto;
// `;

import React from "react";
import styled from "styled-components";
import Clock from "./Clock.jsx";

class LOS extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    let now = `${this.props.date.getHours()}:${this.props.date.getMinutes()}`;
    let LOShours = this.props.LOS.split(":")[0];
    let LOSminutes = this.props.LOS.split(":")[1];
    let LOSTotalMinutes = Number(LOShours * 60) + Number(LOSminutes);
    let nowHours = now.split(":")[0];
    let nowMinutes = now.split(":")[1];
    let nowTotalMinutes = Number(nowHours * 60) + Number(nowMinutes);
    let timeDiff = nowTotalMinutes - LOSTotalMinutes;
    return (
      <div>
        {/* {this.props.LOS} */}

        {timeDiff > Number("240") && (
          <LOS1>
            {this.props.LOS}
            <span>hours</span>
          </LOS1>
        )}

        {timeDiff < Number("0") && (
          <LOS2>
            {this.props.LOS}
            <span>hours</span>
          </LOS2>
        )}

        {timeDiff < Number("240") && timeDiff > Number("0") && (
          <Clock date={this.props.date} LOS={this.props.LOS} />
        )}
      </div>
    );
  }
}

export default LOS;

const LOS1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const LOS2 = styled.div`
  display: flex;
  flex-direction: column;
`;
