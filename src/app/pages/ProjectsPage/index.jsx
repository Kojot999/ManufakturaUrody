import "./style.scss";
import img1 from "@assets/project1a.jpeg";
import img2 from "@assets/project1b.jpeg";
import img3 from "@assets/project1c.png";

import img4 from "@assets/project2a.jpeg";
import img5 from "@assets/project2b.jpeg";
import img6 from "@assets/project2c.png";

import img7 from "@assets/project3a.jpeg";
import img8 from "@assets/project3b.jpeg";
import img9 from "@assets/project3c.jpeg";
import img10 from "@assets/project3d.jpeg";
import img11 from "@assets/project3e.jpeg";
import img12 from "@assets/project3f.jpeg";

import img13 from "@assets/project4a.jpeg";
import img14 from "@assets/project4b.jpeg";
import img15 from "@assets/project4c.jpeg";

import img16 from "@assets/project5a.jpeg";
import img17 from "@assets/project5b.jpeg";
import img18 from "@assets/project5c.jpeg";
import img19 from "@assets/project5d.jpeg";
import img20 from "@assets/project5e.jpeg";
import img21 from "@assets/project5f.jpeg";

import img22 from "@assets/project6a.jpeg";
import img23 from "@assets/project6b.jpeg";
import img24 from "@assets/project6c.jpeg";

const projects = [
  {
    id: 1,
    title: "Budowa ścieżek pieszo-rowerowych w parku miejskim",
    location: "Park Liśiniec, Częstochowa",
    category: "Ścieżki parkowe",
    images: [img22, img23, img24],
  },
  {
    id: 2,
    title: "Remonty i rewitalizacja zabytkowego parku",
    location: "Piotrków Trybunalski",
    category: "Specjalistyczne realizacje z kostki granitowej",
    images: [img16, img17, img18, img19, img20, img21],
  },
  {
    id: 3,
    title: "Rewitalizacja parku z zbiornikami wodnymi",
    location: "Szubianki, Jarocin",
    category: "Zbiorniki wodne i przestrzenie reprezentacyjne",
    images: [img13, img14, img15],
  },
  {
    id: 4,
    title: "Rewitalizacja parku w Jaraczewie",
    location: "Park Jaraczewski, Jaraczewo",
    category: "Amfiteatry i przestrzenie reprezentacyjne",
    images: [img9, img7, img8, img10, img11, img12],
  },
  {
    id: 5,
    title: "Budowa przepustu i brodu ",
    location: "Nadleśnictwo",
    category: "Roboty specjalistyczne",
    images: [img6, img5, img4],
  },
  {
    id: 6,
    title: "Rewitalizacja parku",
    location: "Strzegom",
    category: "Przestrzenie reprezentacyjne",
    images: [img1, img2, img3],
  },
];

export default function ProjectsPage() {
  return (
    <section className="projects-page">
      <section className="projectsHero">
        <div className="heroCopy">
          <p className="eyebrow">Realizacje Bast-Grys</p>
          <h1>
            Dotychczasowe realizacje
            <br />
            naszych projektów
          </h1>
          <p className="lead">
            Projekty obejmujące ścieżki parkowe, chodniki, place, parkingi oraz
            realizacje specjalistyczne z kostki granitowej w tym amfiteatry,
            zbiorniki wodne wraz z ich infrastrukturą towarzyszącą. Ścieżki
            mineralne wodoprzepuszczalne, wraz z przepustami, mostkami i
            nawierzchniami wokół obiektów zabytkowych.
          </p>
        </div>
      </section>

      <section className="projectsList">
        {projects.map((project, index) => (
          <article className="projectCard" key={project.id}>
            <div className="projectHeader">
              <div className="projectMeta">
                <h2>{project.title}</h2>
                <div className="metaRow">
                  <span className="metaTag">{project.category}</span>
                  <span className="metaLocation">{project.location}</span>
                </div>
              </div>
            </div>
            <div className="projectGallery">
              <figure className="galleryItem">
                <img src={project.images[0]} alt={`${project.title} - przed`} />
              </figure>
              <figure className="galleryItem">
                <img
                  src={project.images[1]}
                  alt={`${project.title} - w trakcie`}
                />
              </figure>
              <figure className="galleryItem">
                <img src={project.images[2]} alt={`${project.title} - po`} />
              </figure>

              {project.images[3] && (
                <figure className="galleryItem">
                  <img src={project.images[3]} alt={`${project.title} - po`} />
                </figure>
              )}
              {project.images[4] && (
                <figure className="galleryItem">
                  <img src={project.images[4]} alt={`${project.title} - po`} />
                </figure>
              )}

              {project.images[5] && (
                <figure className="galleryItem">
                  <img src={project.images[5]} alt={`${project.title} - po`} />
                </figure>
              )}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
