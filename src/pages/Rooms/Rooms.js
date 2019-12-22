import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk, getRoomsThunk } from '../../thunks'
import Box from '../../components/Box';
import Spinner from '../../components/Spinner';

import './rooms.styles.css';

class Rooms extends Component {

  componentDidMount() {
    this.props.getStatus()
    this.props.getRooms()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }
  
  
  render() {
    const { getttingStatus, gettingRooms } = this.props;
    return (
      <div className='rooms'>
        <div className='rooms-side_left'>
          <Box className="rooms-statusPanel">
            {!getttingStatus ? (
              <>
                1
                <div></div>
                <div></div>
                <div></div>
              </>
            ) : (
              <Spinner />
            )}
          </Box>
          <Box className='rooms-form'>
            2
          </Box>
        </div>
        <Box className='rooms-side_right'>
          {!gettingRooms ? (
              <>
                3
              </>
            ) : (
              <Spinner />
            )}
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { 
    rooms: { status, getttingStatus, rooms, gettingRooms }
   } = state;
  return {
    status,
    getttingStatus,
    rooms,
    gettingRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
      dispatch(getStatusThunk())
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);