import { useMetaTags } from '../hooks/useMetaTags';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function AlgemeneVoorwaardenPage() {
  useMetaTags({
    title: 'Algemene Voorwaarden - Nodely',
    description: 'Bekijk de algemene voorwaarden en contractuele overeenkomsten van Nodely.',
    keywords: 'algemene voorwaarden, terms, voorwaarden, contract',
    ogUrl: 'https://nodely.nl/algemene-voorwaarden'
  });

  return (
    <div className="min-h-screen bg-white">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#FF6200] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Terug naar home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6200]/20 border border-[#FF6200]/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#FF6200]" />
              <span className="text-sm text-white font-semibold">JURIDISCHE VOORWAARDEN</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-white/80">
              Laatst bijgewerkt: 19 januari 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Definities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">1. Definities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Nodely:</strong> Nodely, gevestigd te Eindhoven, Nederland, ingeschreven bij de Kamer van Koophandel</li>
                <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met Nodely</li>
                <li><strong>Diensten:</strong> alle diensten die door Nodely worden geleverd, waaronder AI-ontwikkeling, automatiseringsoplossingen, softwareontwikkeling en consultancy</li>
                <li><strong>Overeenkomst:</strong> elke afspraak tussen Nodely en de Klant met betrekking tot de levering van Diensten</li>
                <li><strong>Partijen:</strong> Nodely en de Klant samen</li>
              </ul>
            </div>

            {/* Toepasselijkheid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">2. Toepasselijkheid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten 
                tussen Nodely en de Klant. Afwijkingen van deze voorwaarden zijn slechts geldig indien deze 
                uitdrukkelijk schriftelijk zijn overeengekomen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                De toepasselijkheid van eventuele inkoop- of andere voorwaarden van de Klant wordt uitdrukkelijk 
                van de hand gewezen.
              </p>
            </div>

            {/* Aanbiedingen en offertes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">3. Aanbiedingen en offertes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alle aanbiedingen en offertes van Nodely zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. 
                Een offerte is maximaal 30 dagen geldig, tenzij anders aangegeven.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nodely kan niet aan haar offertes worden gehouden indien de Klant redelijkerwijs kan begrijpen 
                dat de offertes, dan wel een onderdeel daarvan, een kennelijke vergissing of verschrijving bevat.
              </p>
            </div>

            {/* Totstandkoming overeenkomst */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">4. Totstandkoming van de overeenkomst</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De overeenkomst komt tot stand op het moment dat de Klant de offerte van Nodely schriftelijk 
                (inclusief per e-mail) heeft geaccepteerd, of vanaf het moment dat Nodely met uitvoering van 
                de opdracht is begonnen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nodely behoudt zich het recht voor een opdracht te weigeren zonder opgaaf van redenen.
              </p>
            </div>

            {/* Uitvoering diensten */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">5. Uitvoering van de diensten</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nodely zal de Diensten naar beste inzicht en vermogen en overeenkomstig de eisen van goed 
                vakmanschap uitvoeren. Nodely heeft het recht om bepaalde werkzaamheden te laten verrichten 
                door derden.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                De uitvoering van de Diensten geschiedt in onderling overleg en na schriftelijk akkoord en 
                betaling van het eventueel afgesproken voorschot door de Klant.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vermelde termijnen zijn indicatief en gelden niet als fatale termijn, tenzij uitdrukkelijk 
                anders is overeengekomen. Bij overschrijding van een termijn dient de Klant Nodely daarom 
                schriftelijk in gebreke te stellen.
              </p>
            </div>

            {/* Medewerking klant */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">6. Medewerking van de klant</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De Klant zorgt ervoor dat alle gegevens en informatie waarvan Nodely aangeeft dat deze 
                noodzakelijk zijn of waarvan de Klant redelijkerwijs behoort te begrijpen dat deze noodzakelijk 
                zijn voor het uitvoeren van de overeenkomst, tijdig aan Nodely worden verstrekt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Indien de voor de uitvoering van de overeenkomst benodigde gegevens niet tijdig aan Nodely 
                zijn verstrekt, heeft Nodely het recht de uitvoering van de overeenkomst op te schorten en/of 
                de uit de vertraging voortvloeiende extra kosten in rekening te brengen.
              </p>
            </div>

            {/* Prijzen en betaling */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">7. Prijzen en betaling</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alle prijzen zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders vermeld.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Betaling dient te geschieden binnen 30 dagen na factuurdatum, tenzij schriftelijk anders 
                overeengekomen. Bij overschrijding van de betalingstermijn is de Klant van rechtswege in 
                verzuim en is Nodely gerechtigd wettelijke (handels)rente in rekening te brengen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bij voortzetting van het verzuim heeft Nodely het recht de vordering uit handen te geven. 
                Alle (buiten)gerechtelijke kosten komen voor rekening van de Klant.
              </p>
            </div>

            {/* Intellectueel eigendom */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">8. Intellectueel eigendom</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alle intellectuele eigendomsrechten met betrekking tot de door Nodely ontwikkelde of ter 
                beschikking gestelde software, AI-modellen, code, algoritmes, documenten, adviezen, 
                ontwerpen en andere materialen berusten uitsluitend bij Nodely of haar licentiegevers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                De Klant verkrijgt uitsluitend de gebruiksrechten die expliciet in de overeenkomst of 
                deze voorwaarden worden toegekend. Tenzij uitdrukkelijk anders overeengekomen, verkrijgt 
                de Klant een niet-exclusief, niet-overdraagbaar gebruiksrecht voor de overeengekomen Diensten.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Het is de Klant niet toegestaan de door Nodely geleverde materialen te verveelvoudigen, 
                openbaar te maken, of ter beschikking te stellen aan derden, behoudens voor zover dit 
                noodzakelijk is voor het overeengekomen gebruik.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Het is de Klant niet toegestaan enige aanduiding met betrekking tot auteursrechten, 
                merken, handelsnamen of andere intellectuele eigendomsrechten uit de materialen te 
                verwijderen of te wijzigen.
              </p>
            </div>

            {/* Geheimhouding */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">9. Geheimhouding</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij 
                in het kader van hun overeenkomst van elkaar of uit andere bron hebben verkregen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit 
                voortvloeit uit de aard van de informatie.
              </p>
            </div>

            {/* Aansprakelijkheid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">10. Aansprakelijkheid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nodely is uitsluitend aansprakelijk voor schade die het directe en voorzienbare gevolg is 
                van een aan Nodely toerekenbare tekortkoming in de nakoming van de overeenkomst, dan wel 
                van een onrechtmatige daad van Nodely.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                De totale aansprakelijkheid van Nodely is beperkt tot het bedrag dat in het desbetreffende 
                geval onder de door Nodely afgesloten beroepsaansprakelijkheidsverzekering wordt uitbetaald, 
                vermeerderd met het eigen risico dat volgens de polisvoorwaarden niet ten laste van de 
                verzekeraar komt. Indien om welke reden ook geen uitkering plaatsvindt, is de aansprakelijkheid 
                beperkt tot het factuurbedrag van de betreffende opdracht, met een maximum van € 5.000,-.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nodely is nimmer aansprakelijk voor indirecte schade, waaronder maar niet beperkt tot 
                gevolgschade, gederfde winst, gemiste besparingen, verlies van gegevens en schade door 
                bedrijfsstagnatie.
              </p>
              <p className="text-gray-600 leading-relaxed">
                De Klant vrijwaart Nodely voor alle aanspraken van derden die verband houden met de door 
                Nodely geleverde Diensten, tenzij de schade het gevolg is van opzet of grove schuld van Nodely.
              </p>
            </div>

            {/* Overmacht */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">11. Overmacht</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In geval van overmacht is Nodely niet gehouden tot nakoming van enige verplichting jegens 
                de Klant. Onder overmacht wordt verstaan iedere van de wil van Nodely onafhankelijke 
                omstandigheid, waardoor nakoming van haar verplichtingen jegens de Klant geheel of gedeeltelijk 
                wordt verhinderd.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Indien een overmachtsituatie langer dan 90 dagen voortduurt, heeft elk der partijen het recht 
                de overeenkomst schriftelijk te ontbinden.
              </p>
            </div>

            {/* Wijzigingen en aanvullingen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">12. Opzegging en ontbinding</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beide partijen kunnen de overeenkomst schriftelijk opzeggen met inachtneming van een 
                opzegtermijn van 30 dagen, tenzij anders overeengekomen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nodely heeft het recht de overeenkomst met onmiddellijke ingang te ontbinden indien de 
                Klant zijn verplichtingen uit de overeenkomst niet, niet volledig of niet tijdig nakomt, 
                of indien Nodely goede grond heeft te vrezen dat de Klant daartoe niet in staat zal zijn.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bij ontbinding zijn alle vorderingen van Nodely op de Klant onmiddellijk opeisbaar. 
                Nodely behoudt het recht op schadevergoeding.
              </p>
            </div>

            {/* Wijzigingen algemene voorwaarden */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">13. Wijzigingen algemene voorwaarden</h2>
              <p className="text-gray-600 leading-relaxed">
                Nodely behoudt zich het recht voor deze algemene voorwaarden te wijzigen of aan te vullen. 
                Wijzigingen gelden ook ten aanzien van reeds gesloten overeenkomsten met inachtneming van 
                een termijn van 30 dagen na schriftelijke bekendmaking van de wijziging aan de Klant.
              </p>
            </div>

            {/* Toepasselijk recht */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">14. Toepasselijk recht en geschillen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Op alle overeenkomsten tussen Nodely en de Klant is uitsluitend Nederlands recht van toepassing, 
                met uitsluiting van het Weens Koopverdrag (CISG).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Partijen zullen zich eerst tot het uiterste inspannen om een geschil in onderling overleg 
                op te lossen alvorens een beroep te doen op de rechter.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Alle geschillen tussen partijen die niet in onderling overleg kunnen worden opgelost, 
                zullen uitsluitend worden voorgelegd aan de bevoegde rechter in het arrondissement 
                Oost-Brabant (Eindhoven), tenzij de wet dwingend anders voorschrijft.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">15. Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-600 mb-2"><strong>Nodely</strong></p>
                <p className="text-gray-600">E-mail: info@nodely.nl</p>
                <p className="text-gray-600">Telefoon: +31 6 83367060</p>
                <p className="text-gray-600">Locatie: Eindhoven, Nederland</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}