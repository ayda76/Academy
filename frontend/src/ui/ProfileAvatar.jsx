const ProfileAvatar = ({ avatarUrl, name }) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img
          src={avatarUrl || "/assets/images/user.jpg"}
          className="w-8 h-8 rounded-full object-cover object-center"
          alt="avatar"
        />
      </div>
      <span className="text-xs md:text-sm text-secondary-600">{name}</span>
    </div>
  );
};

export default ProfileAvatar;
