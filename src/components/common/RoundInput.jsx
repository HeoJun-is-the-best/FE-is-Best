export const RoundInput = ({ icon, placeholder, value, onChange }) => {
  return (
    <div className="w-full px-5 border-none outline-none justify-between items-center flex rounded-full bg-gray-100">
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="text-[16px] placeholder:text-gray-500 py-4"
      />
      {icon}
    </div>
  );
};
