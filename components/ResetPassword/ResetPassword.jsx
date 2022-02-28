import { confirmPasswordReset } from 'firebase/auth';
import { useEffect, useState } from 'react';

const ResetPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [srcPassword, setSrcPassword] = useState('HiddenPassword.svg');
  const [inputType, setInputType] = useState('password');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const queryParams = new URLSearchParams(window.location.search);
  const oobCode = queryParams.get('oobCode');

  function newPasswordSubmitted(e) {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      console.log('Password is not match');
      console.log(oobCode);
      return;
    }

    confirmPasswordReset(code, newPassword)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    console.log('Password has been changed!');
  }

  useEffect(() => {
    if (isShowPassword) {
      setSrcPassword('SeePassword.svg');
      setInputType('text');
      return;
    }

    setSrcPassword('HiddenPassword.svg');
    setInputType('password');
  }, [isShowPassword]);

  return (
    <div className="flex flex-col mx-96 px-32 my-20">
      <div className="flex justify-center mb-8">
        <h1 className={`rhythm text-5xl text-center`}>
          Change <br /> Password
        </h1>
      </div>
      <div className="flex flex-col">
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
              <img
                onClick={() => setIsShowPassword(!isShowPassword)}
                className={` p-1.5 w-10 flex justify-end`}
                src={`/icons/${srcPassword}`}
                alt=""
              />
            </div>
          </div>
          <div
            className={`flex flex-col bg-[#E4E4E4] border border-[#DF8D9F] my-8 pl-4 pr-4 py-2 rounded-md`}
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
              <img
                onClick={() => setIsShowPassword(!isShowPassword)}
                className={` p-1.5 w-10 flex justify-end`}
                src={`/icons/${srcPassword}`}
                alt=""
              />
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
};

export default ResetPassword;
