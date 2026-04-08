import "./style.scss";
import { Link } from "react-router-dom";

import heroImg from "@assets/img2.jpg";
import treatment1 from "@assets/img2.jpg";
import treatment2 from "@assets/img2.jpg";
import treatment3 from "@assets/img2.jpg";
import treatment4 from "@assets/img2.jpg";
import treatment5 from "@assets/img2.jpg";
import treatment6 from "@assets/img2.jpg";
import treatment7 from "@assets/img2.jpg";
import treatment8 from "@assets/img2.jpg";

export default function OfertPage() {
  const treatments = [
    {
      id: "wolumetria",
      title: "Wolumetria",
      image: treatment1,
      desc: "Zabieg ukierunkowany na poprawę proporcji twarzy, odbudowę objętości i podkreślenie owalu. Wolumetria pomaga przywrócić harmonijne rysy, poprawić kontur twarzy oraz uzyskać świeższy i bardziej wypoczęty wygląd.",
    },
    {
      id: "natural-v-lift",
      title: "Natural V-lift",
      image: treatment2,
      desc: "Terapia mająca na celu przywracanie konturu młodości i subtelne uniesienie rysów twarzy. To propozycja dla osób, które chcą uzyskać naturalny efekt odmłodzenia bez przerysowanego rezultatu.",
    },
    {
      id: "modelowanie-ust",
      title: "Modelowanie ust",
      image: treatment3,
      desc: "Zabieg pozwalający podkreślić kształt ust, poprawić ich proporcje oraz uzyskać estetyczny, harmonijny efekt. Modelowanie ust wykonywane jest z naciskiem na naturalny wygląd i dopasowanie do rysów twarzy.",
    },
    {
      id: "stymulatory-tkankowe",
      title: "Stymulatory tkankowe",
      image: treatment4,
      desc: "Zabiegi wspierające naturalne procesy regeneracji skóry, poprawę jej jakości, jędrności i napięcia. To doskonałe rozwiązanie dla osób, które chcą zadbać o długofalową kondycję skóry i efekt świeżości.",
    },
    {
      id: "radiofrekwencja-mikroiglowa",
      title: "Radiofrekwencja mikroigłowa",
      image: treatment5,
      desc: "Nowoczesna terapia łącząca działanie mikronakłuć i energii fal radiowych. Wspiera ujędrnienie skóry, poprawę jej struktury oraz proces odnowy, pomagając uzyskać bardziej napięty i wygładzony wygląd.",
    },
    {
      id: "karboksyterapia",
      title: "Karboksyterapia",
      image: treatment6,
      desc: "Zabieg wspierający regenerację i rewitalizację skóry. Pomaga poprawić jej kondycję, mikrokrążenie i ogólny wygląd, dlatego często wybierany jest jako element kompleksowej pielęgnacji estetycznej.",
    },
    {
      id: "mezoterapia-mikroiglowa",
      title: "Mezoterapia mikroigłowa",
      image: treatment7,
      desc: "Terapia mająca na celu odświeżenie, rewitalizację i poprawę jakości skóry. Zabieg wspiera naturalne procesy odnowy, poprawia wygląd cery i pomaga odzyskać jej zdrowy blask.",
    },
    {
      id: "terapie-laczone",
      title: "Terapie łączone",
      image: treatment8,
      desc: "Indywidualnie dobrane połączenia zabiegów, które pozwalają osiągnąć możliwie najlepsze efekty. Tego typu podejście umożliwia dopasowanie terapii do potrzeb skóry, oczekiwań i planowanych rezultatów.",
    },
  ];

  return (
    <section className="ofert-page">
      <div className="offer-hero">
        <div className="offer-hero__content">
          <span className="section-label">Zabiegi</span>
          <h1>Autorskie terapie zabiegowe dopasowane do Twoich potrzeb</h1>
          <p>
            W Manufakturze Urody stawiamy na świadomie dobrane rozwiązania,
            które pomagają podkreślić naturalne piękno, poprawić kondycję skóry
            i zadbać o harmonijny, estetyczny efekt.
          </p>
          <p>
            Nasza oferta obejmuje nowoczesne zabiegi wykonywane z dbałością o
            komfort, bezpieczeństwo i indywidualne podejście do każdej osoby.
          </p>

          <div className="offer-hero__buttons">
            <Link to="/kontakt" className="btn btn--primary">
              Umów wizytę
            </Link>
            <a href="#lista-zabiegow" className="btn btn--secondary">
              Zobacz listę zabiegów
            </a>
          </div>
        </div>

        <div className="offer-hero__image">
          <img src={heroImg} alt="Zabiegi Manufaktura Urody" />
        </div>
      </div>

      <div className="offer-intro">
        <div className="offer-intro__box">
          <span className="section-label">Oferta</span>
          <h2>Nowoczesna estetyka i świadoma pielęgnacja</h2>
          <p>
            Specjalizujemy się w zabiegach takich jak wolumetria, Natural
            V-lift, modelowanie ust, stymulatory tkankowe, radiofrekwencja
            mikroigłowa, karboksyterapia, mezoterapia mikroigłowa oraz terapie
            łączone.
          </p>
        </div>
      </div>

      <div className="offer-list" id="lista-zabiegow">
        {treatments.map((item, index) => (
          <article
            className={`offer-card ${index % 2 !== 0 ? "reverse" : ""}`}
            id={item.id}
            key={item.id}
          >
            <div className="offer-card__image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="offer-card__content">
              <span className="section-label">Zabieg</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <Link to="/kontakt" className="offer-card__link">
                Umów konsultację
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
