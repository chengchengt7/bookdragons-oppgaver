export default function BookPick() {
  return (
    <div className="container grid large-gap two-plus-one-columns recommendation-section product-on-right">
      <div className="recommendation-section-text stack">
        <h3 className="section-subheading">Wenche har nettopp lest Wallace the Brave for første gang!</h3>

        <p>
          Jeg plukket med meg denne boka på vei hjem fra jobb en dag, da den virket som en bok sønnen min kunne fatte interesse for. Lite visste jeg at det var <em>jeg</em> som kom til å sitte og gapskratte til sent på kveld!
        </p>
        
        <blockquote className="big-quote">
          Jeg har aldri ledd så godt som av denne boka, en virkelig perle av moderne tegneserier!
        </blockquote>

        <p>
          Wallace the Brave er en fantastisk tegneserie, midt i blinken om du liker Tommy og Tigern og setter pris på varm, lun humor og en artig strek. Jeg tror aldri jeg har ledd så godt som av denne boka. En virkelig perle av moderne tegneserier, og vel verdt tiden for alle som er glade i stripeserier!
        </p>
      </div>
      <div className="recommendation-section-product box box-white book-card">
        <img className="book-card-cover" src="https://publishingassets.andrewsmcmeel.com/productimages/9781524851774_feature.jpg" alt="" width="160" height="200" />

        <div className="stack">
          <h3 className="eyebrow-heading book-card-title">
            <a href="#">Snug Harbor Stories: a Wallace the Brave Collection!</a>
          </h3>

          <p className="book-card-author">
            Skrevet av Will Henry
          </p>

          <p className="book-card-tags cluster">
            <span className="tag">Humor</span>
            <span className="tag">Tegneserier</span>
            <span className="tag">Barndom</span>
          </p>
        </div>
        
        <a className="button block-button" href="#">Kjøp (399,-)</a>
      </div>
    </div>
  )
}