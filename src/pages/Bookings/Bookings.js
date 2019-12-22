import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '../../components/Box';
import { getBookingsThunk } from '../../thunks'
import './bookings.styles.css';

const Bookings = (props) => {
  const { bookings } = props;
  useEffect(() => {
    props.getBookings()
  }, [])

  useEffect(() => {
    console.log("#AR: Bookings -> props", bookings);
  }, [bookings])

  return (
    <div className="bookings">
       <Box className="bookings-form">
        1
      </Box>
      <Box className='bookings-tabel'>
        2
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { 
    bookings: { bookings, gettingBookings }
   } = state;
  return {
    bookings,
    gettingBookings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => {
      dispatch(getBookingsThunk())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);