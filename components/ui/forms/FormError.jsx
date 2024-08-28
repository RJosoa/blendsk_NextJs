import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-300 p-3 rounded-lg flex items-center gap-x-2 text-sm text-red-800">
      <HiOutlineExclamationTriangle size={24}/>
      {message}
    </div>
  );
};
