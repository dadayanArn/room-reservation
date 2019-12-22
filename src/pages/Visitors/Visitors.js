import React, { useEffect } from 'react';
import Box from '../../components/Box'
import api from '../../api';

import './visitors.styles.css'

const Visitors = () => {
  useEffect(() => {
    api.visitors.get().then(d => { console.log(d) })
  }, [])
  return (
    <div className="visitors">
       <Box className="visitors-form">
        1
      </Box>
      <Box className='visitors-tabel'>
        2
      </Box>
    </div>
  );
};

export default Visitors;