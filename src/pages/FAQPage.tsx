import { useMetaTags } from '../hooks/useMetaTags';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Algemeen',
    questions: [
      {
        question: 'Wat doet Nodely precies?',
        answer: 'Nodely specialiseert zich in het ontwikkelen van op maat gemaakte AI agents en automatiseringen voor bedrijven. We bouwen intelligente oplossingen die repetitieve taken automatiseren, data-gedreven inzichten genereren en bedrijfsprocessen optimaliseren.'
      },
      {
        question: 'Voor welke bedrijven zijn jullie oplossingen geschikt?',
        answer: 'Onze oplossingen zijn geschikt voor bedrijven van alle groottes, van scale-ups tot enterprise organisaties. We werken met klanten in verschillende sectoren, waaronder finance, marketing, sales en operations. Als je bedrijfsprocessen hebt die handmatig of repetitief zijn, kunnen wij waarschijnlijk helpen.'
      },
      {
        question: 'Wat is het verschil tussen een AI agent en standaard automatisering?',
        answer: 'Een AI agent kan zelfstandig beslissingen nemen op basis van context en data, terwijl standaard automatisering vaste regels volgt. AI agents kunnen leren van patronen, zich aanpassen aan nieuwe situaties en complexere taken uitvoeren die menselijke intelligentie vereisen.'
      }
    ]
  },
  {
    category: 'Proces & Samenwerking',
    questions: [
      {
        question: 'Hoe ziet een typisch project eruit?',
        answer: 'We starten met een grondige analyse van jouw bedrijfsprocessen en uitdagingen. Vervolgens ontwikkelen we samen een strategie met heldere KPI\'s. Daarna bouwen we de oplossing met moderne AI-technologie en implementeren deze naadloos in jouw organisatie, inclusief training en voortdurende ondersteuning.'
      },
      {
        question: 'Hoe lang duurt een gemiddeld project?',
        answer: 'Dit varieert sterk afhankelijk van de complexiteit en scope. Een eenvoudige automatisering kan binnen 2-4 weken live zijn, terwijl complexere AI agents 2-3 maanden kunnen duren. We werken altijd met iteratieve sprints zodat je snel resultaat ziet.'
      },
      {
        question: 'Kan ik jullie oplossingen integreren met mijn bestaande systemen?',
        answer: 'Absoluut! We bouwen onze oplossingen specifiek met integratie in gedachten. We kunnen koppelen met vrijwel alle moderne software zoals boekhoudpakketten, CRM-systemen, email platforms, databases en API\'s. Tijdens de analysefase kijken we naar jouw technische landschap.'
      }
    ]
  },
  {
    category: 'Technologie & Beveiliging',
    questions: [
      {
        question: 'Welke AI-technologieën gebruiken jullie?',
        answer: 'We werken met state-of-the-art AI technologieën zoals Large Language Models (GPT, Claude), machine learning frameworks, en moderne automatiseringstools. We kiezen altijd de beste technologie voor jouw specifieke use case, niet andersom.'
      },
      {
        question: 'Hoe wordt de beveiliging van mijn data gewaarborgd?',
        answer: 'Beveiliging staat voorop. We werken met end-to-end encryptie, veilige API-verbindingen, en compliance met AVG/GDPR. Data wordt verwerkt volgens Nederlandse/Europese privacy-wetgeving. We tekenen NDA\'s en kunnen on-premise of private cloud oplossingen leveren indien gewenst.'
      },
      {
        question: 'Worden mijn gegevens gebruikt om AI-modellen te trainen?',
        answer: 'Nee, absoluut niet. Jouw bedrijfsdata blijft volledig privé en wordt nooit gebruikt om externe AI-modellen te trainen. We werken volgens een use and lose-principe: data die binnen de workflow wordt verwerkt, wordt niet opgeslagen in databases of andere systemen. Na verwerking wordt deze niet bewaard.'
      }
    ]
  },
  {
    category: 'Kosten & ROI',
    questions: [
      {
        question: 'Wat zijn de kosten van een AI-oplossing?',
        answer: 'De kosten variëren per project, afhankelijk van complexiteit, integraties en scope. We werken meestal met vaste projectprijzen voor implementatie, en optionele maandelijkse ondersteuningscontracten. Na een vrijblijvend gesprek kunnen we een gedetailleerde offerte maken.'
      },
      {
        question: 'Wat is de te verwachten ROI?',
        answer: 'De ROI is sterk afhankelijk van de specifieke use-case en implementatie. Bij sommige projecten zien klanten al binnen enkele maanden een positieve ROI door tijdsbesparing en efficiëntiewinst. We helpen vooraf een realistische business case te maken op basis van jouw situatie.'
      },
      {
        question: 'Zijn er doorlopende kosten na implementatie?',
        answer: 'Naast de initiële projectkosten kunnen er kosten zijn voor hosting, API-gebruik (zoals OpenAI), onderhoud en support. Dit bespreken we transparant vooraf. We bieden verschillende ondersteuningspakketten aan, van basic monitoring tot volledige managed services.'
      }
    ]
  },
  {
    category: 'Applicaties',
    questions: [
      {
        question: 'Wat houdt Klantenservice Automatisering in?',
        answer: 'We bouwen intelligente systemen die klantvragen automatisch begrijpen en beantwoorden. De oplossing leert van eerdere interacties, herkent context en levert consistente antwoorden. Dit resulteert in 24/7 beschikbaarheid en snellere responstijden zonder kwaliteitsverlies.'
      },
      {
        question: 'Hoe werkt Data-verwerking?',
        answer: 'Onze data-verwerkingsoplossingen transformeren grote hoeveelheden ongestructureerde data naar bruikbare informatie. We bouwen systemen die automatisch patronen herkennen, data categoriseren en betekenisvolle inzichten genereren die je direct kunt gebruiken voor besluitvorming.'
      },
      {
        question: 'Kunnen jullie ook custom oplossingen bouwen?',
        answer: 'Absoluut! Alle voorbeelden op onze website zijn indicatief. Elk bedrijf heeft unieke processen en uitdagingen. We bouwen klantspecifieke oplossingen die perfect aansluiten bij jouw situatie, van webscraping tot leadscraping en alles daartussenin.'
      }
    ]
  }
];

