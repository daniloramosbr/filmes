import { useContext } from "react";
import "./info.css";
import { ContextJsx } from "../../context/context";
import { url } from "../../api/api";
import Header from "../header/header";

export default function Info() {

  const {data} = useContext(ContextJsx)

  return (
    <div className="cont-info">
      <div className="header-info">
      <Header/>
      </div>
      <div className="main">
        <img src={`${url}${data.img}`}/>
        <h1>{data.title}</h1>
      </div>
      <div className="desc">

        <div>
          <span>
          <ion-icon name="star"></ion-icon>
          </span>
          <b>Votação Média</b>
          <p>{data.note}</p>
        </div>

        <div>
        <span>
        <ion-icon name="hourglass-outline"></ion-icon>
          </span>
          <b>Data</b>
          <p>{data.date}</p>
        </div>

        <div>
        <span>
        <ion-icon name="reader-outline"></ion-icon>
          </span>
          <b>Descrição</b>
          <p>{data.desc}</p>
        </div>
        
      </div>
    </div>
  );
}
