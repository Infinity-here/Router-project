import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Newcontext } from "./context/context";
function Authors({ id }) {
  console.log(id);
  // const params = useParams();
  // const { id } = params;
  const [post, setpost] = useState([]);
  const info = useContext(Newcontext);
  // console.log(info)
  useEffect(() => {
    setpost(info);
  }, [info]);
  const Title = post[id - 1];
  console.log(Title);

  return (
    <div>
      <div className=" flex flex-col w-[100%] h-[100%]  border-slate-900 border-4 rounded-xl">
        <div className="mt-[10px]">Title:-{Title?.title}</div>
        <div className="mt-[10px]">Category:-{Title?.category}</div>
        <div className="mt-[10px]">Price:-{Title?.price}</div>
        <div className="mt-[10px]">Description:-{Title?.description}</div>
      </div>
    </div>
  );
}

export default Authors;
