import usePageMeta from '@/hooks/usePageMeta';

export default function Datenschutz() {
  usePageMeta({
    title: 'Datenschutzerklärung – ZielTakt',
    description: 'Datenschutzerklärung von ZielTakt: welche Daten wir erheben, wofür und welche Rechte Sie haben.',
    path: '/datenschutz',
  });

  return (
    <main className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Datenschutzerklärung</h1>
          <p className="text-datagrey text-sm">Gemäß DSGVO / GDPR</p>
        </div>

        {/* Platzhalter-Hinweis */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-2">
          <p className="font-heading font-semibold text-amber-400 text-sm">⚠ Platzhalter-Text</p>
          <p className="text-datagrey text-sm leading-relaxed">
            Dies ist eine Platzhalter-Datenschutzerklärung. Bitte vor Veröffentlichung durch geprüften, rechtlich korrekten Text ersetzen – idealerweise von einer Fachperson geprüft. Passen Sie Hosting-Anbieter, Cookies und Verfahren besonders auf Ihre tatsächliche Nutzung an.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">1. Verantwortlicher</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p>[Vorname Nachname]</p>
            <p>ZielTakt · Einzelunternehmen</p>
            <p>[Straße, PLZ Ort]</p>
            <p>E-Mail: <a href="mailto:info@zieltakt.de" className="text-neon hover:underline">info@zieltakt.de</a></p>
            <p>Telefon: <a href="tel:+41772774149" className="text-neon hover:underline">+41 77 277 41 49</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen einer Anfrage über unser Kontaktformular, per E-Mail, WhatsApp oder telefonisch mitteilen. Diese Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt) werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nur, soweit dies für die technische Übermittlung erforderlich ist (siehe Abschnitt 3 und 7), und nicht zu Werbezwecken.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">3. Kontaktformular (Web3Forms)</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-3">
            <p>
              Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden Ihre Angaben (Name, E-Mail-Adresse, optional Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p>
              Für die technische Übermittlung der Formulardaten per E-Mail nutzen wir den Dienst Web3Forms (
              <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">web3forms.com</a>
              ). Ihre Eingaben werden dabei an die Server von Web3Forms übertragen und von dort an uns weitergeleitet. [Anbieter, Anschrift, Serverstandort und ggf. Auftragsverarbeitungsvertrag laut Web3Forms-Datenschutzerklärung ergänzen.]
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">4. Rechtsgrundlage</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Soweit wir für Verarbeitungsvorgänge eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrags dient Art. 6 Abs. 1 lit. b DSGVO als Grundlage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">5. Speicherdauer</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Ihre Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind. Bei Kontaktanfragen spätestens nach 90 Tagen, sofern keine vertragliche Beziehung entstanden ist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">6. Cookies und lokale Speicherung</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Website setzt keine Tracking-, Analyse- oder Werbe-Cookies. Lediglich Ihre Auswahl im Hinweisbanner wird lokal in Ihrem Browser (localStorage) gespeichert, damit der Hinweis nicht bei jedem Besuch erneut erscheint. Diese Information wird nicht an uns übertragen und kann jederzeit über die Browsereinstellungen gelöscht werden.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">7. Hosting-Anbieter</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Website wird bei einem externen Hosting-Anbieter gehostet (Platzhalter – bitte Anbieter und Serverstandort eintragen). Beim Aufruf der Website werden technisch notwendige Daten (z. B. IP-Adresse, Zugriffszeitpunkt) temporär in Server-Logfiles gespeichert. Die Verarbeitung erfolgt im Rahmen der notwendigen technischen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">8. Schriftarten</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Die auf dieser Website verwendeten Schriftarten werden lokal von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google oder anderen Drittanbietern statt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">9. Links zu WhatsApp und Instagram</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Unsere Website enthält Links zu WhatsApp und Instagram (beide Meta Platforms Ireland Ltd.). Es handelt sich um einfache Links – Daten werden erst übertragen, wenn Sie einen dieser Links anklicken. Ab dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">10. Ihre Rechte</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-2">
            <p>Sie haben das Recht auf: Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art. 18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch (Art. 21 DSGVO).</p>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@zieltakt.de" className="text-neon hover:underline">info@zieltakt.de</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">11. Beschwerderecht</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist in der Regel der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW).
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-datagrey text-xs">Stand: {new Date().getFullYear()} · ZielTakt · Konstanz, Deutschland</p>
        </div>
      </div>
    </main>
  );
}
