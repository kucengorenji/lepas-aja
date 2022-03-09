import { useState } from "react";

const ToastSuccess = ({
    boldText, 
    text, 
    onToastClearClick = () => {}
}) => {

    return (
        <div className={`flex justify-between text-green-700 bg-green-100 border-green-400 px-4 py-3 border rounded`}>
            <div className="flex">
                <span className="font-bold mr-1">{boldText}</span>{' '}{text}
            </div>
            <div>
            <span 
                className=""
                onClick={() => onToastClearClick(false)}
            >
              <svg
                className="w-6 h-6 text-green-500 fill-current"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
            </div>
        </div>
    );
}
 
export default ToastSuccess;