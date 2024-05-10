import "./Hero.css";
import { PrimaryButton } from "../../components/index";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcome To Cybrog</h6>
            <h4 className="hero-title"><em>Browse</em> Our Popular Games Here</h4>

            <div className="main-button">
              <PrimaryButton> Browse Now </PrimaryButton>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
