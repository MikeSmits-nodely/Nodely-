import { useMetaTags } from '../hooks/useMetaTags';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Team member images - Using public folder paths
// IMPORTANT: Place the image files in public/team/ folder with these EXACT filenames:
// - mike-smits.jpg (or .png)
// - stijn-van-der-heijden.jpg (or .png)  
// - coen-hiddink.jpg (or .png)
const mikeImage = '/team/mike-smits.png';
const stijnImage = '/team/stijn-van-der-heijden.png';
const coenImage = '/team/coen-hiddink.png';

export function OverOnsPage() {
  useMetaTags({
    title: 'Over Ons - Nodely',
    description: 'Lees meer over Nodely, onze missie om bedrijfsprocessen te transformeren met AI, en het expert team achter onze innovatieve oplossingen.',
    keywords: 'over nodely, AI-bedrijf, team, missie, experts',
    ogUrl: 'https://nodely.nl/over-ons'
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
              AI-oplossingen die <span className="text-[#FF6200]">écht werken</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Nodely is een Nederlands AI-bedrijf dat zich richt op <span className="text-[#E67E22] font-semibold">praktische, resultaatgerichte automatiseringen</span> voor ambitieuze bedrijven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#003366] mb-6">
                Onze Missie
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We geloven dat AI niet complex en onbereikbaar hoeft te zijn. 
                Onze missie is om <span className="text-[#E67E22] font-semibold">geavanceerde AI-technologie toegankelijk</span> te maken 
                voor elk bedrijf, ongeacht grootte of technische expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We bouwen oplossingen die <span className="text-[#E67E22] font-semibold">direct impact</span> maken op je bedrijfsresultaten, 
                van tijdsbesparing tot omzetgroei. Geen wollige beloftes, maar <span className="text-[#E67E22] font-semibold">concrete, 
                meetbare resultaten</span>.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6200] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-[#003366]">Resultaatgericht:</span> We focussen op meetbare impact en tastbare resultaten voor jouw bedrijf
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6200] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-[#003366]">Innovatie:</span> We blijven aan de voorhoede van AI-technologie en delen deze kennis met onze klanten
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6200] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-[#003366]">Partnership:</span> We bouwen langdurige relaties en groeien samen met onze klanten
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6200] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-[#003366]">Kwaliteit:</span> We bewaken kwaliteit in elke stap van het proces
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl p-12 text-white"
            >
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-[#FF6200] mb-2">95%+</div>
                  <p className="text-white/90">Tijdsbesparing mogelijk bij specifieke use-cases</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FF6200] mb-2">Maatwerk</div>
                  <p className="text-white/90">Elke oplossing volledig aangepast aan jouw processen</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FF6200] mb-2">24/7</div>
                  <p className="text-white/90">Continue ondersteuning en monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#003366] mb-6">
              Ons Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De mensen achter Nodely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mike Smits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <motion.div 
                className="mb-6 overflow-hidden rounded-2xl shadow-lg border-4 border-[#003366] transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: '#FF6200' }}
              >
                <img 
                  src={mikeImage} 
                  alt="Mike Smits" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMDAzMzY2Ij48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NaWtlIFNtaXRzPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                Mike Smits
              </h3>
              <p className="text-gray-600 mb-4">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/m-smits/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="border-b border-[#003366] hover:border-[#FF6200]">LinkedIn</span>
              </a>
            </motion.div>

            {/* Stijn van der Heijden */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <motion.div 
                className="mb-6 overflow-hidden rounded-2xl shadow-lg border-4 border-[#003366] transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: '#FF6200' }}
              >
                <img 
                  src={stijnImage} 
                  alt="Stijn van der Heijden" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMDAzMzY2Ij48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TdGlqbiB2YW4gZGVyIEhlaWpkZW48L3RleHQ+PC9zdmc+';
                  }}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                Stijn van der Heijden
              </h3>
              <p className="text-gray-600 mb-4">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/stijn-van-der-heijden-6a7660210/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="border-b border-[#003366] hover:border-[#FF6200]">LinkedIn</span>
              </a>
            </motion.div>

            {/* Coen Hiddink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <motion.div 
                className="mb-6 overflow-hidden rounded-2xl shadow-lg border-4 border-[#003366] transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: '#FF6200' }}
              >
                <img 
                  src={coenImage} 
                  alt="Coen Hiddink" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMDAzMzY2Ij48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db2VuIEhpZGRpbms8L3RleHQ+PC9zdmc+';
                  }}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                Coen Hiddink
              </h3>
              <p className="text-gray-600 mb-4">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/coen-hiddink/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="border-b border-[#003366] hover:border-[#FF6200]">LinkedIn</span>
              </a>
            </motion.div>
          </div>
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
              Klaar om kennis te maken?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Laten we in een vrijblijvend gesprek kijken hoe AI jouw bedrijf 
              naar een hoger niveau kan tillen.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6200] hover:bg-[#E55800] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:shadow-2xl"
            >
              Neem contact op
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}