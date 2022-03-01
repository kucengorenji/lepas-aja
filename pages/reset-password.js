import { 
    sendResetPassword,
} 
from '../services/Auth';
import { useEffect, useState } from "react";
import app from '../config/firebase.config.js';


const ResetPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [srcPassword, setSrcPassword] = useState('HiddenPassword.svg');
    const [inputType, setInputType] = useState('password');
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [oobCode, setOobCode] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);


    useEffect(() => {
        const host = window.location.host;
        console.log(host);
        const queryParams = new URLSearchParams(window.location.search);
        setOobCode(queryParams.get('oobCode'));
        console.log(oobCode);
    })
    

    const newPasswordSubmitted = async(e) =>{
        e.preventDefault();
        console.log(oobCode);

        if(newPassword !== confirmNewPassword){
            console.log("Password is not match");
            setIsMatch(false);
            return;
        }

        setIsMatch(true);
        try {
            await sendResetPassword(oobCode, newPassword);
            setIsSuccess(true);
            console.log("Password has been changed!");
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        if(isShowPassword) {
            setSrcPassword('SeePassword.svg');
            setInputType('text');
            return;
        }

        setSrcPassword('HiddenPassword.svg')
        setInputType('password');
    }, [isShowPassword]);


    return (
    <div className="flex flex-col mx-96 px-32 my-14">
        <div className="flex justify-center mb-8">
            <h1 className={`rhythm text-5xl text-center`}>Change <br /> Password</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <form action="/" method="POST" onSubmit={newPasswordSubmitted}>
            <div
                className={`flex flex-col bg-[#E4E4E4] border border-[#DF8D9F] my-8 pl-4 pr-4 w-96 py-2 rounded-md`}
            >
                <label
                className={`rhythm border border-b-[#DF8D9F] w-28`}
                htmlFor="password"
                >
                New Password
                </label>
                <div className={`flex flex-row justify-between `}>
                    <input
                    className="bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-[#DF8D9F] text-xl w-full"
                    type={inputType}
                    id="password"
                    name="password"
                    placeholder="Enter New password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <img onClick={() => setIsShowPassword(!isShowPassword)} className={` p-1.5 w-10 flex justify-end`} src={`/icons/${srcPassword}`} alt="" />
                </div>
                
            </div>
            <div
                className={`flex flex-col bg-[#E4E4E4] border border-[#DF8D9F] my-8 pl-4 w-96 pr-4 py-2 rounded-md`}
            >
                <label
                className={`rhythm border border-b-[#DF8D9F] w-44`}
                htmlFor="password"
                >
                Confirm New Password
                </label>
                <div className={`flex flex-row justify-between `}>
                    <input
                    className={` bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-[#DF8D9F] text-xl w-full`}
                    type={inputType}
                    id="password"
                    name="password"
                    placeholder="Enter Confirm New Password"
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <img onClick={() => setIsShowPassword(!isShowPassword)} className={` p-1.5 w-10 flex justify-end`} src={`/icons/${srcPassword}`} alt="" />
                </div>
                
            </div>
            <div className={`mx-20 flex justify-center my-4 `}>
                <input
                className={`bg-[#DF8D9F] px-10 py-4 text-white rounded-md`}
                type="submit"
                value="Change"
                />
            </div>
            </form>
            <div className="relative">
                {(isMatch && isSuccess) && 
                    <h1 className="absolute -left-28 w-60 text-center bg-green-600 text-white py-2 px-4">Password has been changed!</h1>
                }
                {(!isMatch && !isSuccess) && 
                    <h1 className="absolute -left-28 w-60 text-center bg-red-600 text-white py-2 px-4">Password is not match!</h1>
                }
            </div>
        </div>
    </div>
    );
}
 
export default ResetPassword;