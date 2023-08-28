import { createContext, useState, useEffect } from "react";
export const Newcontext = createContext();
export const Newstate = (props) => {
  const [post, setpost] = useState([]);
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setpost(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Newcontext.Provider value={post}>{props.children}</Newcontext.Provider>
  );
};