export function FAQPage() {
  useMetaTags({
    title: 'Veelgestelde Vragen - Nodely',
    description: 'Vind antwoorden op veelgestelde vragen over Nodely, onze AI-oplossingen, proces en werkwijze.',
    keywords: 'FAQ, veelgestelde vragen, AI-automatisering, support',
    ogUrl: 'https://nodely.nl/faq'
  });

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Function to render FAQ answers with orange highlights for key terms
  const renderAnswer = (answer: string, question: string) => {
    if (question.includes('Wat doet Nodely')) {
      return (
        <>
          Nodely specialiseert zich in het ontwikkelen van <span className="text-[#E67E22] font-semibold">op maat gemaakte</span> AI agents en automatiseringen voor bedrijven. We bouwen intelligente oplossingen die repetitieve taken automatiseren, data-gedreven inzichten genereren en bedrijfsprocessen optimaliseren.
        </>
      );
    } else if (question.includes('Voor welke bedrijven')) {
      return (
        <>
          Onze oplossingen zijn geschikt voor <span className="text-[#E67E22] font-semibold">bedrijven van alle groottes</span>, van scale-ups tot enterprise organisaties. We werken met klanten in verschillende sectoren, waaronder finance, marketing, sales en operations. Als je bedrijfsprocessen hebt die <span className="text-[#E67E22] font-semibold">handmatig of repetitief</span> zijn, kunnen wij waarschijnlijk helpen.
        </>
      );
    } else if (question.includes('typisch project')) {
      return (
        <>
          We starten met een <span className="text-[#E67E22] font-semibold">grondige analyse</span> van jouw bedrijfsprocessen en uitdagingen. Vervolgens ontwikkelen we samen een strategie met <span className="text-[#E67E22] font-semibold">heldere KPI's</span>. Daarna bouwen we de oplossing met moderne AI-technologie en implementeren deze naadloos in jouw organisatie, inclusief training en voortdurende ondersteuning.
        </>
      );
    } else if (question.includes('Hoe lang duurt')) {
      return (
        <>
          Dit varieert sterk afhankelijk van de complexiteit en scope. Een eenvoudige automatisering kan <span className="text-[#E67E22] font-semibold">binnen 2-4 weken</span> live zijn, terwijl complexere AI agents 2-3 maanden kunnen duren. We werken altijd met <span className="text-[#E67E22] font-semibold">iteratieve sprints</span> zodat je snel resultaat ziet.
        </>
      );
    } else if (question.includes('AI-technologieën')) {
      return (
        <>
          We werken met <span className="text-[#E67E22] font-semibold">state-of-the-art AI technologieën</span> zoals Large Language Models (GPT, Claude), machine learning frameworks, en moderne automatiseringstools. We kiezen altijd de <span className="text-[#E67E22] font-semibold">beste technologie</span> voor jouw specifieke use case, niet andersom.
        </>
      );
    } else if (question.includes('beveiliging')) {
      return (
        <>
          Beveiliging staat voorop. We werken met <span className="text-[#E67E22] font-semibold">end-to-end encryptie</span>, veilige API-verbindingen, en compliance met <span className="text-[#E67E22] font-semibold">AVG/GDPR</span>. Data wordt verwerkt volgens Nederlandse/Europese privacy-wetgeving. We tekenen NDA's en kunnen on-premise of private cloud oplossingen leveren indien gewenst.
        </>
      );
    } else if (question.includes('ROI')) {
      return (
        <>
          De ROI is sterk afhankelijk van de specifieke use-case en implementatie. Bij sommige projecten zien klanten al <span className="text-[#E67E22] font-semibold">binnen enkele maanden</span> een positieve ROI door <span className="text-[#E67E22] font-semibold">tijdsbesparing en efficiëntiewinst</span>. We helpen vooraf een realistische business case te maken op basis van jouw situatie.
        </>
      );
    } else if (question.includes('Klantenservice Automatisering')) {
      return (
        <>
          We bouwen intelligente systemen die klantvragen automatisch begrijpen en beantwoorden. De oplossing leert van eerdere interacties, herkent context en levert consistente antwoorden. Dit resulteert in <span className="text-[#E67E22] font-semibold">24/7 beschikbaarheid</span> en snellere responstijden zonder kwaliteitsverlies.
        </>
      );
    } else if (question.includes('Data-verwerking')) {
      return (
        <>
          Onze data-verwerkingsoplossingen transformeren grote hoeveelheden ongestructureerde data naar <span className="text-[#E67E22] font-semibold">bruikbare informatie</span>. We bouwen systemen die <span className="text-[#E67E22] font-semibold">automatisch patronen herkennen</span>, data categoriseren en betekenisvolle inzichten genereren die je direct kunt gebruiken voor besluitvorming.
        </>
      );
    } else if (question.includes('custom oplossingen')) {
      return (
        <>
          Absoluut! Alle voorbeelden op onze website zijn indicatief. Elk bedrijf heeft unieke processen en uitdagingen. We bouwen <span className="text-[#E67E22] font-semibold">klantspecifieke oplossingen</span> die perfect aansluiten bij jouw situatie, van webscraping tot leadscraping en alles daartussenin.
        </>
      );
    }
    return answer;
  };

  return (
    <div className="min-h-screen bg-white">
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
              <HelpCircle className="w-4 h-4 text-[#FF6200]" />
              <span className="text-sm text-white font-semibold">VEELGESTELDE VRAGEN</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              FAQ
            </h1>
            <p className="text-xl text-white/80">
              Alles wat je wilt weten over Nodely en onze AI-oplossingen
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemKey = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems[itemKey];
                  
                  return (
                    <motion.div
                      key={itemKey}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                      className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#FF6200] transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-[#003366] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-[#FF6200] flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-600 leading-relaxed">
                            {renderAnswer(faq.answer, faq.question)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#003366] mb-4">
              Staat jouw vraag er niet tussen?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Neem gerust contact met ons op. We helpen je graag verder met al je vragen 
              over AI-automatisering en onze oplossingen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6200] text-white font-semibold rounded-xl hover:bg-[#FF6200]/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Neem contact op
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}