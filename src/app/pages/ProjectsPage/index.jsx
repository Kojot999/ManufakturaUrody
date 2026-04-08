import { useEffect, useState } from "react";
import "./style.scss";

import heroImg from "@assets/img1.jpg";
import project1 from "@assets/img1.jpg";
import project2 from "@assets/img1.jpg";
import project3 from "@assets/img1.jpg";
import project4 from "@assets/img1.jpg";
import project5 from "@assets/img1.jpg";
import project6 from "@assets/img1.jpg";

import fb from "@assets/fb.png";
import ig from "@assets/ig.png";

export default function ProjectsPage() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const projects = [
    {
      id: "modelowanie-ust",
      title: "Modelowanie ust",
      image: project1,
      desc: "Efekty zabiegu modelowania ust z naciskiem na zachowanie harmonii rysów twarzy, poprawę proporcji oraz estetyczny, naturalny rezultat.",
    },
    {
      id: "wolumetria",
      title: "Wolumetria",
      image: project2,
      desc: "Przykładowe realizacje zabiegu wolumetrii, którego celem jest odbudowa objętości twarzy, poprawa owalu i przywrócenie bardziej świeżego wyglądu.",
    },
    {
      id: "natural-v-lift",
      title: "Natural V-lift",
      image: project3,
      desc: "Zabieg ukierunkowany na subtelne uniesienie rysów twarzy i przywrócenie konturu młodości z zachowaniem naturalnego efektu końcowego.",
    },
    {
      id: "stymulatory-tkankowe",
      title: "Stymulatory tkankowe",
      image: project4,
      desc: "Realizacje terapii wspierających poprawę napięcia, jakości oraz regeneracji skóry, dobieranych indywidualnie do potrzeb klientki.",
    },
    {
      id: "mezoterapia-mikroiglowa",
      title: "Mezoterapia mikroigłowa",
      image: project5,
      desc: "Efekty zabiegów skoncentrowanych na rewitalizacji skóry, poprawie jej kondycji, odświeżeniu i przywróceniu zdrowego wyglądu.",
    },
    {
      id: "radiofrekwencja-mikroiglowa",
      title: "Radiofrekwencja mikroigłowa",
      image: project6,
      desc: "Przykłady efektów terapii wspierającej ujędrnienie skóry, poprawę struktury oraz nowoczesną odnowę estetyczną.",
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero__content">
          <span className="section-label">Galeria</span>
          <h1>Realizacje wykonanych zabiegów i ich efekty</h1>
          <p>
            Zobacz wybrane efekty naszych zabiegów i poznaj estetykę pracy
            Manufaktury Urody. Każda realizacja to indywidualnie dobrana terapia
            dopasowana do potrzeb skóry i oczekiwanego rezultatu.
          </p>

          <div className="socialCol">
            <h3>
              Więcej rezultatów i inspiracji znajdziesz na naszych profilach w
              mediach społecznościowych
            </h3>

            <a
              href="https://www.instagram.com/manufaktura_urody_ankus/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <img src={ig} alt="Instagram" />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/ManufakturaAnkus/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <img src={fb} alt="Facebook" />
              Facebook
            </a>
          </div>
        </div>

        <div className="projects-hero__image">
          <img src={heroImg} alt="Galeria zabiegów Manufaktura Urody" />
        </div>
      </div>

      <div className="projects-list">
        {projects.map((item, index) => (
          <article
            className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
            id={item.id}
            key={item.id}
          >
            <div
              className="project-card__image"
              onClick={() => setActiveImage(item.image)}
            >
              <img src={item.image} alt={item.title} />
            </div>

            <div className="project-card__content">
              <span className="section-label">Realizacja</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox__close"
              type="button"
              aria-label="Zamknij podgląd"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>

            <img src={activeImage} alt="Podgląd zabiegu" />
          </div>
        </div>
      )}
    </section>
  );
}
