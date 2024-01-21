// import { useState } from 'react'
import userData from '../userData.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import './App.css';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
};

export default App;
