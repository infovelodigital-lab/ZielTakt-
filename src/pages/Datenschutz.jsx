import usePageMeta from '@/hooks/usePageMeta';

export default function Datenschutz() {
  usePageMeta({
    title: 'Datenschutzerklärung – Vigorix Digital',
    description:
      'Datenschutzerklärung von Vigorix Digital: Kontaktformular, Hosting, Cookies und Ihre Rechte nach DSGVO.',
  });

  return (
    <div className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Datenschutzerklärung</h1>
          <p className="text-datagrey text-sm">Gemäß DSGVO / GDPR</p>
        </div>

        {/* Platzhalter-Hinweis */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
          <p className="font-heading font-semibold text-amber-400 text-sm">⚠ Platzhalter – vor Veröffentlichung prüfen</p>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Datenschutzerklärung verwendet Platzhalter in eckigen Klammern. Bitte vor
            Veröffentlichung durch geprüften, rechtlich korrekten Text ersetzen lassen –
            insbesondere Hosting-Anbieter, Cookies und Verfahren an die tatsächliche Nutzung anpassen.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">1. Verantwortlicher</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p>[VOLLSTÄNDIGER NAME]</p>
            <p>Vigorix Digital · Einzelunternehmen</p>
            <p>[ANSCHRIFT]</p>
            <p>E-Mail: [E-MAIL]</p>
            <p>Telefon: [TELEFON]</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">2. Kontaktformular-Daten</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch eine Nachricht senden,
            werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer, Betreff und
            Nachrichteninhalt) zwecks Bearbeitung der Anfrage gespeichert. Eine Weitergabe an Dritte
            erfolgt nicht. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die Anfrage nicht
            mehr benötigt werden, spätestens nach 90 Tagen, sofern keine vertragliche Beziehung
            entstanden ist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">3. Hosting-Anbieter</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Website wird über Cloudflare und die Base44-Plattform gehostet. Beim Aufruf der
            Website werden technisch notwendige Daten (z. B. IP-Adresse, Zugriffszeitpunkt) temporär
            in Server-Logfiles gespeichert. Die Verarbeitung erfolgt im Rahmen der notwendigen
            technischen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Bitte ergänzen Sie hier die
            genauen Angaben und Serverstandorte Ihres Hosting-Anbieters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">4. Cookies & Analytics</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
            der Seite erforderlich sind. Es erfolgt kein Tracking, keine Analyse-Tools und keine
            Werbe-Cookies Dritter. Über den Cookie-Hinweis können Sie die Nutzung technisch
            notwendiger Cookies akzeptieren oder ablehnen. Sofern Analytics- oder Tracking-Tools
            künftig eingesetzt werden, wird diese Datenschutzerklärung entsprechend angepasst und eine
            Einwilligung eingeholt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">5. Rechtsgrundlage</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Soweit wir für Verarbeitungsvorgänge eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a
            DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrags dient Art. 6
            Abs. 1 lit. b DSGVO als Grundlage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">6. Rechte der betroffenen Person</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-2">
            <p>
              Sie haben das Recht auf: Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) ·
              Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art. 18 DSGVO) ·
              Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch (Art. 21 DSGVO).
            </p>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <span className="text-neon">[E-MAIL]</span>
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">7. Beschwerderecht</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
            ist in der Regel der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg (LfDI BW).
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-datagrey/40 text-xs">Stand: {new Date().getFullYear()} · Vigorix Digital · Konstanz, Deutschland</p>
        </div>
      </div>
    </div>
  );
}