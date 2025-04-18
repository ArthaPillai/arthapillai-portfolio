import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <>
                    <a
                      href="/ArthaPillai_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-link-button"
                    >
                      <Button text="View my resume" />
                    </a>
                    <a
                      href="/ArthaPillai_Resume.pdf"
                      className="download-link-button"
                      onClick={(e) => {
                        e.preventDefault();
              
                        // Check if the browser is Safari
                        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
              
                        if (isSafari) {
                          // Redirect to the file URL for Safari to handle the download
                          window.location.href = "/ArthaPillai_Resume.pdf";
                        } else {
                          // Use the programmatic download for other browsers
                          fetch("/ArthaPillai_Resume.pdf")
                            .then((response) => response.blob())
                            .then((blob) => {
                              const url = window.URL.createObjectURL(blob);
                              const link = document.createElement("a");
                              link.href = url;
                              link.download = "ArthaPillai_Resume.pdf";
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                              window.URL.revokeObjectURL(url);
                            })
                            .catch((error) => console.error("Error downloading the file:", error));
                        }
                      }}
                    >
                      <Button text="Download my resume" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
