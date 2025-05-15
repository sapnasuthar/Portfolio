// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
<<<<<<< HEAD
  firstName: "Hashir",
  middleName: "",
  lastName: "Shoaib",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hashirshoaeb",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
=======
  firstName: "Sapna",
  middleName: "",
  lastName: "Suthar",
  message: "Wired for innovation, grounded in precision.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sapnasuthar",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sapnasuthar",
>>>>>>> d04f68f (Initial commit)
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
<<<<<<< HEAD
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
=======
  imageLink: require("../editable-stuff/sapnasuthar-2.png"),
  imageSize: 375,
  message:
    "I'm Sapna Suthar. I'm a third-year Electrical Engineering student at McMaster University. I love building circuits, designing PCBs and working with embedded systems. I take pride in turning ideas into real products, whether it's a control board for an electric vehicle or a custom FPGA design. I balance hands-on detail work with big-picture system planning. I thrive in team settings and enjoy solving practical problems with creative, effective solutions.",
  resume: require('../assets/img/SapnaSutharResume.pdf'),
>>>>>>> d04f68f (Initial commit)
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
<<<<<<< HEAD
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
=======
const schoolProjects = {
  show: true,
  heading: "School Projects",
  data: [
    {
      title: 'LIDAR Mapping',
      subtitle: 'Portable Indoor 3D Mapping System',
      img: require('../assets/img/projects/LIDAR_Photo.png'),
      link: require('../assets/img/projects/2DX3Report.pdf'),
      repo: "https://github.com/sapnasuthar/LIDAR-Mapping",
      description: "Built a portable system that scans indoor spaces in 3D and renders the point‐cloud data in MATLAB.",
    },
    {
      title: 'DC Power Supply',
      subtitle: 'ELECENG 2EI4 Course Project',
      img: require('../assets/img/projects/Project1.png'),
      link: require('../assets/img/projects/Project1.pdf'),
      repo: "https://github.com/sapnasuthar/ELECENG-2EI4/",
      description: "Developed a regulated DC power supply that delivers a steady output voltage under varying load conditions.",
    },
    {
      title: 'Voltage Controlled Switch',
      subtitle: 'ELECENG 2EI4 Course Project',
      img: require('../assets/img/projects/Project2.png'),
      link: require('../assets/img/projects/Project2.pdf'),
      repo: "https://github.com/sapnasuthar/ELECENG-2EI4/",
      description: "Created a switch whose output state toggles reliably in response to an analog control voltage.",
    },
    {
      title: 'Amplifier',
      subtitle: 'ELECENG 2EI4 Course Project',
      img: require('../assets/img/projects/Project3.png'),
      link: require('../assets/img/projects/Project3.pdf'),
      repo: "https://github.com/sapnasuthar/ELECENG-2EI4/",
      description: "Built a transistor amplifier achieving clean signal gain for small input voltages into a 100Ω load.",
    },
    {
      title: 'CMOS XOR Gate',
      subtitle: 'ELECENG 2EI4 Course Project',
      img: require('../assets/img/projects/Project4.png'),
      link: require('../assets/img/projects/Project4.pdf'),
      repo: "https://github.com/sapnasuthar/ELECENG-2EI4/",
      description: "Assembled a CMOS logic gate that accurately implements its truth table across all input combinations.",
    },
  ]
};

