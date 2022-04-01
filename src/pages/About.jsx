import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <img
        className="img_about"
        src="https://islam.ru/sites/default/files/img/2016/obshestvo/foto-1.jpg"
        alt=""
      />

      <Link to="/products">
        <p className="parag">
          Читатель проживает тысячу жизней, прежде чем умрёт Человек, который
          никогда не читает, проживает только одну. Преимущество книг... в том,
          что заключенные в них жизни, истории, размышления становятся твоими;
          закрывая книгу, ты уже не тот, каким был, открывая ее. Некоторые
          страницы написаны очень умными людьми, и, если ты способен читать
          смиренно, терпеливо и с желанием чему-то научиться, они никогда тебя
          не разочаруют. Даже непонятое залегает в каком-то дальнем тайнике
          твоей головы – на будущее, которое придаст ему смысл и превратит в
          нечто прекрасное или полезное. Артуро Перес-Реверте | Королева Юга.
        </p>
        <Button
          className="btn"
          variant="contained"
          style={{ position: "absolute", top: "600px", left: "700px" }}
        >
          Books
        </Button>
      </Link>
    </div>
  );
};

export default About;
