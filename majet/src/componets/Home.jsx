import React from "react";
import NavBar from "./NavBar";
import Majet from "../assets/majet.png";
import LinkButton from "./LinkButton";
import HomeContant from "./HomeContant";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  return (
    <div className="">
      <div className="bg-lime-200 flex justify-between items-center px-8  py-4 shadow-md">
        <div className="flex items-start gap-32  pl-20 align-middle justify-between">
          <img src={Majet} alt="" className="rounded-full h-14 w-14" />
          <div className="text-3xl font-serif font-extrabold text-lime-800 pt-3">
            Majet
          </div>
        </div>
        <div className="flex items-start   justify-between gap-10 pr-20">
          {/* aboute and servise links */}
          <NavBar onClick={() => {}} text="About" />
          <NavBar onClick={() => {}} text="Servise" />
          {/* for the login and  sign up button */}
          <LinkButton onClick={navigator("../pages/login")} text="Login" />
          <LinkButton onClick={() => {}} text="Sign Up" />
        </div>
      </div>
      <HomeContant />
      <Footer />
    </div>
  );
}

export default Home;
