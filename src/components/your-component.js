import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';

class YourComponent extends React.Component {

  componentWillMount(){
    this.props.yourAction(4);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Your Redux Props : {this.props.reduxProps}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(YourComponent);
