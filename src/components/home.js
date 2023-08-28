import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useState, useEffect, useContext } from "react";
import { Newcontext } from "./context/context";

function Home() {
  const navigate = useNavigate();

  const [post, setpost] = useState([]);
  const info = useContext(Newcontext);
  useEffect(() => {
    setpost(info);
  }, [info]);
  const changeroute = () => {
    navigate("/author");
  };

  return (
    <>
      <Navbar />
      <div className="  w-[100%] gap-10 h-[100vh]  p-[20px] ml-[50px] ">
        <div className="flex gap-[165px]">
          <ul className="flex flex-wrap">
            {post.map((items) => {
              if (items.id <= 5) {
                return (
                  <li key={items.id} className=" m-[20px] ">
                    <div className=" flex flex-col w-[200px] h-[250px] ml-[85px] border-slate-900 border-4 rounded-xl">
                      <div>Title</div>
                      <div>{items.title}</div>
                    </div>
                  </li>
                );
              } else return;
            })}
          </ul>
        </div>

        <button
          onClick={changeroute}
          className=" border-4 ml-[750px] mt-[250px] mb-[100px] w-[200px] h-[100px] rounded-3xl bg-cyan-300"
        >
          VIEW MORE
        </button>
      </div>
    </>
  );
}

export default Home;
