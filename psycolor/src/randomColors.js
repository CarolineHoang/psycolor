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

const RedBox = styled.div`
  top:0;
  left:0;
  background-color: red;
  width: 30vw;
  height: 100%;

`;




let colorArray = []



class RandomColors extends Component {
  constructor() {
    super();

    this.state = {
      clicked: null,
      answer: null,
      hidden: "hidden",
      box: "start"
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.wrapperFunction = this.toggleClass.bind(this);
    this.getRandColor = this.getRandColor.bind(this);
    this.getRandColorArray = this.getRandColorArray.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.printTester = this.printTester.bind(this);
    this.show = this.show.bind(this);
    this.getColorBox= this.getColorBox.bind(this);
    this.waitBox= this.waitBox.bind(this);
    this.showBox= this.showBox.bind(this);
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
    // console.log(callBack) // to use this we need the callback parameter but usually we don't need a callback paramenter to make a callback
    this.setState({ answer: event.currentTarget.value },
    function () {this.printTester()});
    // event.preventDefault();
  }

  printTester(){
    console.log(this.state.answer)
  }

//   condition of when to reload the page and thus update all the colors in the app
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("NEXT STATE ANSWER: " , nextState.answer , nextState.box, (nextState.box == "start" || nextState.answer != null))
    console.log( (nextState.box == "start" ))
    if (nextState.box == "start" ){
      return true
    }
    else if (nextState.box == "choose" || this.state.box == "choose") { // || nextState.answer == null   // in it's current state, this condition ins never true because the value is either true or false (the background is )
    // this.setState({box : "start"});
    return false;
    }
    console.log("this is evaluating TRUE RIGHT NOW")
    this.setState({box : "choose"});
    return true;
  }

  // componentWillMount(){
  //   console.log(this.props.wait);
  //   setTimeout(this.show(), 
  //              this.props.wait);
  // }

  show() {
    this.setState({hidden : ""});
  }

  componentDidMount() {
    // setTimeout(function(){ alert("After 5 seconds!"); }, 
    //            this.props.wait);
    // setTimeout(this.getColorBox(), 
    //            this.props.wait);

  }


  getColorBox(){
    console.log("now it loads")
    
    return(
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
  waitBox(callback){
    // return setTimeout(function() {this.getColorBox(); callback()}, this.props.wait);
    console.log(callback)
    var divs = this.getColorBox();
    console.log("divs: " ,divs)
    return setTimeout(() => {
      this.setState({box: divs}, function () {console.log(this.state.box)})    ;}    ,
      // function() {
      // // console.log(this.getColorBox);
      // // var divs = this.getColorBox;
      // console.log(divs);
      // callback(divs); }, 
      this.props.wait);

    // this.getColorBox();
    // console.log("something")
    // return(
    //   this.getColorBox()
    // )

    // return callback(divs)
    
  };
  // waitBox(function(currentTime) {
  //   console.log('The current time is: ' + currentTime);
  // });

  showBox(divs){
    console.log("we made it to this point")
    console.log(divs)
    return divs
      
  }




//onClick= {this.getRandColor}
  render() {
    return (
      <Wrapper>
        {/* <RedBox/> */}
        {/* {this.getColorBox()} */}
        {/* {this.waitBox()} */}
        {this.waitBox(this.showBox   )}
        {this.state.box}
        {/* {this.getColorBox()} */}
        {/* <RedBox/> */}

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