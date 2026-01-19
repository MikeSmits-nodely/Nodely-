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
                Wij kunnen de volgende categorieën persoonlijke gegevens verzamelen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Identiteitsgegevens:</strong> naam, functietitel, bedrijfsnaam</li>
                <li><strong>Contactgegevens:</strong> e-mailadres, telefoonnummer, postadres</li>
                <li><strong>Technische gegevens:</strong> IP-adres, browsertype, tijdzone-instellingen</li>
                <li><strong>Gebruiksgegevens:</strong> informatie over hoe u onze website gebruikt</li>
                <li><strong>Marketinggegevens:</strong> uw voorkeuren voor het ontvangen van marketing van ons</li>
              </ul>
            </div>

            {/* Hoe we uw gegevens gebruiken */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">3. Hoe we uw gegevens gebruiken</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Om onze diensten aan u te leveren en contractuele verplichtingen na te komen</li>
                <li>Om contact met u op te nemen over producten en diensten die van belang kunnen zijn</li>
                <li>Om onze website en diensten te verbeteren</li>
                <li>Om te voldoen aan wettelijke en regelgevende verplichtingen</li>
                <li>Om fraude te voorkomen en de beveiliging van onze systemen te waarborgen</li>
              </ul>
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
                Wij kunnen uw persoonlijke gegevens delen met:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Dienstverleners die ons helpen bij het leveren van onze diensten (bijv. hosting, CRM, analytics)</li>
                <li>Professionele adviseurs zoals advocaten, accountants en verzekeraars</li>
                <li>Regelgevende instanties en overheidsdiensten waar wettelijk verplicht</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Wij verkopen uw persoonlijke gegevens nooit aan derden voor marketingdoeleinden.
              </p>
            </div>

            {/* Bewaartermijnen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">6. Bewaartermijnen</h2>
              <p className="text-gray-600 leading-relaxed">
                Wij bewaren uw persoonlijke gegevens alleen zo lang als nodig is voor de doeleinden waarvoor 
                we ze hebben verzameld, inclusief om te voldoen aan wettelijke, administratieve of 
                rapportagevereisten. De bewaartermijn hangt af van het type gegevens en het doel van verwerking.
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
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">8. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Onze website gebruikt cookies om onderscheid te maken tussen gebruikers en om u een betere 
                ervaring te bieden. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen. 
                U kunt uw browser zo instellen dat deze cookies blokkeert, maar dit kan bepaalde functionaliteit 
                van onze website beperken.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">9. Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor vragen over deze privacyverklaring of om uw privacyrechten uit te oefenen, kunt u contact met ons opnemen:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-600"><strong>Nodely</strong></p>
                <p className="text-gray-600">Email: info@nodely.nl</p>
                <p className="text-gray-600">Locatie: Eindhoven, Nederland</p>
              </div>
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
