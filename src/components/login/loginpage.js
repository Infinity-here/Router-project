import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

function LoginPage() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    mail: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newdata = { ...inputData };
    setData((prv) => [...prv, newdata]);
    setInputData({ mail: "", password: "" });
    console.log(localStorage.getItem("userdata"));
  };

  useEffect(() => {
    if (data.length === 0) return;
    localStorage.setItem("userdata", JSON.stringify(data));
  }, [data]);
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-[200px]">
        <div className="w-[350px] h-[400px] border-slate-600 border-2  bg-slate-200 rounded-2xl p-[10px]">
          <h2 className="m-[5px] text-[20px]">User Email</h2>
          <input
            className="border-cyan-400 border-2 rounded-lg text-[20px]"
            value={inputData.mail}
            name="mail"
            type="email"
            placeholder="Enter Your Name"
            onChange={handelInput}
          />
          <h2 className="m-[5px] text-[20px]">Password</h2>
          <input
            className="border-cyan-400 border-2 rounded-lg text-[20px]"
            type="password"
            name="password"
            value={inputData.password}
            placeholder="please enter your password"
            onChange={handelInput}
          />
          <button
            onClick={handelSubmit}
            className="m-[20px] ml-[120px] mt-[50px] border-2 border-cyan-600 text-[25px] p-[5px] bg-cyan-400 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
