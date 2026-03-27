import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Wallet,
  Globe,
  Users,
  TrendingUp,
  MessageCircle,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  PlayCircle,
  Menu,
  X,
  HeartPulse,
  Leaf
} from 'lucide-react';

// --- Reusable Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Възможността', href: '#solution' },
    { name: 'Как работи', href: '#how-it-works' },
    { name: 'За мен', href: '#about' },
    { name: 'Продукти', href: '#products' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-white tracking-tight">
          Атанас<span className="text-orange-500">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/30">
            Започни сега
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all"
              >
                Започни сега
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Success Lifestyle" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Възможност за партньорство в 32 държави
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Увеличи дохода си и заживей живота, който <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">заслужаваш</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Изгради успешен онлайн бизнес с доказана система, без риск и без предишен опит. Работи от всяка точка на света с подкрепата на LR Health & Beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-orange-500/30 group">
                Започни сега
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#how-it-works" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                <PlayCircle size={20} />
                Виж как работи
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    "Живееш от заплата до заплата и парите никога не стигат?",
    "Липсва ти свобода и време за семейството и любимите хора?",
    "Усещаш, че потенциалът ти се пропилява в работа, която не те оценява?"
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Познато ли ти е това чувство?
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Повечето хора прекарват живота си в изграждане на чужди мечти, докато техните собствени остават на заден план.
          </p>
        </FadeIn>
        
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                  <XCircle size={24} />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{problem}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <section id="solution" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <img 
                src="https://i.ibb.co/zd8MyrV/1000006605.png" 
                alt="Има и друг начин" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="relative rounded-2xl shadow-xl object-contain w-full h-auto max-h-[500px] bg-slate-50 border border-slate-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Потенциал</p>
                    <p className="text-xl font-bold text-slate-900">300–600€ / мес.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Има и друг начин.
            </h2>
            <p className="text-xl text-orange-600 font-medium mb-8">
              Как да започнеш да имаш допълнителен доход с LR Health & Beauty – дори без опит и без риск.
            </p>
            <ul className="space-y-6 mb-10">
              {[
                "Без предишен опит – получаваш пълно обучение",
                "Без нужда от складиране на стока и логистика",
                "Готова система стъпка по стъпка за успех",
                "Потенциал за 300–600€ допълнителен доход още в първите 3–6 месеца"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-orange-100 text-orange-600 rounded-full p-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                Искам да науча повече
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <Wallet size={28} />, title: "Допълнителен доход", desc: "Изгради стабилен финансов поток, който расте с твоите усилия." },
    { icon: <Clock size={28} />, title: "Гъвкаво работно време", desc: "Ти решаваш кога и по колко да работиш. Идеално за съчетаване с друга работа." },
    { icon: <Globe size={28} />, title: "Онлайн бизнес", desc: "Работи от вкъщи, от плажа или докато пътуваш. Нужен ти е само телефон." },
    { icon: <Users size={28} />, title: "Подкрепящ екип", desc: "Никога не си сам. Получаваш менторство и подкрепа от успешни лидери." },
    { icon: <TrendingUp size={28} />, title: "Лично развитие", desc: "Безплатни обучения, семинари и среда, която те дърпа напред." },
    { icon: <ShieldCheck size={28} />, title: "Немско качество", desc: "Партньорство със стабилна компания с над 35 години история." },
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Защо да избереш този път?
          </h2>
          <p className="text-lg text-slate-400">
            Мрежовият маркетинг с LR ти дава свободата да изградиш бизнес по твоите правила, без традиционните рискове и инвестиции.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((benefit, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-6 shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow">{benefit.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            За кого е тази възможност?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-green-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Подходящо за:</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Хора, търсещи допълнителен доход",
                  "Хора, желаещи промяна в начина си на живот",
                  "Начинаещи без никакъв опит",
                  "Хора, отворени към онлайн бизнес и нови знания",
                  "Майки с малки деца, търсещи гъвкавост"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-red-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">НЕ е за:</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Хора, търсещи бързи пари без усилия",
                  "Хора, които не желаят да се обучават",
                  "Хора, които се отказват лесно при първата трудност",
                  "Хора с негативно мислене и постоянно оплакващи се"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: <MessageCircle size={32} />, title: "Оставяш контакт", desc: "Попълваш кратката форма в края на страницата." },
    { icon: <Phone size={32} />, title: "Свързваме се с теб", desc: "Ще ти се обадя лично, за да обсъдим твоите цели." },
    { icon: <MapPin size={32} />, title: "Получаваш план", desc: "Изготвяме индивидуален план за действие и стартираме." },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Как работи?
          </h2>
          <p className="text-lg text-slate-600">Само 3 лесни стъпки до твоя нов старт.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-orange-500 mb-4 md:mb-6 relative">
                <div className="scale-75 md:scale-100">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3>
              <p className="text-slate-600 text-base md:text-lg">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 md:mb-32">
          <FadeIn className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Кой съм аз?
            </h2>
            <h3 className="text-2xl text-orange-400 font-medium mb-8">Атанас Атанасов</h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Здравей! Преди време бях точно там, където може би си ти сега – търсех начин да променя живота си, да имам повече време за себе си и финансова стабилност, която да не зависи от шеф или работно време.
              </p>
              <p>
                Открих възможността с LR Health & Beauty и това преобърна ежедневието ми. Започнах от нулата, без опит, но с огромно желание за промяна.
              </p>
              <p>
                Днес помагам на хора като теб да изградят своя успешен бизнес, стъпка по стъпка. Моята мисия е да ти покажа пътя, да ти дам готовите инструменти и да те подкрепям по него, докато постигнеш своите цели.
              </p>
            </div>
            <div className="mt-10">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                Свържи се с мен
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://i.ibb.co/KcTFsSKD/1000006604.png" 
                alt="Атанас Атанасов" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="relative rounded-3xl shadow-2xl object-contain w-full h-auto max-h-[600px] border border-slate-700 bg-slate-800/40"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Запознай се с част от екипа
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <FadeIn delay={0.1} className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 flex flex-col h-full hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-700 border-2 border-slate-600 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://i.ibb.co/dwK59Wts/DANIELA.jpg" alt="Даниела Марковска" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-orange-400 font-medium mb-1">Даниела Марковска</h3>
                <p className="text-slate-400 text-sm md:text-base">Партньор</p>
              </div>
            </div>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed flex-grow flex flex-col">
              <p className="mb-4">За мен това не е просто работа. Това е начин да:</p>
              <ul className="space-y-2 mb-8 ml-5 list-disc marker:text-orange-500">
                <li>се развивам</li>
                <li>помагам на хората</li>
                <li>изграждам живот по свои правила</li>
              </ul>
              <p className="mt-auto pt-6 border-t border-slate-700/50 font-medium text-white">
                С LR Health & Beauty имам възможност за свобода и развитие.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 flex flex-col h-full hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-700 border-2 border-slate-600 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://i.ibb.co/KRKXSxq/VIKTORIA.jpg" alt="Виктория Ангелова" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-orange-400 font-medium mb-1">Виктория Ангелова</h3>
                <p className="text-slate-400 text-sm md:text-base">Партньор</p>
              </div>
            </div>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed flex-grow flex flex-col">
              <p className="mb-4">В майчинство съм с малко бебе и търсех начин да изкарвам доход от вкъщи. Започнах с LR Health & Beauty, за да имам:</p>
              <ul className="space-y-2 mb-8 ml-5 list-disc marker:text-orange-500">
                <li>гъвкаво време</li>
                <li>повече време с детето</li>
                <li>допълнителен доход</li>
              </ul>
              <p className="mt-auto pt-6 border-t border-slate-700/50 font-medium text-white">
                Това е първата ми стъпка към финансова независимост.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="videos" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Научете повече за LR
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Вижте как работи бизнес моделът и се запознайте с нашите висококачествени продукти.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn delay={0.1} className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Бизнес моделът на LR</h3>
            <div className="relative w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dCGUVkG3Efg?start=4" 
                title="Бизнес моделът на LR" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Продуктите на LR</h3>
            <div className="relative w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SBSxnxQP9k0" 
                title="Продуктите на LR" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://i.ibb.co/fYJSbrhy/image.png" alt="Health products" referrerPolicy="no-referrer" className="rounded-2xl shadow-md h-64 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1974&auto=format&fit=crop" alt="Beauty products" referrerPolicy="no-referrer" className="rounded-2xl shadow-md h-64 w-full object-cover mt-8" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <Leaf size={16} />
              Качество от Германия
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Здраве и красота с LR
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Като партньор, ти не просто изграждаш бизнес, но и подобряваш своя начин на живот с висококачествени продукти за здраве, енергия и красота.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Сертифицирани хранителни добавки (Алое Вера)",
                "Продукти за ежедневието и лична хигиена",
                "Иновативна козметика и парфюми",
                "Здравословен начин на живот за теб и семейството ти"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <HeartPulse className="text-orange-500 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all">
                Искам безплатна консултация
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Благодарение на Атанас и системата, успях да генерирам допълнителен доход още на втория месец. Подкрепата е невероятна и винаги има към кого да се обърна!",
      author: "Мария Иванова",
      role: "Партньор от 6 месеца"
    },
    {
      text: "Никога не съм се занимавал с онлайн бизнес, но обученията ми дадоха увереност. Вече имам повече време за децата си и работя от вкъщи.",
      author: "Георги Димитров",
      role: "Партньор от 1 година"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Какво казват хората от екипа
          </h2>
        </FadeIn>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="h-full">
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 relative h-full flex flex-col">
                <div className="flex gap-1 text-orange-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 flex-grow">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl shrink-0">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{test.author}</p>
                    <p className="text-sm text-slate-500">{test.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden max-w-md mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative flex flex-col min-h-[300px]"
            >
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 text-lg italic mb-8 flex-grow">"{testimonials[currentIndex].text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl shrink-0">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-500 transition-colors"
              aria-label="Предишно ревю"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-orange-500' : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-500 transition-colors"
              aria-label="Следващо ревю"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как да започна собствен бизнес с LR Health & Beauty?",
      answer: "Стартирането на бизнес с LR е лесно и не изисква голям начален капитал. Получавате достъп до доказана система за обучение, личен ментор и висококачествени продукти. Можете да работите от вкъщи и да изградите стабилен пасивен доход."
    },
    {
      question: "Какво прави продуктите на LR уникални и качествени?",
      answer: "Продуктите на LR са произведени в Германия (Made in Germany) и преминават строг контрол на качеството от независими институти като SGS Institut Fresenius. Особено популярни са нашите сертифицирани гелове за пиене с Алое Вера, иновативна козметика и парфюми."
    },
    {
      question: "Колко пари мога да спечеля като партньор на LR?",
      answer: "Доходът ви зависи изцяло от вашата активност и отдаденост. Бизнес моделът на LR (мрежов маркетинг) предлага неограничени възможности – от допълнителен доход от няколкостотин лева до финансова независимост и уникална автомобилна концепция при постигане на определени нива."
    },
    {
      question: "Трябва ли да имам опит в продажбите или мрежовия маркетинг?",
      answer: "Не, не ви е необходим предишен опит. Ние предоставяме пълно обучение, готови стратегии за дигитален маркетинг и постоянна подкрепа от екипа. Успехът ви се гради на искрената препоръка на продукти, които сами ползвате и харесвате."
    },
    {
      question: "Има ли задължителни месечни покупки?",
      answer: "Не, в LR няма задължителни месечни покупки или скрити такси. Вие сами решавате кога и колко да поръчвате, спрямо вашите нужди и целите на вашия бизнес."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Често задавани въпроси
          </h2>
          <p className="text-lg text-slate-600">
            Всичко, което трябва да знаете за бизнес възможността и продуктите на LR Health & Beauty.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={openIndex === idx}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`text-orange-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', income: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', income: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-10 md:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-6 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 md:mb-4">Направи първата крачка</h3>
                <p className="text-orange-100 text-sm md:text-base mb-6 md:mb-8">
                  Остави своите контакти и аз ще се свържа с теб лично, за да обсъдим как можем да работим заедно.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-orange-200 shrink-0" />
                  <span className="text-sm md:text-base">0894 959 255</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-orange-200 shrink-0" />
                  <span className="break-all text-sm md:text-base">atanas1978online@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-6 md:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Благодаря ти!</h4>
                  <p className="text-slate-600">Заявката ти е приета успешно. Ще се свържа с теб до 24 часа.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-orange-500 font-medium hover:underline"
                  >
                    Изпрати нова заявка
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Име и фамилия</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm md:text-base"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Телефон за връзка</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm md:text-base"
                      placeholder="08XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Имейл адрес</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm md:text-base"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="income" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Какъв доход искате да изкарвате?</label>
                    <select 
                      id="income" 
                      required
                      value={formData.income}
                      onChange={(e) => setFormData({...formData, income: e.target.value})}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white text-sm md:text-base"
                    >
                      <option value="" disabled>Изберете желаният доход</option>
                      <option value="200-500 евро">200-500 евро</option>
                      <option value="500-1000 евро">500-1000 евро</option>
                      <option value="1000+ евро">1000+ евро</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all shadow-lg mt-2 md:mt-4"
                  >
                    Изпрати заявка
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-2 md:mt-4">
                    Вашите данни са защитени и ще бъдат използвани само за връзка с вас.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-heading font-bold text-white tracking-tight mb-4 inline-block">
              Атанас<span className="text-orange-500">.</span>
            </a>
            <p className="text-sm max-w-xs">
              Независим партньор на LR Health & Beauty. Помагам на хората да изградят успешен онлайн бизнес и да подобрят начина си на живот.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Бързи връзки</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solution" className="hover:text-orange-400 transition-colors">Възможността</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-400 transition-colors">Как работи</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">За мен</a></li>
              <li><a href="#products" className="hover:text-orange-400 transition-colors">Продукти</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Контакти</h4>
            <ul className="space-y-2 text-sm">
              <li>Атанас Атанасов</li>
              <li>Тел: <a href="tel:0894959255" className="hover:text-orange-400 transition-colors">0894 959 255</a></li>
              <li>Имейл: <a href="mailto:atanas1978online@gmail.com" className="hover:text-orange-400 transition-colors">atanas1978online@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>&copy; {new Date().getFullYear()} Атанас Атанасов. Всички права запазени.</p>
            <p className="text-xs text-slate-500">
              Изработен от <a href="https://www.estudio.bg/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors">estudio.bg</a>
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-xs md:text-right">
            Този сайт е собственост на независим партньор и не е официален сайт на LR Health & Beauty.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <a 
        href="#contact"
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl shadow-orange-500/30 flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Contact"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <TargetAudience />
        <HowItWorks />
        <About />
        <VideoSection />
        <Products />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
