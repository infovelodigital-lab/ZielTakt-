export default function Impressum() {
  return (
    <div className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Impressum</h1>
          <p className="text-datagrey text-sm">Angaben gemäß § 5 TMG</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Diensteanbieter</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p className="font-medium text-titanium">Veloxis Digital</p>
            <p>Einzelunternehmen · Digitalagentur</p>
            <p>Konstanz, Baden-Württemberg</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Kontakt</h2>
          <div className="text-datagrey text-sm space-y-1">
            <p>E-Mail: <a href="mailto:info@veloxis-digital.com" className="text-neon hover:underline">info@veloxis-digital.com</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Tätigkeitsbeschreibung</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Veloxis Digital ist eine Digitalagentur mit Spezialisierung auf Webdesign & -entwicklung, KI-gestützte Automatisierungssysteme sowie digitales Branding für Unternehmen im DACH-Raum. Das Unternehmen wird als Einzelunternehmen geführt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Umsatzsteuer</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung). Eine Umsatzsteuer-Identifikationsnummer liegt derzeit nicht vor.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Haftungsausschluss</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-3">
            <p><strong className="text-titanium/80">Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            <p><strong className="text-titanium/80">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
            <p><strong className="text-titanium/80">Urheberrecht:</strong> Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Online-Streitbeilegung</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">
              https://ec.europa.eu/consumers/odr
            </a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-datagrey/40 text-xs">Stand: {new Date().getFullYear()} · Veloxis Digital · Konstanz, Deutschland</p>
        </div>
      </div>
    </div>
  );
}