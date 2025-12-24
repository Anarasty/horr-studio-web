import React from "react";
import Header from "../../Components/Header/Header";
import strokeBg from "../../images/strokeBg.svg";
import maskCircle from "../../images/mask-circle-outline 1.svg";
import "./StudioPage.scss";

const StudioPage = () => {
  return (
    <div className="studio">
      <Header />
      <img src={strokeBg} alt="strokeBg" className="strokeBg" />
      <section className="studio_page_section">
        <div className="studio_page_section_content">
          <h1>Fear takes everyone</h1>
          <div className="studio_page_section_player_container">
            <div className="player_btn">
              <button type="button" className="player_btn_inner">
                <img src={maskCircle} alt="play mask circle" />
                <span className="player_icon" aria-hidden="true">
                  &#9654;
                </span>
              </button>
            </div>
            <p>FEAR Blood Massacre</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;
