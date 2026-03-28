import "./style.scss";

const references = [
  {
    id: 1,
    name: "Referencje - Miasto Strzegom",
    file: "/Ankus-Oferta.pdf",
  },
  {
    id: 2,
    name: "Referencje - Nadleśnictwo Świdnica",
    file: "/Ankus-Oferta.pdf",
  },
  {
    id: 3,
    name: "Referencje - Rewitalizacja parku",
    file: "/Ankus-Oferta.pdf",
  },
  {
    id: 4,
    name: "Referencje - Nawierzchnie granitowe",
    file: "/Ankus-Oferta.pdf",
  },
];

export default function ReferencesPage() {
  return (
    <section className="references-page">
      <section className="referencesHero">
        <div className="heroBox">
          <p className="eyebrow">Referencje BasGrys</p>
          <h1>Nasze Referencje</h1>
          <p className="lead">
            Poniżej znajdują się uzyskane przez nas referencje możliwe do
            pobranmia w formacie PDF.
          </p>
        </div>
      </section>

      <section className="referencesList">
        {references.map((item) => (
          <a
            key={item.id}
            className="pdfCard"
            href={item.file}
            download
            title={`Pobierz: ${item.name}`}
          >
            <div className="pdfPreview">
              <iframe
                src={`${item.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={item.name}
              />
            </div>

            <div className="pdfContent">
              <h2>{item.name}</h2>
              <span className="downloadBtn">Pobierz PDF</span>
            </div>
          </a>
        ))}
      </section>
    </section>
  );
}