const personalProjects = {
  show: true,
  heading: "Personal Projects",
  data: [
    {
      title: 'RxID',
      subtitle: '1st Place at MakeUofT',
      img: require('../assets/img/projects/RxID.png'),
      link: "https://devpost.com/software/rxid",
      repo: "https://github.com/shaansuthar/rxid",
      description: "Delivered a patient-centric medication management platform that securely stores records and automates dispensing via RFID-enabled hardware.",
    },
    {
      title: 'QonnectR',
      subtitle: 'Best Use of Auth0 at DeltaHacks XI',
      img: require('../assets/img/projects/QonnectRLogo.png'),
      extraDesc: 'Watch me',
      link: "https://qonnectr.vercel.app",
      repo: "https://github.com/devp19/QonnectR",
      description: "Created a community-driven platform that connects individuals around project ideas, turning solo concepts into collaborative, accountable team efforts.",
    },
  ]
>>>>>>> d04f68f (Initial commit)
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
<<<<<<< HEAD
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
=======
    { name: "C/C++", img: require("../assets/img/skills/C.png") },
    { name: "Python", img: require("../assets/img/skills/Python.png") },
    { name: "Verilog", img: require("../assets/img/skills/Verilog.png") },
    { name: "SystemVerilog++", img: require("../assets/img/skills/SystemVerilog.png") },
    { name: "VHDL", img: require("../assets/img/skills/VHDL.png") },
    { name: "Java", img: require("../assets/img/skills/Java.png") },
    { name: "Git", img: require("../assets/img/skills/Git.webp") },
    { name: "Bash", img: require("../assets/img/skills/Bash.svg.png") },
  ],
  softSkills: [
    { name: "MATLAB", img: require("../assets/img/skills/MATLAB.png") },
    { name: "Quartus", img: require("../assets/img/skills/Quartus.png") },
    { name: "Altium Designer", img: require("../assets/img/skills/Altium.png") },
    { name: "Keil uVision", img: require("../assets/img/skills/Keil.jpeg") },
    { name: "LTSpice", img: require("../assets/img/skills/LTSpice.png") },
    { name: "VSCode", img: require("../assets/img/skills/VSCode.svg.png") },
>>>>>>> d04f68f (Initial commit)
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
<<<<<<< HEAD
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}
=======
    "I'm currently seeking internships in ASIC design, verification, and embedded systems. If you know of any opportunities, have questions, or just want to say hi, please feel free to reach out!"
};

const experiences = {
  show: true,
  id: 'experience',
  heading: 'Experiences',
  data: [
    {
      picture: require('../assets/img/experiences/GWC.svg.png'),
      title: 'Co-President',
      company: 'GirlsWhoCode',
      dates: 'September 2022 – June 2023',
      description: 'Co-led the McMaster Girls Who Code Club, organizing workshops and a hackathon that engaged 30+ members, boosted coding confidence and inspired others to pursue STEM paths',
      link: require('../assets/img/experiences/GWC Report.pdf'), // Add a link to more info if available
    },
    {
      picture: require('../assets/img/experiences/WIE.png'),
      title: 'Ambassador',
      company: 'Women in Engineering',
      dates: 'September 2023 – December 2023',
      description: 'Visited high schools to showcase the Women in Engineering program, outline engineering career pathways, and share my personal journey to inspire future students.',
      link: require('../assets/img/experiences/WIE Certificate.png'), // Add a link to more info if available
    },
    {
      picture: require('../assets/img/experiences/Scotia.png'),
      title: 'Unlock Your Future - Women in Technology Program Fellow',
      company: 'Scotiabank',
      dates: 'January 2024 – April 2024',
      description: 'Completed Scotiabank\'s Unlock Your Future program, gaining mentorship and career clarity',
      link: require('../assets/img/experiences/Scotiabank Report.pdf'), // Add a link to more info if available
    },
    {
      picture: require('../assets/img/experiences/DayTrading.jpg'),
      title: 'Day Trader',
      company: 'Self-Employed',
      dates: 'July 2024 – August 2024',
      description: 'Grew $100K to $150K in a month of paper trading using momentum setups',
      link: require('../assets/img/experiences/Trading Report.pdf'), // Add a link to more info if available
    },
    {
      picture: require('../assets/img/experiences/FE.png'),
      title: 'Front Controller PCB Designer',
      company: 'McMaster Formula SAE Team',
      dates: 'September 2023 – Present',
      description: 'Designed and built the front controller PCB for an electric race car.',
      link: require('../assets/img/experiences/FE Report.pdf'), // Add a link to more info if available
    },
    // Add more experiences here in the same format
  ]
};
>>>>>>> d04f68f (Initial commit)

// Blog SECTION
// const blog = {
//   show: false,
// };

<<<<<<< HEAD
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
=======
export { navBar, mainBody, about, schoolProjects, personalProjects, skills, leadership, getInTouch, experiences };
>>>>>>> d04f68f (Initial commit)
