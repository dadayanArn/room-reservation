import React, { useEffect } from 'react';
import Rooms from './screens/Rooms'
import './App.css';
// import api from './API'

function App() {
  useEffect(() => {
  //  async function getStatus() {
  //    try {
  //      const statuses = await api.roomsStatus.get();
  //      console.log('statuses', statuses);
  //    } catch (error) {
  //    console.log("#AR: getStatus -> error", error);
  //    }

  //   }
  //   getStatus()
  }, [])
  return (
    <div>
     <Rooms />
    </div>
  
  );
}

export default App;
