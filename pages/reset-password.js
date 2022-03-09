import { 
    sendResetPassword,
    changePassword
} 
from '../services/Auth';
import { useEffect, useState } from "react";
import { Alert } from '@mui/material';
import { useRouter } from 'next/dist/client/router';



const ResetPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [srcPassword, setSrcPassword] = useState('HiddenPassword.svg');
    const [inputType, setInputType] = useState('password');
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [oobCode, setOobCode] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const router = useRouter();

    

    const newPasswordSubmitted = async(e) =>{
        e.preventDefault();

        if(newPassword !== confirmNewPassword){
            console.log("Password is not match");
            setIsError(true);
            return;
        }

        // setIsMatch(true);
        try {
            await changePassword(newPassword);
            setIsSuccess(true);
            setTimeout(() => {
                router.replace('/profile');
            }, 3500);
        } catch (error) {
            console.log(error);
            setIsError(true);
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

    useEffect(() => {
        if(isSuccess){
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000)
        }
      }, [isSuccess]);
    
    useEffect(() => {
      if(isError){
        setTimeout(() => {
          setIsError(false);
        }, 5000)
      }
    }, [isError])


    return (
    <div className="flex flex-col mx-96 px-32 my-14">
        <div className="flex justify-center mb-8">
            <h1 className={`rhythm text-5xl text-center`}>Change <br /> Password</h1>
        </div>
        <div className="relative mx-6 mt-5">
            {(isSuccess) && 
                <div className='-top-6 absolute ml-0 mr-0 left-0 right-0'>
                    <Alert variant='filled' severity='success'>
                        Password berhasil diganti!
                    </Alert>
                </div>
            }
            {(isError) && 
                <div className='-top-6 absolute ml-0 mr-0 left-0 right-0'>
                <Alert variant='filled' severity='error'>
                    Password tidak sama!
                </Alert>
            </div>
            }
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
        </div>
    </div>
    );
}
 
export default ResetPassword;