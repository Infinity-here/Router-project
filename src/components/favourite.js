import { useContext } from "react";
import Navbar from "./navbar";
import { context } from "../App";

function Fav() {
  const { fav } = useContext(context);

  return (
    <>
      <Navbar />
      <ul className="flex flex-wrap">
        {fav.map((items) => {
          const id = items.id;
          return (
            <li key={items.id} className=" m-[20px] ">
              <div className=" flex flex-col w-[100%] relative h-[100%]  border-slate-900 border-4 rounded-xl">
                <div className="mt-[10px]">Title:-{items?.title}</div>
                <div className="mt-[10px]">Category:-{items?.category}</div>
                <div className="mt-[10px]">Price:-{items?.price}</div>
                <div className="mt-[10px]">
                  Description:-{items?.description}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Fav;
