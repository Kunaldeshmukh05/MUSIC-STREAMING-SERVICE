import React from "react";

const Profile = () => {

  const data = [
    { id: 1, title: "Name" },
    { id: 2, title: "Email" },
    { id: 3, title: "Phone NO" },
    { id: 4, title: "Playlists" },
  ];
  return (
    <div>
      <ul>
        <li>Name</li>
        <li>Phone No</li>
        <li>E-mail</li>
        <li>AGE</li>
        <li>DOB</li>
      </ul>
    </div>
  );
};

export default Profile;
