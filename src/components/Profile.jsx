// import React, { useContext } from 'react'
// import UserContext from '../context/UserContext'

// function Profile() {
//       const {user} = useContext(UserContext)
//   return (
  
//     <div>
      
//       <h1>wlcome {user.username}</h1>
//     </div>
//   )
// }

// export default Profile

import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext); // ✅ Correct usage

  return (
    <div>
      <h1>Welcome {user?.username}</h1>
    </div>
  );
}

export default Profile;

