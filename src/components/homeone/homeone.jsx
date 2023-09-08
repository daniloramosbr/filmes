/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./homeone.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextJsx } from "../../context/context";
import { url } from "../../api/api";

export default function HomeOne({ title, img, note, desc, date}) {
  const { data, setData } = useContext(ContextJsx);

  const navigate = useNavigate();

  return (
    <div className="one-container">
      <img src={`${url}${img}`} />
      <h1>{title}</h1>
      <div className="star">
        <ion-icon name="star"></ion-icon> <span>{note}</span>
      </div>
      <button
        onClick={() => {
          const dat = {
            img: img,
            title: title,
            note: note,
            desc: desc,
            date: date
          };

          setData(dat);
          console.log(data);
          navigate(`/info/${title}`)
        }}
      >
        DETALHES
      </button>
    </div>
  );
}
