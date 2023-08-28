import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Newcontext } from "./context/context";
function Authors() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [post, setpost] = useState([]);
  const info = useContext(Newcontext);

  useEffect(() => {
    setpost(info);
  }, [info]);
  const Title = post[id];
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
