import { BsCheckLg } from "react-icons/bs";
import {RiErrorWarningLine} from "react-icons/ri"
export enum status {
  success = 'success',
  error = 'error'
}
export default function Notification({
  message,
  status,
}: {
  message: string;
  status: status;
}) {
  return (
    <div className="fixed bottom-10 right-10 bg-white text-gray-700 p-4 rounded-lg shadow-lg z-50">
      <div className={`absolute left-0 h-1 w-full bottom-0 rounded-md ${status === 'success' ? "bg-green-500" : "bg-red-500"}`}>
      </div>
      <div className="flex gap-3">
        <div className="flex  gap-2 items-center">
          {status === 'success' ? (

          <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
            <BsCheckLg className="w-5 h-5 text-white" />
          </div>
          ) : (
          <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
            <RiErrorWarningLine className="w-5 h-5 text-white" />
          </div>

          )}
          <div>
          <div className="font-semibold text-base">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
