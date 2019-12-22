import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk } from '../../thunks'

class Rooms extends Component {

  componentDidMount() {
    this.props.getStatus()
  }

  componentDidUpdate() {
    console.log('PROPS:', this.props)
  }
  render() {
    return (
      <div>
        Rooms
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { rooms } = state
  return {
    rooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
      dispatch(getStatusThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);