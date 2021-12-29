import React from "react";
import "../styles/PreLoader.css";
import loading from '../img/loading.gif'

function PreLoader() {


  return (
    <div className="container-loading">
      <div className="load-block">
      <img src={loading} className="logo-loading" data-aos="fade-left" alt="gif book society" />
      </div>

    </div>
  );
}

export default PreLoader;
