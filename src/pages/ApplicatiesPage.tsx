import { useMetaTags } from '../hooks/useMetaTags';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Headset, Database, Globe, Users, ArrowRight } from 'lucide-react';

const applications = [
  {
    icon: Headset,
    title: 'Klantenservice Automatisering',
    description: 'Transformeer je klantenservice met intelligente automatisering die vragen begrijpt, context herkent en consistente antwoorden levert. <span className="text-[#FF6200] font-semibold">24/7 beschikbaar</span> zonder kwaliteitsverlies.',
    benefits: ['Altijd beschikbare support', 'Consistente servicekwaliteit', 'Snellere responstijden'],
    color: '#003366',
    link: '/contact'
  },
  {
    icon: Database,
    title: 'Data-verwerking',
    description: 'Van grote hoeveelheden ongestructureerde data naar <span className="text-[#FF6200] font-semibold">betekenisvolle informatie</span>. We bouwen slimme systemen die <span className="text-[#FF6200] font-semibold">automatisch patronen herkennen</span> en inzichten genereren.',
    benefits: ['Geautomatiseerde data-extractie', 'Pattern recognition', 'Realtime inzichten'],
    color: '#FF6200',
    link: '/contact'
  },
  {
    icon: Globe,
    title: 'Webscraping',
    description: 'Verzamel en analyseer relevante data van websites <span className="text-[#FF6200] font-semibold">op schaal</span>. Blijf op de hoogte van markttrends, concurrentie en kansen <span className="text-[#FF6200] font-semibold">zonder handmatig werk</span>.',
    benefits: ['Geautomatiseerd data verzamelen', 'Marktinzichten', 'Competitive intelligence'],
    color: '#003366',
    link: '/contact'
  },
  {
    icon: Users,
    title: 'Leadscraping',
    description: 'Identificeer en kwalificeer potentiële klanten <span className="text-[#FF6200] font-semibold">automatisch</span>. Van prospecting tot eerste contact, <span className="text-[#FF6200] font-semibold">volledig op maat gebouwd</span> voor jouw doelgroep.',
    benefits: ['Automatische lead discovery', 'Kwalificatie & scoring', 'Verrijkte contactdata'],
    color: '#FF6200',
    link: '/contact'
  }
];

export function ApplicatiesPage() {
  useMetaTags({
    title: 'Applicaties - Nodely AI-oplossingen',
    description: 'Ontdek onze aangepaste AI-applicaties: klantenservice automatisering, data-verwerking, webscraping en leadscraping.',
    keywords: 'AI-applicaties, workflow automatisering, bedrijfssoftware, automatisering',
    ogUrl: 'https://nodely.nl/applicaties'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Klantspecifieke Automatiseringen
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ontdek hoe we bedrijfsprocessen transformeren met <span className="text-[#E67E22] font-semibold">op maat gemaakte AI-oplossingen</span>. 
              Geen standaardproducten, maar <span className="text-[#E67E22] font-semibold">volledig aangepast</span> aan jouw uitdagingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link to={app.link} className="block h-full">
                  <div className="h-full bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#FF6200] hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: `${app.color}15` }}
                    >
                      <app.icon 
                        className="w-8 h-8"
                        style={{ color: app.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#FF6200] transition-colors">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {index === 0 ? (
                        <>
                          Transformeer je klantenservice met intelligente automatisering die vragen begrijpt, context herkent en consistente antwoorden levert. <span className="text-[#E67E22] font-semibold">24/7 beschikbaar</span> zonder kwaliteitsverlies.
                        </>
                      ) : index === 1 ? (
                        <>
                          Van grote hoeveelheden ongestructureerde data naar <span className="text-[#E67E22] font-semibold">betekenisvolle informatie</span>. We bouwen slimme systemen die <span className="text-[#E67E22] font-semibold">automatisch patronen herkennen</span> en inzichten genereren.
                        </>
                      ) : index === 2 ? (
                        <>
                          Verzamel en analyseer relevante data van websites <span className="text-[#E67E22] font-semibold">op schaal</span>. Blijf op de hoogte van markttrends, concurrentie en kansen <span className="text-[#E67E22] font-semibold">zonder handmatig werk</span>.
                        </>
                      ) : (
                        <>
                          Identificeer en kwalificeer potentiële klanten <span className="text-[#E67E22] font-semibold">automatisch</span>. Van prospecting tot eerste contact, <span className="text-[#E67E22] font-semibold">volledig op maat gebouwd</span> voor jouw doelgroep.
                        </>
                      )}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6200]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#003366] font-medium group-hover:text-[#FF6200] transition-colors">
                      <span>Bespreek jouw use-case</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Maatwerk Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Alle oplossingen zijn maatwerk
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bovenstaande voorbeelden geven een beeld van wat er mogelijk is, maar elke oplossing wordt 
              <span className="text-[#FF6200] font-semibold"> klantspecifiek gebouwd</span>. We luisteren naar jouw uitdagingen en ontwerpen een systeem 
              dat <span className="text-[#FF6200] font-semibold">perfect aansluit</span> bij jouw processen en doelen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] mb-6">
              Heb je een andere uitdaging?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We bouwen ook oplossingen voor processen die hier niet vermeld staan. 
              Vertel ons over jouw specifieke situatie en we kijken samen naar de mogelijkheden.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6200] hover:bg-[#E55800] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:shadow-lg"
            >
              Neem contact op
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}