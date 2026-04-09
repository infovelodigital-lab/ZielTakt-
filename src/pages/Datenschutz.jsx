export default function Datenschutz() {
  return (
    <div className="bg-void min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <a href="/" className="text-neon text-sm hover:underline">← Zurück zur Startseite</a>
          <h1 className="font-heading font-bold text-titanium text-4xl tracking-tight mt-4">Datenschutzerklärung</h1>
          <p className="text-datagrey text-sm">Gemäß DSGVO / GDPR</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">1. Verantwortlicher</h2>
          <div className="text-datagrey text-sm space-y-1 leading-relaxed">
            <p>Veloxis Digital · Einzelunternehmen</p>
            <p>Konstanz, Baden-Württemberg, Deutschland</p>
            <p>E-Mail: <a href="mailto:info@veloxis-digital.com" className="text-neon hover:underline">info@veloxis-digital.com</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Anfrage über unser Kontaktformular oder per E-Mail mitteilen. Diese Daten (Name, E-Mail-Adresse, Nachrichteninhalt) werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">3. Rechtsgrundlage</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">4. Speicherdauer</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Ihre Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind. Bei Kontaktanfragen spätestens nach 90 Tagen, sofern keine vertragliche Beziehung entstanden ist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">5. Ihre Rechte</h2>
          <div className="text-datagrey text-sm leading-relaxed space-y-2">
            <p>Sie haben das Recht auf: Auskunft (Art. 15 DSGVO) · Berichtigung (Art. 16 DSGVO) · Löschung (Art. 17 DSGVO) · Einschränkung der Verarbeitung (Art. 18 DSGVO) · Datenübertragbarkeit (Art. 20 DSGVO) · Widerspruch (Art. 21 DSGVO).</p>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@veloxis-digital.com" className="text-neon hover:underline">info@veloxis-digital.com</a></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">6. Hosting & Cookies</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools Dritter. Das Hosting erfolgt über technische Dienstleister mit Serverstandort in der EU. Es werden technisch notwendige Daten (z. B. IP-Adresse, Zugriffszeitpunkt) temporär in Server-Logfiles gespeichert.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-titanium text-lg">7. Beschwerderecht</h2>
          <p className="text-datagrey text-sm leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW).
          </p>
        </section>

        <div className="pt-8 border-t border-border">
          <p className="text-datagrey/40 text-xs">Stand: {new Date().getFullYear()} · Veloxis Digital · Konstanz, Deutschland</p>
        </div>
      </div>
    </div>
  );
}