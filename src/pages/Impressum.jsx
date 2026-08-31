import usePageMeta from '@/hooks/usePageMeta';

export default function Impressum() {
  usePageMeta({
    title: 'Impressum – Vigorix Digital',
    description:
      'Impressum und Anbieterkennzeichnung von Vigorix Digital gemäß § 5 TMG.',
  });

  return (
    <div className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Impressum</h1>
          <p className="text-datagrey text-sm">Angaben gemäß § 5 TMG</p>
        </div>

        {/* Platzhalter-Hinweis */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
          <p className="font-heading font-semibold text-amber-400 text-sm">⚠ Platzhalter – vor Veröffentlichung ausfüllen</p>
          <p className="text-datagrey text-sm leading-relaxed">
            Die Felder in eckigen Klammern müssen durch Ihre echten Angaben ersetzt werden. Hinweis:
            [ANSCHRIFT] muss eine real zustellbare Straße und Hausnummer sein — ein reines Postfach
            reicht rechtlich nicht aus.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Diensteanbieter</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p className="font-medium text-titanium">[VOLLSTÄNDIGER NAME]</p>
            <p>Vigorix Digital · Einzelunternehmen</p>
            <p>[ANSCHRIFT]</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Kontakt</h2>
          <div className="text-datagrey text-sm space-y-1">
            <p>Telefon: [TELEFON]</p>
            <p>E-Mail: [E-MAIL]</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Umsatzsteuer</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            [USt-ID ODER HINWEIS AUF §19 USTG KLEINUNTERNEHMERREGELUNG]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Verantwortlich für den Inhalt</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: [VERANTWORTLICH FÜR DEN INHALT]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Haftungsausschluss</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-3">
            <p><strong className="text-titanium/80">Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen.</p>
            <p><strong className="text-titanium/80">Haftung für Links:</strong> Diese Website enthält ggf. Verweise auf externe Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
            <p><strong className="text-titanium/80">Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung.</p>
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
          <p className="text-datagrey/40 text-xs">Stand: {new Date().getFullYear()} · Vigorix Digital · Konstanz, Deutschland</p>
        </div>
      </div>
    </div>
  );
}