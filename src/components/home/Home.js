import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
  const [roomName, setRoomName] = React.useState('');

  const changeRoomName = event => setRoomName(event.target.value);

  return (
    <div className = { style.home }>
      <input type = 'text' placeholder = 'Room Name' value = { roomName } onChange = { changeRoomName }/>
      <Link to = {`/${roomName}`}>Join</Link>
    </div>
  );
};

export default Home;