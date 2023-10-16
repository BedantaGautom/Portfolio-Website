import React from "react";
import { FashionifyImg, PortfolioImg, FtpServerImg } from "../../assets/images";

const projects = [
  {
    name: "This Site",
    info: [
      "Built with React using parcel bundler for it's no-config approach.",
      "Using Chakra UI to build the UI.",
      "Using storybook for visual testing and building reusable components.",
      "Going forward, I'm hoping to integrate Next.js and Github API into this website.",
    ],
    media: <PortfolioImg />,
    live: null,
    repo: "https://github.com/BedantaGautom/Portfolio-Website",
    id: 1,
  },
  {
    name: "Fashionify",
    info: [
      "Fashion Blog website using HTML, CSS, and Javascript with Azure Health Bot feature.",
      "Search or post any services related to fashion lifestyle.",
      "Deployed using Github pages and Azure Web Apps.",
    ],
    media: <FashionifyImg />,
    live: "https://bedantagautom.github.io/Fashionify",
    repo: "https://github.com/BedantaGautom/Fashionify",
    id: 2,
  },
  {
    name: "FTP Server",
    info: [
      "Web Application to upload and download files.",
      "Uses File Transfer Protocol to transfer files from client to server and vice versa.",
      "Deployed using Node.js, Express.js and Multer.",
    ],
    media: <FtpServerImg />,
    live: "https://web-app-pxu7.onrender.com",
    repo: "https://github.com/BedantaGautom/FTP-Server",
    id: 3,
  },
];

export default projects;
