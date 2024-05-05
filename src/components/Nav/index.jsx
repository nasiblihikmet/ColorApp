import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import "./nav.css";
import { Router } from "../../constants/ROUTE";

export const Nav = () => {
  let navigator = useNavigate();

  return (
    <>
      <ul className="d-flex gap-5 bg-primary p-3 w-100">
        <button
          onClick={() => navigator(-1)}
          className="btn text-black carousel-control-prev-icon"
        ></button>
        <button
          onClick={() => navigator(1)}
          className="btn text-black carousel-control-next-icon"
        ></button>
        <li className="text-light li" onClick={() => navigator(Router.home)}>
          Home
        </li>
        <li className="text-light li" onClick={() => navigator(Router.setting)}>
          Setting
        </li>
      </ul>
    </>
  );
};
