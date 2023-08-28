import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" f w-[100%]  p-[10px] bg-slate-300 m-[2px]">
        <ul className="flex gap-5 text-[20px] p-[10px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/fav">Fav</NavLink>
          <NavLink to="/author">Author</NavLink>
          <NavLink to="/login">Login</NavLink>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
