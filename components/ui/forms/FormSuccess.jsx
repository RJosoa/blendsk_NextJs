import { CiCircleCheck } from "react-icons/ci";

export const FormSuccess = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-green-300 p-3 rounded-lg flex items-center gap-x-2 text-sm text-green-800">
      <CiCircleCheck size={24} />
      {message}
    </div>
  );
};
