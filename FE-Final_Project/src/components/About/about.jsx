import './about.css';
import ProfileImage from '../../assets/Profile.png';

const About = () => (
  <div className="about-container">

    <div className="profile-image-container">
      <img 
        src={ProfileImage}
        alt="User Profile" 
        className="profile-image"
      />
    </div>
    <div className="text-content">
      <h2 className="main-heading">
        About Me
      </h2>
     <p className="main-paragraph">Hi, I’m Sam Morris, a QA Engineer with a background in fullstack development. I work with JavaScript, Python, Node.js, and React, and I specialize in automation and testing. Through TripleTen, I gained hands-on experience building fullstack apps and collaborating in agile teams. I’m passionate about creating reliable, user-friendly software and helping others grow in tech.</p>
    </div>
  </div>
);

export default About;
