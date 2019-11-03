import React, { Component } from "react";
import styled, { keyframes } from "styled-components";





const Wrapper = styled.div`
  /* margin-top:30vw; */
  display:flex;
  color: white;
  background-color: orange;
  /* height: 100vh; */
  /* width: 100%; */
  /* top: 0vw; */
  align-items: center;
  align-content: center;
  /* margin-top: auto;
  margin-bottom: auto; */
  justify-content: center;
  height: 40rem;
  width: 40rem;
`;

const Grid = styled.div`
    /* display: block; */
    /* padding-left: 20vw; */
    /* padding-right: auto; */
    /* display:flex; */
    /* align-items: column; */
    /* align-content: column; */
    /* justify-content: center;  */
`;

const Row = styled.div`
    /* padding: auto; */
    display: table;
    /* width: 100%; Optional */
    /* table-layout: fixed; Optional */
    border-spacing: 10px; Optional
`;

const Column = styled.div`
    display: table-cell;
    background-color: ${({ color }) => color} ; /*Optional*/
    height: 10rem;
    width: 10rem;
    :hover{
        background-color: #f57542; 
    }
    :active{
        background-color: #32a852; 
    }
    /* #firsts{
        background-color: #32a852; 
    } */

`;



class ColorBox extends Component {
  constructor() {
    super();

    this.state = {
      clicked: null
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.wrapperFunction = this.toggleClass.bind(this);
  }

  toggleClass(event) {
    const currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
  }

//   wrapperFunction = () => {
//     toggleClass();
//   };

  render() {
    return (
      <Wrapper>
          <Grid>
            <Row>
                <Column id= "firsts" color= {this.props.colorArray[0]}> 1 </Column>
                <Column color= {this.props.colorArray[1]} > 2 </Column>
                <Column color= {this.props.colorArray[2]}> 3 </Column>
            </Row>
            <Row>
                <Column color= {this.props.colorArray[3]}> 1 </Column>
                <Column color= {this.props.colorArray[4]}> 2 </Column>
                <Column color= {this.props.colorArray[5]}> 3 </Column>
            </Row>
            <Row>
                <Column color= {this.props.colorArray[6]}> 1 </Column>
                <Column color= {this.props.colorArray[7]}> 2 </Column>
                <Column color= {this.props.colorArray[8]}> 3 </Column>
            </Row>
          </Grid>
      </Wrapper>
    );
  }
}
ColorBox.defaultProps = {
  color: "blue",
  homepageLink: "https://www.columbiaspectator.com/",

  urls: [
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/"
  ]
};
export default ColorBox;