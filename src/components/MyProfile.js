/* eslint-disable no-console */
import React from 'react';
import './MyProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionStore = useSelector((state) => (state.missionReducer));
  console.log(missionStore);

  return (
    <div>
      <div className="myProfile-container">
        <div className="mission-item">
          <h3> My Missions</h3>
          <h6>dfds</h6>
        </div>
        <div>
          <h3>My Rockets</h3>
        </div>
      </div>
    </div>
  );
};
// const MyProfile = () => {
//   const missionStore = useSelector((state) => state.missionReducer);

//   console.log(missionStore);
//   return (
//     <div>
//       <div className="myProfile-container">
//         <div className="mission-item">
//           <h3> My Missions</h3>
//           {/* { missionStore.map((e) => (
//             <h6 key={e.id}>
//               {e.name}
//             </h6>
//           ))} */}
//         </div>
//       </div>
//       <div>
//         <h3>My Rockets</h3>
//       </div>
//     </div>
//   );
// };

export default MyProfile;
