import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Award, CheckCircle2, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import team member images
import mikeImage from '/team/mike-smits.jpg';
import stijnImage from '/team/stijn-van-der-heijden.jpg';
import coenImage from '/team/coen-hiddink.jpg';

// Import team photo
import teamPhotoImage from '../assets/walkingoutside.jpg';

export function OverOnsPage() {
  const values = [
    {
      icon: Target,
      title: 'Resultaatgericht',
      description: 'We focussen op meetbare impact en tastbare resultaten. Elke oplossing wordt gebouwd met jouw bedrijfsdoelen centraal.'
    },
    {
      icon: Lightbulb,
      title: 'Innovatief',
      description: 'We blijven aan de voorhoede van AI-technologie en vertalen de nieuwste ontwikkelingen naar praktische toepassingen.'
    },
    {
      icon: Users,
      title: 'Samen groeien',
      description: 'We bouwen langdurige partnerships. Jouw succes is ons succes, daarom blijven we betrokken na implementatie.'
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'Kwaliteit staat voorop in alles wat we doen. Van de eerste meeting tot de laatste regel code.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Blue Background */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Over Nodely
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed px-4">
              We maken AI-automatisering <span className="text-[#FF6200] font-semibold">toegankelijk</span> en <span className="text-[#FF6200] font-semibold">effectief</span> voor ambitieuze Nederlandse bedrijven
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={teamPhotoImage}
                  alt="Nodely team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366]">
                Praktische AI-oplossingen die <span className="text-[#FF6200]">direct werken</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Nodely is ontstaan vanuit de overtuiging dat AI niet complex hoeft te zijn. Te vaak zien we bedrijven worstelen met dure, algemene oplossingen die niet passen bij hun processen.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Wij doen het anders. We bouwen <span className="text-[#FF6200] font-semibold">klantspecifieke automatiseringen</span> die naadloos integreren in jouw bestaande werkwijze. Geen maandenlange implementaties, maar concrete resultaten binnen weken.
              </p>
              <div className="pt-2 sm:pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6200] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Maatwerk oplossingen afgestemd op jouw processen</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6200] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Snelle implementatie en directe resultaten</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6200] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">Continue ondersteuning en optimalisatie</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4 sm:mb-6">
              Waar we voor staan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Deze kernwaarden sturen ons werk en onze relaties met klanten
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center flex-1"
              >
                <div className="bg-[#003366] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6" style={{width:'64px',height:'64px'}}>
                  <value.icon className="text-white" style={{width:'32px',height:'32px'}} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#003366] mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6200] mb-3 sm:mb-4">95%+</div>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 px-2">Tijdsbesparing bij specifieke use-cases</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6200] mb-3 sm:mb-4">100%</div>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 px-2">Maatwerk oplossingen op maat gemaakt</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6200] mb-3 sm:mb-4">24/7</div>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 px-2">Monitoring en ondersteuning</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4 sm:mb-6">
              Ons team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              De mensen achter Nodely die jouw AI-project tot een succes maken
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Mike Smits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src={mikeImage} 
                  alt="Mike Smits - Co-Founder Nodely" 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-2">
                Mike Smits
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/m-smits/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200 group/link"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium group-hover/link:underline">Bekijk profiel</span>
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
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src={stijnImage} 
                  alt="Stijn van der Heijden - Co-Founder Nodely" 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-2">
                Stijn van der Heijden
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/stijn-van-der-heijden-6a7660210/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200 group/link"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium group-hover/link:underline">Bekijk profiel</span>
              </a>
            </motion.div>

            {/* Coen Hiddink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group sm:col-span-2 lg:col-span-1 max-w-sm mx-auto w-full"
            >
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src={coenImage} 
                  alt="Coen Hiddink - Co-Founder Nodely" 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003366] mb-2">
                Coen Hiddink
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                Co-Founder
              </p>
              <a 
                href="https://www.linkedin.com/in/coen-hiddink/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF6200] transition-colors duration-200 group/link"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm sm:text-base font-medium group-hover/link:underline">Bekijk profiel</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4 sm:mb-6 px-4">
              Klaar om te beginnen?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4">
              Laten we in gesprek gaan over hoe AI jouw bedrijfsprocessen kan verbeteren
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6200] hover:bg-[#E55800] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
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