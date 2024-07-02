/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal Portfolio",
    description:
      "Developed a responsive portfolio website featuring Home, About, Work, and Contact sections.The Work section includes project cards with pop-up details and a navigational bar for filtering projects by All and Latest.The Contact section provides direct links to email and WhatsApp, and a contact form integrated with EmailJS for users without accounts. The form includes validation and displays success or error messages upon submission",
    url: "https://nikithakosuri.github.io/myPortfolio/",
  },
  {
    title: "An Organic Grocery Store",
    description:
      "Developed an e-commerce site. The homepage showcases promotional slides and banners with offers, while the About section highlights farm field images and their work.The footer provides quick links, additional resources, and social media integration for enhanced user engagement. Implemented interactive elements and a newsletter subscription form to enhance user engagement.I don't have laptop provision while doing this project, I managed my tasks with mobile app version. Crafting CSS for the About section posed layout and visual challenges, requiring careful attention to detail for responsiveness.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
