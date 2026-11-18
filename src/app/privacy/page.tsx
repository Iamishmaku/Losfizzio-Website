import type { Metadata } from "next";
import { fullAddress, site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  description: `Informativa privacy e cookie del sito di ${site.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Informativa</p>
        <h1>Privacy e cookie</h1>
        <p className={styles.note}>
          Testo base da far verificare a un consulente prima della pubblicazione definitiva.
        </p>

        <h2>Titolare del trattamento</h2>
        <p>
          {site.fullName}, {fullAddress}. Telefono: {site.contacts.phoneDisplay}
          {site.contacts.email ? `, e-mail: ${site.contacts.email}` : ""}.
        </p>

        <h2>Dati raccolti da questo sito</h2>
        <p>
          Questo sito è statico e non salva dati personali sui propri server. Il modulo &quot;Prenota o
          ordina&quot; prepara soltanto un messaggio sul tuo dispositivo: i dati vengono inviati solo se
          decidi tu di trasmetterli (per esempio tramite WhatsApp, e-mail o telefono), secondo le condizioni
          del servizio che scegli.
        </p>

        <h2>Cookie</h2>
        <p>
          Il sito non usa cookie di profilazione né strumenti di analisi. La mappa di Google Maps viene
          caricata solo se fai clic su &quot;Mostra la mappa&quot;: in quel caso Google può impostare propri
          cookie, secondo la sua informativa (policies.google.com/privacy).
        </p>

        <h2>Hosting</h2>
        <p>
          Il sito è ospitato da Vercel Inc., che può registrare dati tecnici (come l&apos;indirizzo IP) nei
          log del server per motivi di sicurezza e funzionamento.
        </p>

        <h2>I tuoi diritti</h2>
        <p>
          Puoi chiedere in ogni momento l&apos;accesso, la rettifica o la cancellazione dei tuoi dati
          contattando il titolare ai recapiti indicati sopra, e puoi proporre reclamo al Garante per la
          protezione dei dati personali.
        </p>
      </div>
    </article>
  );
}
