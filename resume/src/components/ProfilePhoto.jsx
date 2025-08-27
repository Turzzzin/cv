import "./ProfilePhoto.css";

function ProfilePhoto({ src, alt = "Profile Photo", size = 200 }) {
  return (
    <div className="profile-photo" style={{ width: size, height: size }}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ProfilePhoto;
