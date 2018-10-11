import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';

class YourComponent extends React.Component {

  componentDidMount()
{
    this.mouseEventHandler();
}

  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.mouseEventHandler = this.mouseEventHandler.bind(this);


    this.state = {
      isFirstClick : true,
      lastMouseX : 0,
      lastMouseY : 0,
    }
  }

  mouseEventHandler()
{
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d'),
        thisComponent = this;
    canvas.addEventListener("mousedown", function (e) {
        context.strokeStyle = "black";
        let x=e.pageX-8,y=e.pageY-60;
        context.fillRect(x,y,5,5);
        context.stroke();
          if(thisComponent.state.isFirstClick){
            thisComponent.setState({
              lastMouseX : x,
              lastMouseY : y,
              isFirstClick : false
            })
          }else{
            let distantBetweenX = (x-thisComponent.state.lastMouseX)/3;
            let distantBetweenY = (y-thisComponent.state.lastMouseY)/3;
            thisComponent.init(context,3,thisComponent.state.lastMouseX,thisComponent.state.lastMouseY,5,distantBetweenX,distantBetweenY)
            thisComponent.setState({
              lastMouseX : x,
              lastMouseY : y
            })
          }
    }, false);
}


  init(context,n,x,y,p,sideLength,sideLengthY)
{

    var degree = Math.PI / 180;

    context.strokeStyle = 'black';
    snowflake(n, x, y, sideLength,sideLengthY);
    context.stroke();

    function snowflake(n, x, y, sideLength,sideLengthY)
    {
        context.save();
        context.translate(x, y);
        context.moveTo(0, 0);
        for(let x = p; x > 0 ; x--){
          if(x==p){
            leg(n - 1);
            context.rotate((180 - 360/(p-1)) * degree);
          }else if(x==2){
            leg(n - 1);
            context.rotate((180 - 360/(p-1)) * degree);
          }else if(x==1){
            leg(n - 1);
          }else{
            leg(n - 1);
            context.rotate(-1 * 360/(p-1) * degree);
          }
        }
        context.restore();

        function leg(n)
        {
            context.save();
            if(n == 0){
                context.lineTo(sideLength, sideLengthY);
            }
            else {
                context.scale(1/3,1/3);
                for(let x = p; x > 0 ; x--){
                  if(x==p){
                    leg(n - 1);
                    context.rotate((180 - 360/(p-1)) * degree);
                  }else if(x==2){
                    leg(n - 1);
                    context.rotate((180 - 360/(p-1)) * degree);
                  }else if(x==1){
                    leg(n - 1);
                  }else{
                    leg(n - 1);
                    context.rotate(-1 * 360/(p-1) * degree);
                  }
                }
            }
            context.restore();
            context.translate(sideLength, sideLengthY);
        }
    }
}

  render() {
    return (
      <div style={{padding:8,width:'40%'}}>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <canvas id="myCanvas" width="1200" height="700" style={{border:"1px solid #000000",marginTop:10}}>
        </canvas>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(YourComponent);
