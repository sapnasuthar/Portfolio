import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import { about } from "../../editable-stuff/config";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row aboutme-swap flex-column flex-lg-row align-items-center">
        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          {showPic && (
            <img
              className="border border-secondary rounded-circle aboutme-icon img-fluid"
              src={profilePicUrl}
              alt="profilepicture"
              style={{ maxWidth: 220, width: "100%", height: "auto" }}
            />
          )}
        </div>
        <div className={`col-12 col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="container row mt-5 aboutme-dropwhitespace">
        <p className="lead text-center" style={{ whiteSpace: 'pre-line' }}>{about.extraMessage}</p>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
