import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ColorBox from "./colorbox";





const Wrapper = styled.div`
  color: white;
  background-color: pink;
  height: 100vh;
  width: 100%;
  /* top: 0vw; */
  display:flex;
  justify-content: center;
  align-items: center;
`;
const SelectionBox = styled.div`
  margin-left: 10vw
  background-color: purple;
  width: 30vw;
  height: 100%;

  display: flex;

  /* top: 0vw; */
  /* display:flex; */
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  height: 5vh;
  width: 10vw; 
`;





let colorArray = []



class RandomColors extends Component {
  constructor() {
    super();

    this.state = {
      clicked: null,
      answer: null
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.wrapperFunction = this.toggleClass.bind(this);
    this.getRandColor = this.getRandColor.bind(this);
    this.getRandColorArray = this.getRandColorArray.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.printTester = this.printTester.bind(this);
  }

  toggleClass(event) {
    const currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
  }

  getRandColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }
  getRandColorArray= () =>{
    // this.getRandColor();
    var colorArr = [];
    for (var i = 0; i < 9; i++) {
        colorArr.push(this.getRandColor());
      }
    console.log(colorArr)
    colorArray= colorArr;
  }

  setAnswer(event, callBack){
    // console.log(event)
    console.log(callBack)
    this.setState({ answer: event.currentTarget.value });
    this.printTester();
    // event.preventDefault();
  }

  printTester(){
    console.log(this.state.answer)
  }

//   condition of when to reload the page and thus update all the colors in the app
  shouldComponentUpdate(nextProps, nextState) { 
    if (nextState.answer !== 0) { // in it's current state, this condition ins never true because the value is either true or false (the background is )
      return false;
    }
    return true;
  }

//onClick= {this.getRandColor}
  render() {
    return (
      <Wrapper >
          {this.getRandColorArray()}
          
          <ColorBox colorArray = {colorArray}> </ColorBox>
          <SelectionBox>

              <Button value= "yes" onClick= {(e,callBack) => this.setAnswer(e,this.printTester)}>Yes</Button>
              <Button value= "no">No</Button>

            

          </SelectionBox>
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
export default RandomColors;