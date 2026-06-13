import "./Main.css";
import { assets } from "../../assets/assets";

export default function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Image" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam!
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam!
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam!
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam!
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div>
      </div>

      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double
          check it's response.
        </p>
      </div>
    </div>
  );
}
