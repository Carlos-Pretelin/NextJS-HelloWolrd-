//import React from 'react'

const Profile = () => {
  return (
    <div>
      <h1>This is the Profile Component!</h1>
      <div className="profile-container">
        <h1>John Doe</h1>
        <img
          className="profile-picture"
          src="https://m.media-amazon.com/images/G/01/digital/video/merch/TV/VXMA_2022_PVProfileImageCircle_256x256_Vax_LightBlue._CB1650303617_.png"
          alt=""
        />
        <p className="bio">
          Web Developer | Tech Enthusiast | Lifelong Learner
        </p>
        <p className="contact">Contact: johndoe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
