import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      {/* Display other user information */}
    </div>
  );
};

export default UserInfo;
