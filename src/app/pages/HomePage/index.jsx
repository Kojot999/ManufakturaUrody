import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import heroImg from "@assets/hero2.jpg";
import gallery1 from "@assets/img1.jpg";
import gallery2 from "@assets/img1.jpg";
import gallery3 from "@assets/img1.jpg";
import gallery4 from "@assets/img1.jpg";
import gallery5 from "@assets/img1.jpg";
import gallery6 from "@assets/img1.jpg";

export default function HomePage() {
  const treatments = [
    {
      title: "Wolumetria",
      desc: "Modelowanie owalu twarzy i przywracanie harmonijnych proporcji.",
      link: "/zabiegi#wolumetria",
    },
    {
      title: "Natural V-lift",
      desc: "Przywracanie konturu młodości i subtelne uniesienie rysów twarzy.",
      link: "/zabiegi#natural-v-lift",
    },
    {
      title: "Modelowanie ust",
      desc: "Podkreślenie kształtu ust, poprawa proporcji i naturalny efekt.",
      link: "/zabiegi#modelowanie-ust",
    },
    {
      title: "Stymulatory tkankowe",
      desc: "Poprawa jakości skóry, napięcia i naturalnej regeneracji.",
      link: "/zabiegi#stymulatory-tkankowe",
    },
    {
      title: "Radiofrekwencja mikroigłowa",
      desc: "Nowoczesna terapia wspierająca ujędrnienie i odnowę skóry.",
      link: "/zabiegi#radiofrekwencja-mikroiglowa",
    },
    {
      title: "Karboksyterapia",
      desc: "Wsparcie regeneracji skóry i poprawy jej kondycji.",
      link: "/zabiegi#karboksyterapia",
    },
    {
      title: "Mezoterapia mikroigłowa",
      desc: "Odświeżenie, rewitalizacja i poprawa wyglądu skóry.",
      link: "/zabiegi#mezoterapia-mikroiglowa",
    },
    {
      title: "Terapie łączone",
      desc: "Indywidualnie dobrane połączenia zabiegów dla najlepszych efektów.",
      link: "/zabiegi#terapie-laczone",
    },
  ];

  const gallery = [
    {
      title: "Modelowanie ust",
      image: gallery1,
      link: "/galeria#modelowanie-ust",
    },
    {
      title: "Wolumetria",
      image: gallery2,
      link: "/galeria#wolumetria",
    },
    {
      title: "Natural V-lift",
      image: gallery3,
      link: "/galeria#natural-v-lift",
    },
    {
      title: "Stymulatory tkankowe",
      image: gallery4,
      link: "/galeria#stymulatory-tkankowe",
    },
    {
      title: "Mezoterapia mikroigłowa",
      image: gallery5,
      link: "/galeria#mezoterapia-mikroiglowa",
    },
    {
      title: "Radiofrekwencja mikroigłowa",
      image: gallery6,
      link: "/galeria#radiofrekwencja-mikroiglowa",
    },
  ];

  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero__content">
          <span className="hero__subtitle">Manufaktura Urody</span>
          <h1>Uroda w nowym wydaniu</h1>
          <p>
            W Manufakturze Urody stawiamy na świadomie dobrane terapie
            zabiegowe, które pomagają podkreślić naturalne piękno, poprawić
            kondycję skóry i przywrócić harmonijne proporcje twarzy.
          </p>
          <p>
            Pracujemy z wykorzystaniem nowoczesnych metod, dbając o
            bezpieczeństwo, komfort oraz naturalny efekt końcowy.
          </p>

          <div className="hero__buttons">
            <Link to="/kontakt" className="btn btn--primary">
              Umów wizytę
            </Link>
            <Link to="/zabiegi" className="btn btn--secondary">
              Zobacz zabiegi
            </Link>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImg} alt="Manufaktura Urody" />
        </div>
      </div>

      <div className="treatments">
        <div className="section-heading">
          <span className="section-label">Zabiegi</span>
          <h2>Poznaj nasze autorskie terapie zabiegowe</h2>
          <p>Kliknij wybrany zabieg, aby przejść do szczegółów oferty.</p>
        </div>

        <div className="treatments__grid">
          {treatments.map((item) => (
            <Link to={item.link} className="treatment-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>Zobacz więcej</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="gallery">
        <div className="section-heading">
          <span className="section-label">Realizacje</span>
          <h2>Efekty wybranych zabiegów</h2>
          <p>Zobacz realizacje i poznaj estetykę naszej pracy.</p>
        </div>

        <div className="gallery__grid">
          {gallery.map((item, index) => (
            <Link to={item.link} className="gallery__item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="gallery__overlay">
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="gallery__action">
          <Link to="/galeria" className="btn btn--primary">
            Zobacz galerię
          </Link>
        </div>
      </div>
    </section>
  );
}
