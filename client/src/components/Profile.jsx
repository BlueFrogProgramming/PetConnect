import { useState, useEffect } from 'react';
import './Styles/ProfileStyle.css';
import 'boxicons';
import { getCurrentUser, signOut, deleteUser, fetchUserAttributes } from 'aws-amplify/auth';
//import { Storage } from '@aws-amplify/storage'

const useRenderLogger = (componentName) => {
  useEffect(() => {
    console.log(`${componentName} rendered`);
  });
};

function Profile({ onNavigate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [imageError, setImageError] = useState(false);

  useRenderLogger('Profile');

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getCurrentUser();
        const attributes = await fetchUserAttributes(user)
        const [fName, lName] = (attributes.name || '').split(' ');
        setFirstName(fName || '');
        setLastName(lName || '');
        setEmail(attributes.email || '');
        setProfilePicture(attributes.picture || '');
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getData();
  }, []);

  const logOut = async (event) => {
    event.preventDefault();
    try {
      await signOut();
      onNavigate('login');
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const deleteAccount = async (event) => {
    event.preventDefault();
    try {
      await getCurrentUser();
      await deleteUser();
      onNavigate('login');
    } catch (error) {
      console.error("Error during account deletion:", error);
    }
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      const fullName = `${firstName} ${lastName}`; 
      const user = await getCurrentUser();
      const attributes = { name: fullName };

      // If a new profile image is selected, upload it
      /*if (newProfileImage) {
        const result = await Storage.put(`profile-pictures/${newProfileImage.name}`, newProfileImage, {
          contentType: newProfileImage.type,
        });
        const pictureUrl = `https://amplify-petconnect-dev-d1727-deployment.s3.amazonaws.com/${result.key}`;
        attributes.picture = pictureUrl;
        setProfilePicture(pictureUrl);
      }*/

      await Auth.updateUserAttributes(user, attributes);
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user attributes:", error);
    }
  };

  const handleImageChange = (event) => {
    setNewProfileImage(event.target.files[0]);
  };

  return (
    <div className="wrapper">
      <h1>Profile</h1>
      <div className="image-wrapper">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        {isEditing && (
          <input type="file" onChange={handleImageChange} accept="image/*" />
        )}
      </div>
      <div className="info">
        <div className="name-wrapper">
          {isEditing ? (
            <>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="name-input"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="name-input"
              />
              <button onClick={handleSaveChanges} className="save-button">Save</button>
            </>
          ) : (
            <>
              <p className="name">{firstName} {lastName}</p>
              <button onClick={() => setIsEditing(true)} className="edit-button">
                <box-icon type='solid' color='white' name='pencil' size='sm'></box-icon>
              </button>
            </>
          )}
        </div>
        <div>
          <p className="email">{email}</p>
        </div>
        <p>test</p>
      </div>
      <button onClick={logOut} className="logout-button">Logout</button>
      <button onClick={deleteAccount} className="delete-button">Delete Account</button>
    </div>
  );
}

export default Profile;
