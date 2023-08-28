import { useState, useEffect, useContext } from "react";
import Navbar from "./navbar";
import { Newcontext } from "./context/context";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { context } from "../App";

function Authorpage() {
  const { fav, setfav } = useContext(context);
  const [post, setpost] = useState([]);
  const info = useContext(Newcontext);

  useEffect(() => {
    setpost(info);
  }, [info]);
  const AddtoFav = (items) => {
    console.log(items);
    setfav((fav) => [...fav, items]);
  };
  console.log(fav, "fav");

  return (
    <>
      <Navbar />
      <div className="m-[80px] ">
        <div className="flex gap-[165px] flex-col ">
          <ul className="flex flex-wrap">
            {post.map((items) => {
              const id = items.id;
              return (
                <li key={items.id} className=" m-[20px] ">
                  <div className=" flex flex-col w-[200px] relative h-[250px] ml-[65px] border-slate-900 border-4 rounded-xl">
                    <Link to={`${id}`}>
                      <div>Title</div>
                      <div>{items.title}</div>
                    </Link>
                    <button
                      onClick={() => AddtoFav(items)}
                      className="border-2 border-slate-500 bg-cyan-300  absolute top-[195px] left-[45px] rounded-lg pl-[10px]  pr-[10px] p-[5px] "
                    >
                      Add To Fav
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Authorpage;
