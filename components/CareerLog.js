import experience from "../data/experience.json";
import { formatMonth } from "../lib/dates";

export default function CareerLog() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">Departures · Career Log</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          A chronological log of where I&rsquo;ve worked, most recent first.
        </p>

        <div className="board__head" aria-hidden="true">
          <span>Code</span>
          <span>Role</span>
          <span>Location</span>
          <span>Dates</span>
          <span>Status</span>
        </div>

        <ul className="board__list">
          {experience.map((job) => {
            const isCurrent = job.status === "current";

            return (
              <li
                key={job.code}
                className={`board__row ${isCurrent ? "board__row--current" : "board__row--past"}`}
              >
                <span className="board__code">{job.code}</span>

                <div className="board__summary">
                  <h3 className="board__role">{job.role}</h3>
                  <p className="board__org">{job.org}</p>
                </div>

                <span className="board__location">{job.location}</span>

                <span className="board__dates">
                  {formatMonth(job.start)} – {formatMonth(job.end)}
                </span>

                <span className="board__status">
                  <span className="board__dot" aria-hidden="true" />
                  {isCurrent ? "Active" : "Former Employee"}
                </span>

                <ul className="board__bullets">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}