<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über das Projekt</h1>
        <p>Hier findest du Hintergrundinformationen und FAQs zu unserem Anliegen und unseren Zielen</p>
      </div>
    </header>
    <div class="content">
      <section class="wrapper">
        <h2>Das Projekt</h2>
        <Accordeon :faqs="background" />
      </section>
      <section>
        <div class="wrapper">
          <h2>Ziel des Projektes</h2>
          <Accordeon :faqs="ziel" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Accordeon from '~/components/Accordeon.vue'

  // you can write markdown inside the body element

  export default {
    data () {
      return {
        background: [{
          title: 'Was ist die Agenda 2030?',
          id: 'background-agenda-2030',
          body: `
Die Agenda 2030 wurde im September 2015 auf einem Gipfel der Vereinten Nationen von allen Mitgliedsstaaten verabschiedet. Mit der Agenda 2030 für Nachhaltige Entwicklung hat sich die internationale Staatengemeinschaft dafür ausgesprochen, gemeinsam die globalen Herausforderungen zu lösen und den wirtschaftlichen Fortschritt im Einklang mit sozialer Gerechtigkeit im Rahmen der ökologischen Grenzen der Erde zu gestalten.

Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung (Sustainable Development Goals, SDGs). 193 Länder haben sich verpflichtet, die Agenda bis zum Jahr 2030 umzusetzen.          `
        },
        {
          title: 'Was sind die globalen nachhaltigen Entwicklungsziele (SDGs)?',
          id: 'background-sdgs',
          body: `
Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung, 169 Unterzielen (bzw. Zielvorgaben) und 231 Indikatoren. Der SDG-Katalog ist auf Basis eines globalen partizipativen Prozesses entwickelt worden. Die 17 SDGs berücksichtigen erstmals alle drei Dimensionen der Nachhaltigkeit – Soziales, Umwelt, Wirtschaft – gleichermaßen und ergänzen sie um wichtige „Spielregeln“ wie Partizipation, Frieden, Rechsstaaatlichkeit sowie Umsetzungsmechanismen. Ihnen sind fünf Kernbotschaften als handlungsleitende Prinzipien vorangestellt: Mensch, Planet, Wohlstand, Frieden und Partnerschaft. Im Englischen spricht man von den “5 Ps”: People, Planet, Prosperity, Peace, Partnership.          `
        },
        {
          title: 'Wer soll die Agenda 2030 umsetzen?',
          id: 'background-umsetzung',
          body: `
Die Agenda 2030 ist eine freiwillige Selbstverpflichtung der Regierungen aus 193 Ländern. Dazu  sollen alle beteiligten Länder den globalen SDG-Katalog in einen eigene Fahrpläne übersetzen. Zusätzlich gibt es Ziele und Vorgaben, die die Staatengemeinschaft gemeinsam oder über ihre internationalen Organisationen erreichen will.. Die Bundesregierung hat für die Umsetzung der Agenda 2030 die Deutsche Nachhaltigkeitsstrategie (DNS) angepasst, die schon seit 2002 besteht..

Die Vereinten Nationen (UN) spielen bei der Koordinierung der Agenda 2030 und der Weiterentwicklung des SDG-Indikatorenkatalogs eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler*innen und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen.          `
        }
        ],
        ziel: [{
          title: 'Was ist das Ziel von 2030Watch?',
          id: 'ziel-2030Watch',
          body: `
Die Vision von 2030Watch ist es, dass Deutschland die Nachhaltigkeitsziele ambitioniert umsetzt.

Um diese Vision zu verfolgen, zeichnet 2030Watch anhand von Indikatoren ein Bild, wie erfolgreich Deutschland die SDGs umsetzt. Indem 2030Watch offizielle Indikatoren der Deutschen Nachhaltigkeitsstrategie mit Indikatoren aus andere Quellen ergänzt, wollen wir
* zeigen, dass die Nachhaltigkeitsstrategie nicht zur Umsetzung der global verabschiedeten SDGs taugt, weil ihre Ziele nicht kongruent zu den SDGs formuliert wurden;
* eine kritische Sichtweise über den Stand der Umsetzung von Nachhaltigkeit in Deutschland anbieten,
* Handlungsfelder beleuchten; und
* die internationale Verantwortung Deutschlands als hochentwickeltes Industrieland hervorheben.
          `
        },
        {
          title: 'Wen wollen wir mit 2030Watch erreichen?',
          id: 'ziel-wen-erreichen',
          body: `
Wir wollen mit 2030Watch mehrere Zielgruppen erreichen: primär zivilgesellschaftliche Organisationen wie Vereine und Bürgerinitiativen, die zu SDG-Themen arbeiten und interessierte Bürgerinnen und Bürger. Darüber hinaus hoffen wir, auch Journalist*innen und Politiker*innen sowie Nichtregierungsorganisationen zu erreichen.          `
        },
        {
          title: 'Stellt 2030Watch die Umsetzung der Agenda 2030 in Deutschland objektiv dar?',
          id: 'ziel-2030Watch-objektiv',
          body: `
Grundsätzlich verstehen wir 2030Watch als ein politisches Projekt, das eine ambitionierte Umsetzung der Agenda 2030 fordert.

Wir sammeln ergänzende Fortschrittsmaßstäbe (Indikatoren), die bspw. von zivilgesellschaftlichen Organisationen erarbeiten wurden und vergleichen diese mit dem Nachhaltigkeitsverständnis der Bundesregierung bei der offiziellen Berichterstattung.

2030Watch ist nicht gedacht für wissenschaftliche Analysen beispielsweise zu den Wechselwirkungen verschiedener Politikbereiche.

Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag, Standpunktesammlung und Positionierung gedacht.          `
        },
        {
          title: 'Verfälscht 2030Watch damit eine objektive Berichterstattung?',
          id: 'ziel-objektive-berichterstattung',
          body: `
Die Agenda 2030 stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar (2015-2030). Viele Ziele und Unterziele der Agenda sind vage formuliert und bieten sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN-Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030Watch.

Auch die Festlegung eines Zielwertes je Indikator ist (soweit sie in den SDGs nicht genau festgelegt ist) oft eine politische Entscheidung, die nicht objektiv richtig oder falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht?
        },
        {
          title: 'Wie wird 2030Watch weiterentwickelt?',
          id: 'ziel-2030Watch-weiterentwicklung',
          body: `
Die Indikatorenauswahl von 2030Watch wird kontinuierlich überarbeitet. Außerdem überlegen wir, wie wir andere Features wie z.B. ein Mapping schon verbindlicher Abkommen zu den verschiedenen SDGs hinzufügen können. Wir freuen uns über euer Feedback hierzu.          `
        }]
      }
    },
    components: {
      Accordeon
    },
    head () {
      return {
        title: 'Über das Projekt | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Über das Projekt' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";
  .content {
    section {
      &:nth-child(even) {
        background: #fff;
      }
    }
  }
</style>
