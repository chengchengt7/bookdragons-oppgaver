export default function EventCard() {
  return (
    <>
      <div className="calendar-icon" aria-label="29. november">
        <span className="calendar-icon-month">Nov</span>
        <span className="calendar-icon-day">29</span>
      </div>
      <div className="stack stack-small">
        <h3 className="eyebrow-heading">Foredrag av Frode Øverli</h3>
        <p>
          Kongen av norske tegneserier kommer for å snakke om Pondus, karrieren som tegner og naturligvis fotball!
        </p>
        <p className="future-events-list-info">1800 — 2000. Inngang: 200,-</p>
      </div>
    </>
  )
}