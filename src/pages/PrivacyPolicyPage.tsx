import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function PrivacyPolicyPage() {
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
              <Shield className="w-4 h-4 text-[#FF6200]" />
              <span className="text-sm text-white font-semibold">PRIVACY & GEGEVENSBESCHERMING</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Privacy Policy
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
            {/* Introductie */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">1. Introductie</h2>
              <p className="text-gray-600 leading-relaxed">
                Nodely ("wij", "ons" of "onze") respecteert uw privacy en zet zich in voor het beschermen van uw persoonlijke gegevens. 
                Deze privacyverklaring informeert u over hoe wij met uw persoonlijke gegevens omgaan wanneer u onze website bezoekt 
                en vertelt u over uw privacyrechten en hoe de wet u beschermt.
              </p>
            </div>

            {/* Gegevens die we verzamelen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">2. Gegevens die we verzamelen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Via ons contactformulier verzamelen wij de volgende persoonlijke gegevens:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Naam:</strong> verplicht veld</li>
                <li><strong>E-mailadres:</strong> verplicht veld</li>
                <li><strong>Bedrijfsnaam:</strong> optioneel veld</li>
                <li><strong>Telefoonnummer:</strong> optioneel veld</li>
                <li><strong>Bericht:</strong> uw vraag of opmerking</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Technische gegevens:</strong> IP-adres (automatisch verzameld door Netlify voor beveiligingsdoeleinden en spam-preventie)
              </p>
            </div>

            {/* Hoe we uw gegevens gebruiken */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">3. Hoe we uw gegevens gebruiken</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij gebruiken uw persoonlijke gegevens uitsluitend voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Om uw contactverzoek te beantwoorden en met u te communiceren over uw vraag</li>
                <li>Om informatie te verstrekken over onze diensten naar aanleiding van uw verzoek</li>
                <li>Om fraude te voorkomen en de beveiliging van onze website te waarborgen</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Rechtsgrond voor verwerking:</strong> Uw toestemming (door het vrijwillig invullen en versturen van het contactformulier) 
                en ons gerechtvaardigd belang om uw vraag te beantwoorden en communicatie met u te onderhouden.
              </p>
            </div>

            {/* Gegevensbeveiliging */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">4. Gegevensbeveiliging</h2>
              <p className="text-gray-600 leading-relaxed">
                Wij hebben passende beveiligingsmaatregelen getroffen om te voorkomen dat uw persoonlijke gegevens 
                per ongeluk verloren gaan, worden gebruikt of worden geopend op een ongeautoriseerde manier. 
                We beperken de toegang tot uw persoonlijke gegevens tot werknemers, agenten, contractors en andere 
                derden die een zakelijke noodzaak hebben om deze te kennen.
              </p>
            </div>

            {/* Delen van gegevens */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">5. Delen van gegevens</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij delen uw persoonlijke gegevens uitsluitend met de volgende partijen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Netlify:</strong> hosting en verwerking van contactformulieren (gevestigd in de Verenigde Staten, met passende waarborgen onder de AVG via standaard contractuele clausules)</li>
                <li><strong>E-mailprovider:</strong> voor het versturen en ontvangen van e-mailberichten</li>
                <li><strong>Regelgevende instanties en overheidsdiensten:</strong> alleen waar wettelijk verplicht</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Wij verkopen uw persoonlijke gegevens nooit aan derden.</strong>
              </p>
            </div>

            {/* Internationale gegevensoverdracht */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">5a. Internationale gegevensoverdracht</h2>
              <p className="text-gray-600 leading-relaxed">
                Uw gegevens worden verwerkt door Netlify, dat servers in de Verenigde Staten gebruikt. 
                Netlify voldoet aan de AVG-vereisten voor internationale gegevensoverdracht via standaard 
                contractuele clausules (SCC's) die zijn goedgekeurd door de Europese Commissie. Dit zorgt 
                ervoor dat uw gegevens ook buiten de EU adequaat beschermd worden.
              </p>
            </div>

            {/* Bewaartermijnen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">6. Bewaartermijnen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij bewaren uw persoonlijke gegevens gedurende de volgende termijnen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Contactformulier gegevens:</strong> Maximaal 2 jaar na uw laatste contact met ons, 
                    tenzij wettelijk verplicht om deze langer te bewaren</li>
                <li><strong>IP-adressen:</strong> Maximaal 30 dagen (automatisch bewaard door Netlify voor beveiligingsdoeleinden)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Op uw verzoek kunnen wij uw gegevens eerder verwijderen, tenzij er een wettelijke verplichting 
                is om deze langer te bewaren. U kunt hiervoor contact met ons opnemen via de contactgegevens 
                vermeld in artikel 9.
              </p>
            </div>

            {/* Uw rechten */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">7. Uw rechten onder de AVG</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Onder bepaalde omstandigheden heeft u de volgende rechten onder databeschermingswetten:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Recht op inzage:</strong> u kunt een kopie van uw persoonlijke gegevens opvragen</li>
                <li><strong>Recht op rectificatie:</strong> u kunt verzoeken om onjuiste gegevens te corrigeren</li>
                <li><strong>Recht op verwijdering:</strong> u kunt verzoeken om uw gegevens te verwijderen</li>
                <li><strong>Recht op beperking:</strong> u kunt verzoeken om verwerking te beperken</li>
                <li><strong>Recht op bezwaar:</strong> u kunt bezwaar maken tegen verwerking</li>
                <li><strong>Recht op dataportabiliteit:</strong> u kunt uw gegevens in een gestructureerd formaat opvragen</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Om deze rechten uit te oefenen, kunt u contact met ons opnemen via de gegevens in artikel 9.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Klachtrecht:</strong> U heeft ook het recht om een klacht in te dienen bij de 
                Autoriteit Persoonsgegevens (de toezichthouder in Nederland) als u vindt dat wij uw 
                gegevens niet correct verwerken. Meer informatie vindt u op  
                 <a href="https://autoriteitpersoonsgegevens.nl" className="text-[#FF6200] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  autoriteitpersoonsgegevens.nl
                </a>.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">8. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze website gebruikt alleen <strong>functionele cookies</strong> die strikt noodzakelijk zijn 
                voor de werking van de website, zoals het voorkomen van spam bij het contactformulier. 
                Deze cookies vereisen geen toestemming onder de AVG.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Wij gebruiken GEEN tracking cookies, analytics cookies of marketing cookies.</strong> 
                 Uw surfgedrag wordt niet gevolgd en er worden geen gegevens verzameld voor advertentiedoeleinden.
              </p>
              <p className="text-gray-600 leading-relaxed">
                U kunt cookies in uw browser blokkeren via de browserinstellingen, maar dit kan de 
                functionaliteit van het contactformulier beperken.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">9. Contact en verwerkingsverantwoordelijke</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De verwerkingsverantwoordelijke voor de verwerking van uw persoonlijke gegevens is:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-600 mb-2"><strong>Nodely</strong></p>
                <p className="text-gray-600">E-mail: info@nodely.nl</p>
                <p className="text-gray-600">Telefoon: +31 6 83367060</p>
                <p className="text-gray-600">Locatie: Eindhoven, Nederland</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Voor vragen over deze privacyverklaring of om uw privacyrechten uit te oefenen, 
                kunt u contact met ons opnemen via bovenstaande contactgegevens.
              </p>
            </div>

            {/* Wijzigingen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">10. Wijzigingen in deze privacyverklaring</h2>
              <p className="text-gray-600 leading-relaxed">
                Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken. De meest recente versie is 
                altijd beschikbaar op onze website. Wij raden u aan deze pagina regelmatig te raadplegen 
                voor eventuele wijzigingen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
