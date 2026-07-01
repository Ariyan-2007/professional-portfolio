import publications from "../data/publications.json";
import { formatFullDate } from "../lib/dates";

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <p className="eyebrow">Research</p>

        <h2 className="section-title">Publications</h2>

        <p className="section-sub">
          Papers I&rsquo;ve contributed to during university and my professional
          career.
        </p>

        <div className="pubs">
          {publications.map((pub, i) => {
            const content = (
              <>
                <span className="pub__seq">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="pub__content">
                  <h3 className="pub__title">{pub.title}</h3>

                  <p className="pub__venue">
                    {pub.venue} · {formatFullDate(pub.date)}
                  </p>

                  <p className="pub__desc">{pub.description}</p>
                </div>
              </>
            );

            return pub.url ? (
              <a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pub pub--link"
              >
                {content}
              </a>
            ) : (
              <div className="pub" key={pub.title}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}