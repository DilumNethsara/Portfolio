import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";
import profileImg from "../../assets/profile.jpg";
import resume from "../../assets/CV-DilumNethsara.pdf";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="about center">
      <div className="about__header">
        {<img src={profileImg} alt={name} className="about__picture" />}

        <div className="about__intro">
          {name && (
            <h1>
              Hi, I am <span className="about__name">{name}.</span>
            </h1>
          )}

          {role && <h2 className="about__role">{role}.</h2>}
          <p className="about__desc">{description && description}</p>
        </div>
      </div>

      <div className="about__contact center">
        {
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        }

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
