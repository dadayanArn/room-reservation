import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusThunk, getRoomsThunk, createRoomThunk} from '../../thunks';
import { EditIcon, DeleteIcon } from '../../assets'
import Box from '../../components/Box';
import Spinner from '../../components/Spinner';

import './rooms.styles.css';
import Form from './Form';

import moment from 'moment';

class Rooms extends Component {
  componentDidMount() {
    this.props.getStatus()
    this.props.getRooms()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }
  createRoom = (data) => {
    this.props.createRoom(data);
  }

  render() {
    const { getttingStatus, gettingRooms, status: { rooms, booking, visitors}, roomsList } = this.props;
    return (
      <div className='rooms'>
        <div className='rooms-side_left'>
          <Box className="rooms-statusPanel">
            {!getttingStatus ? (
              <div className='rooms-statusWrapper'>
                <div className='status-items'>
                  <div className='status-count'>{rooms}</div>
                  <div className='status-label'>Rooms</div>
                </div>
                <div className='status-items'>
                  <div className='status-count'>{booking}</div>
                  <div className='status-label'>Booking</div>
                </div>
                <div className='status-items'>
                  <div className='status-count'>{visitors}</div>
                  <div className='status-label'>Visitors</div>
                </div>
              </div>
            ) : (
              <Spinner />
            )}
          </Box>
          <Box className='rooms-form'>
            <Form createRoom={this.createRoom}/>
          </Box>
        </div>
        <Box className='rooms-side_right'>
          {!gettingRooms ? (
             <table className="table table-striped">
             <thead>
               <tr>
                 <th scope="col">#ID</th>
                 <th scope="col">Booked</th>
                 <th scope="col">Floor</th>
                 <th scope="col">Beds</th>
                 <th scope="col">Balcony</th>
                 <th scope="col">Number</th>
                 <th scope="col">Edit</th>
                 <th scope="col">Delete</th>
               </tr>
             </thead>
             <tbody>
               {roomsList.map((room, i) => {
                 return (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{room.bookedAt ? moment(room.bookedAt).format("MMM Do YYYY") : '--'}</td>
                    <td>{room.floor}</td>
                    <td>{room.beds}</td>
                    <td>{room.balcony ? 'Yes' : 'No'}</td>
                    <td>{room.roomId}</td>
                    <td><EditIcon /></td>
                    <td><DeleteIcon /></td>
                  </tr>
                 )
               })}
              </tbody>
           </table>
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
    gettingRooms,
    roomsList: rooms,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
      dispatch(getStatusThunk())
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    },
    createRoom: (data) => {
      dispatch(createRoomThunk(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);