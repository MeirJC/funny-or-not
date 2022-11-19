import React from "react";
import "./Gallery.css";

function Gallery({ yes, no, setYes, setNo }) {
  return (
    <div>
      <h1 className="header">My Stupid Memes</h1>
      <div className="counters flxCntCnt">
        <h3 className="score flxCntCnt">
          <span className="emoji">😢</span> &nbsp;&nbsp; {no}
        </h3>
        <h3 className="score flxCntCnt">
          <span className="emoji">🤣</span> &nbsp;&nbsp;{yes}
        </h3>
      </div>
      <div className="picContainer">
        <img src="memes/1.jpg" alt="" />
      </div>
      <div className="buttons">
        <h1 className="btn">
          <span
            style={{ color: "crimson" }}
            class="material-symbols-outlined"
            onClick={() => {
              setNo((prev) => prev * 1 + 1);
            }}
          >
            arrow_downward
          </span>
        </h1>

        <h1 className="btn">
          <span
            style={{ color: "green" }}
            class="material-symbols-outlined"
            onClick={() => {
              setYes((prev) => prev * 1 + 1);
            }}
          >
            arrow_upward
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Gallery;
