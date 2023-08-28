import { useState, useEffect, useContext } from "react";
import Navbar from "./navbar";
import { Newcontext } from "./context/context";
import { Link } from "react-router-dom";
import Authors from "./authors";

function Authorpage() {
  const [toggle, settoggle] = useState(false);
  const [post, setpost] = useState([]);
  const [id, setId] = useState("");
  const info = useContext(Newcontext);
  useEffect(() => {
    setpost(info);
  }, [info]);

  const handleCardClick = (id) => {
    settoggle(true);
    setId(id);
  };

  return (
    <>
      <Navbar />
      <div className="m-[80px] ">
        <div className="flex gap-[165px] flex-col justify-center items-center">
          <ul className="flex flex-wrap">
            {post.map((items) => {
              const id = items.id;
              return (
                <li key={items.id} className=" m-[20px] ">
                  <div
                    onClick={() => handleCardClick(id)}
                    className=" flex flex-col w-[200px] relative h-[250px] ml-[65px] border-slate-900 border-4 rounded-xl"
                  >
                    <div>Title</div>
                    <div>{items.title}</div>

                    <button className="border-2 border-slate-500 bg-cyan-300  absolute top-[195px] left-[45px] rounded-lg pl-[10px]  pr-[10px] p-[5px] ">
                      Add To Fav
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {toggle && <Authors id={id} />}
        </div>
      </div>
    </>
  );
}

export default Authorpage;
