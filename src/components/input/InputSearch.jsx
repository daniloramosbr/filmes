/* eslint-disable no-unused-vars */
import "./InputSearch.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputSearch() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="cont-s">
      <form>
        <input
          placeholder="busque um filme"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </form>
      <button className="button" onClick={()=> {
       if (!search) return
       navigate(`/search?q=${search}`)
       setSearch('')
      }}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}
