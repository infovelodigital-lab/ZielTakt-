import usePageMeta from '@/hooks/usePageMeta';

export default function Impressum() {
  usePageMeta({
    title: 'Impressum – ZielTakt',
    description: 'Impressum und Anbieterkennzeichnung von ZielTakt, Webdesign Studio in Konstanz.',
    path: '/impressum',
  });

  return (
    <main className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Impressum</h1>
          <p className="text-datagrey text-sm">Angaben gemäß § 5 DDG</p>
        </div>

        {/* Platzhalter-Hinweis */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
          <p className="font-heading font-semibold text-amber-400 text-sm">⚠ Platzhalter-Text</p>
          <p className="text-datagrey text-sm leading-relaxed">
            Dies ist ein Platzhalter-Impressum. Bitte vor Veröffentlichung durch geprüften, korrekten rechtlichen Text ersetzen. Die hier gezeigten Felder (Name, Anschrift, Kontakt, Kleingewerbe) müssen mit Ihren echten Daten ausgefüllt werden.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Diensteanbieter / Anbieterkennzeichnung</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p className="font-medium text-titanium">[Vorname Nachname]</p>
            <p>ZielTakt · Einzelunternehmen</p>
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ Ort]</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Kontakt</h2>
          <div className="text-datagrey text-sm space-y-1">
            <p>E-Mail: <a href="mailto:info@zieltakt.de" className="text-neon hover:underline">info@zieltakt.de</a></p>
            <p>Telefon: <a href="tel:+41772774149" className="text-neon hover:underline">+41 77 277 41 49</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Vertretungsberechtigte Person</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            [Vorname Nachname], Inhaber
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            [Vorname Nachname], Anschrift wie oben
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Umsatzsteuer</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung). Umsatzsteuer-Identifikationsnummer: [sofern vorhanden angeben]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">Registrierung / Kleingewerbe</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Kleingewerbeanmeldung erfolgt beim zuständigen Gewerbeamt: [Ort]. Steuernummer: [sofern relevant].
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
          <h2 className="font-heading font-semibold text-titanium text-lg">Verbraucherstreitbeilegung</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-datagrey text-xs">Stand: {new Date().getFullYear()} · ZielTakt · Konstanz, Deutschland</p>
        </div>
      </div>
    </main>
  );
}