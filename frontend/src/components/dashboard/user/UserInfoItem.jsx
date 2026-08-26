const UserInfoItem = ({ label, value, Icon }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-purple-50 text-purple-800">
          <Icon className="text-lg" />
        </div>
        <span className="text-sm text-secondary-500 w-36 shrink-0">
          {label}
        </span>
      </div>
      <span className="text-sm font-medium text-secondary-800">{value}</span>
    </div>
  );
};

export default UserInfoItem;
