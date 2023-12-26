//* LIB
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiUser3Fill } from 'react-icons/ri';
import { RiKey2Fill } from 'react-icons/ri';

//* IMPORT
import { login } from '@/services/auth';
import logo from '@/assets/image/mainlogo.png';

const LoginAdmin = () => {
  const userName = React.useRef(null);
  const passWord = React.useRef(null);
  const notifyUsername = React.useRef('');
  const notifyPassword = React.useRef('');

  const [notify, setNotify] = React.useState(null);
  const navigate = useNavigate();

  const listNotify = [notifyUsername, notifyPassword];

  const submit = React.useCallback(async (name, passWord) => {
    const [filedValidate, isError] = await login([name, passWord]);

    switch (isError) {
      case true: {
        for (let i = 0; i < listNotify.length; i++) {
          if (filedValidate[i].error) {
            listNotify[i].current = filedValidate[i].notify;
          } else listNotify[i].current = ' ';
        }
        setNotify((prev) => !prev);
        return;
      }

      case false: {
        navigate(`/login/Khoahoc`);
        return;
      }
    }
  }, []);

  return (
    <>
      <div className="flex bg-[#561B8C] relative justify-end">
        <div className="w-[60%] bg-[white] h-screen  absolute rounded-r-[15%] left-0 shadow-[rgba(0,0,0,0.4)_15px_4px_30px_15px] z-10">
          <img
            className="w-[60%] object-fill   absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] rotate-[6.62deg] rounded-[55px]"
            src={logo}
          />
        </div>
        <div className="w-[40%] bg-[#561B8C] h-screen  relative">
          <div className=" flex flex-col absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] p-5  bg-[#8A50C1] rounded-[10%] shadow-2xl  ">
            <div className="text-center font-bold  text-[#EBC901] text-3xl md:text-4xl mb-[20px]">
              Sign In
            </div>
            <form action="" className="pt-[25px] text-[#EBC901]">
              <div className="flex flex-col mb-[10px]">
                <p className="text-[15px] font-bold ">Username</p>
                <div className="flex flex-row items-center gap-[10px]  rounded-full mb-[5px] ">
                  <input
                    ref={userName}
                    className=" p-[7px] bg-[white]  rounded-tl-full rounded-bl-full   w-full outline-0  text-black"
                    type="text"
                    name="user name"
                    placeholder="enter user name"
                  />
                  <div className=" bg-[white]  p-[5px] rounded-tr-full rounded-br-full">
                    <RiUser3Fill size={25} className="text-black  " />
                  </div>
                </div>
                <p className="text-[#e11d48] text-sm font-bold ">{notifyUsername.current}</p>
              </div>
              <div className="flex flex-col mb-[10px]">
                <p className="text-[15px] font-bold ">PassWord</p>
                <div className="flex flex-row items-center gap-[10px]  rounded-full mb-[5px] min-w-[300px]">
                  <input
                    ref={passWord}
                    className=" p-[7px] bg-[white]  rounded-tl-full rounded-bl-full  w-full  text-black  outline-none"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <div className=" bg-[white]  p-[5px] rounded-tr-full rounded-br-full">
                    <RiKey2Fill size={25} className="text-black " />
                  </div>
                </div>
                <p className="text-[#e11d48] text-sm font-bold">{notifyPassword.current}</p>
              </div>
            </form>
            <div className="flex flex-col items-center relative text-[#EBC901]">
              <a href="#" onClick={() => {}} className=" text-right p-2 ">
                Forgot password?
              </a>
              <button
                id="box-info"
                className=" p-[10px] rounded-full font-bold  w-full transition ease-in-out delay-150 bg-[#561B8C] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  text-lg "
                onClick={() => {
                  submit(userName.current.value, passWord.current.value);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
