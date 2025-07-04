import "./about.css";
import ProfileImage from "../../assets/image/Profile.png";

const About = () => (
  <section className="about">
    <div className="about__profile-image-container">
      <img src={ProfileImage} alt="User Profile" className="about__profile-image" />
    </div>
    <article className="about__text-content">
      <h2 className="about__main-heading">About Me</h2>
      <p className="about__main-paragraph">
        Hi, I'm Sam Morris, a QA Engineer with a background in fullstack
        development. I work with JavaScript, Python, Node.js, and React, and I
        specialize in automation and testing. Through TripleTen, I gained
        hands-on experience building fullstack apps and collaborating in agile
        teams. I'm passionate about creating reliable, user-friendly software
        and helping others grow in tech.
      </p>
    </article>
  </section>
);

export default About;
