import { createContext, useState, useEffect } from "react";

export const Data = createContext();

function Dataprovider({ children }) {
  const [HTML, setHTML] = useState("");
  const [CSS, setCSS] = useState("");
  const [JS, setJS] = useState("");

  return (
    <>
      <Data.Provider
        value={{
          HTML,
          setHTML,
          CSS,
          setCSS,
          JS,
          setJS,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
}

export default Dataprovider;
