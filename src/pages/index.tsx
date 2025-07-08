import Head from "next/head";
import { useState, useEffect, GetStaticProps } from "react";
import {
  ChevronDown,
  Phone,
  Hand,
  Star,
  Award,
  Heart,
  Clock,
  MapPin,
  Instagram,
} from "lucide-react";

interface HomePageProps {
  buildTime: string;
}

export default function HomePage({ buildTime }: HomePageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      // Mo-Fr: 08:00-17:00
      setIsBusinessHours(day >= 1 && day <= 5 && hour >= 8 && hour < 17);
    };

    window.addEventListener("scroll", handleScroll);
    checkBusinessHours();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Fensterreinigung",
      href: "/leistungen/fensterreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/window-cleaning_m7hork.avif",
      description: "Professionelle Fensterreinigung für kristallklare Sicht",
    },
    {
      name: "Fassadenreinigung",
      href: "/leistungen/fassadenreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/facade-cleaning_m7hork.avif",
      description: "Schonende Fassadenreinigung für alle Oberflächen",
    },
    {
      name: "Umzugsreinigung",
      href: "/leistungen/umzugsreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/moving-cleaning_m7hork.avif",
      description: "Gründliche Endreinigung für Ihren Umzug",
    },
    {
      name: "Baureinigung",
      href: "/leistungen/baureinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/construction-cleaning_m7hork.avif",
      description: "Professionelle Baureinigung nach Renovierung",
    },
    {
      name: "Unterhaltsreinigung",
      href: "/leistungen/unterhaltsreinigung",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/maintenance-cleaning_m7hork.avif",
      description: "Regelmäßige Reinigung für Büros und Betriebe",
    },
    {
      name: "Solarpanel reinigen",
      href: "/leistungen/solarpanel-reinigen",
      image:
        "https://res.cloudinary.com/dwlk9of7h/image/upload/w_400,h_200,c_fill,q_auto,f_auto/v1748344821/solar-cleaning_m7hork.avif",
      description: "Effiziente Reinigung für maximale Solarleistung",
    },
  ];

  const whyFeatures = [
    {
      icon: Award,
      title: "Über 10 Jahre Erfahrung",
      description: "Langjährige Expertise in der professionellen Reinigung",
    },
    {
      icon: Heart,
      title: "Inhabergeführt & persönlich",
      description: "Persönlicher Service und direkter Kontakt zum Inhaber",
    },
    {
      icon: Clock,
      title: "Zuverlässig & termingerecht",
      description: "Pünktliche und verlässliche Ausführung aller Arbeiten",
    },
    {
      icon: MapPin,
      title: "Regional verwurzelt",
      description: "Lokaler Betrieb mit kurzen Wegen in der Region Winterthur",
    },
  ];

  const reviews = [
    {
      name: "Thomas Müller",
      company: "Müller AG",
      text: "CleanWin reinigt unsere Büroräume seit 3 Jahren zuverlässig und gründlich. Das Team ist professionell und flexibel - absolut empfehlenswert!",
      rating: 5,
    },
    {
      name: "Sarah Zimmermann",
      company: "Praxis Dr. Zimmermann",
      text: "Die hygienische Reinigung unserer Praxisräume ist bei CleanWin in besten Händen. Termine werden zuverlässig eingehalten.",
      rating: 5,
    },
    {
      name: "Martin Weber",
      company: "Privathaushalt",
      text: "Nach unserem Umzug hat CleanWin eine perfekte Endreinigung gemacht. Alles blitzsauber - wir buchen sie gerne wieder.",
      rating: 5,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          CleanWin - Professionelle Reinigung in Winterthur | Fensterreinigung &
          mehr
        </title>
        <meta
          name="description"
          content="✓ Professionelle Reinigungsservices in Winterthur ✓ Fensterreinigung ✓ Büroreinigung ✓ Umzugsreinigung ✓ Über 10 Jahre Erfahrung ✓ Kostenlose Offerte"
        />
        <meta
          name="keywords"
          content="Reinigung Winterthur, Fensterreinigung, Büroreinigung, Umzugsreinigung, Fassadenreinigung, CleanWin"
        />
        <meta
          property="og:title"
          content="CleanWin - Professionelle Reinigung in Winterthur"
        />
        <meta
          property="og:description"
          content="Professionelle Reinigungsservices mit über 10 Jahren Erfahrung. Fensterreinigung, Büroreinigung und mehr."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cleanwin.ch" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1748344821/cleanwin-og-image.avif"
        />
        <link rel="canonical" href="https://cleanwin.ch" />

        {/* Schema.org structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CleanWin",
            description:
              "Professionelle Reinigungsservices in Winterthur und Umgebung",
            url: "https://cleanwin.ch",
            telephone: "+41522020100",
            email: "info@cleanwin.ch",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rychenbergstrasse 223",
              addressLocality: "Winterthur",
              postalCode: "8404",
              addressCountry: "CH",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "47.5034",
                longitude: "8.7203",
              },
              geoRadius: "25000",
            },
            serviceType: [
              "Fensterreinigung",
              "Büroreinigung",
              "Fassadenreinigung",
              "Umzugsreinigung",
              "Unterhaltsreinigung",
              "Baureinigung",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "150",
            },
          })}
        </script>
      </Head>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752003683/cleanwin-logo_ysvfv0.avif"
              alt="CleanWin Logo - Professionelle Reinigung Winterthur"
              className="h-12 md:h-14"
              width="180"
              height="56"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Leistungen Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 py-2 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#e7027e]"
                    : "text-white hover:text-gray-200"
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Leistungen
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:text-[#e7027e] hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/ueber-uns"
              className={`py-2 font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#e7027e]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Über uns
            </a>

            <a
              href="/referenzen"
              className={`py-2 font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#e7027e]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Referenzen
            </a>

            {/* Contact Button */}
            <a
              href="/kontakt"
              className="flex items-center gap-2 bg-[#e7027e] text-white px-4 py-3 rounded-full font-medium hover:bg-[#bc0263] transition-colors duration-200"
            >
              <Hand className="w-4 h-4" />
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menü öffnen"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Leistungen</h3>
                <div className="space-y-2 ml-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-[#e7027e]"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/ueber-uns"
                className="block text-gray-900 hover:text-[#e7027e]"
              >
                Über uns
              </a>
              <a
                href="/referenzen"
                className="block text-gray-900 hover:text-[#e7027e]"
              >
                Referenzen
              </a>
              <a href="/kontakt" className="block text-[#e7027e] font-medium">
                Kontakt
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dwlk9of7h/image/upload/w_1920,h_800,c_fill,q_auto,f_auto/v1748344821/comprised_m7hork.avif)",
              aspectRatio: "2.4/1",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-6"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Professionelle Reinigung in Winterthur für Sauberkeit &
              Begeisterung
            </h1>
            <p
              className="text-lg md:text-xl font-light opacity-95 mb-8"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Mit mehr als 10 Jahren Erfahrung reinigt CleanWin Fenster, Büros,
              Fassaden und mehr.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 mb-8">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                aria-label="Google Logo"
              >
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-medium">5.0 Google</span>
            </div>

            <div>
              <a
                href="/kontakt"
                className="inline-block bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
              >
                Jetzt unverbindlich kontaktieren
              </a>
            </div>
          </div>
        </section>

        {/* About Services Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Regionaler Reinigungsbetrieb für Privat, Gewerbe & Industrie
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  CleanWin ist Ihr vertrauensvoller Partner für professionelle
                  Reinigungsdienstleistungen in der Region Winterthur. Seit über
                  10 Jahren bieten wir umfassende Lösungen für Fensterreinigung,
                  Büroreinigung, Fassadenreinigung und Spezialreinigungen. Unser
                  erfahrenes Team arbeitet mit modernsten Techniken und
                  umweltfreundlichen Produkten, um höchste Qualität und
                  Kundenzufriedenheit zu gewährleisten.
                </p>
                <a
                  href="#services"
                  className="inline-block bg-[#e7027e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#bc0263] transition-colors duration-300"
                >
                  Leistungen Entdecken
                </a>
              </div>

              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1748417853/ross-samir-farbxpress_gsnje4.avif"
                  alt="CleanWin Team bei der Arbeit - Professionelle Reinigung"
                  className="w-full h-64 md:h-80 object-cover object-top rounded-lg"
                  width="500"
                  height="320"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="font-semibold text-gray-900">
                    Unser erfahrenes Team
                  </div>
                  <div className="text-sm text-gray-600">
                    Über 10 Jahre Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why CleanWin Section */}
        <section className="bg-gradient-to-br from-[#eddde5] to-[#f7f2f5] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Warum CleanWin wählen?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vertrauen Sie auf unsere langjährige Erfahrung und
                professionelle Arbeitsweise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-[#e7027e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#e7027e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professionelle Reinigungsdienstleistungen für jeden Bedarf
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-[#e7027e]"
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={`${service.name} - CleanWin Winterthur`}
                      className="w-full h-48 object-cover"
                      width="400"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                      <p className="text-sm opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="bg-gradient-to-br from-[#eddde5] to-[#f7f2f5] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Das sagen unsere Kunden
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  5.0 von 5 Sternen auf Google
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{review.text}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-gray-600">{review.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dwlk9of7h/image/upload/f_webp,q_90,w_1920,h_600,c_fill/v1748418221/farbxpress-footerImage_l29cqf.avif)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <h2
                className="text-3xl md:text-6xl font-bold text-white mb-8"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                CleanWin – persönlich, zuverlässig, hochwertig
              </h2>
              <a
                href="/kontakt"
                className="inline-block bg-[#e7027e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#bc0263] hover:scale-105 transition-all duration-300"
              >
                Jetzt unverbindlich kontaktieren
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-white mb-4">CleanWin GmbH</h3>
              <div className="text-gray-400 space-y-2 text-sm">
                <div>Rychenbergstrasse 223</div>
                <div>8404 Winterthur</div>
                <div>Schweiz</div>
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href="tel:+41522020100"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#e7027e] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +41 52 202 01 00
                </a>
                <div className="text-gray-400 text-sm">info@cleanwin.ch</div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-[#e7027e] rounded transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium text-white mb-4">Leistungen</h4>
              <div className="space-y-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-sm text-gray-400 hover:text-[#e7027e] transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-medium text-white mb-4">Servicegebiete</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Winterthur, Zürich, Basel</div>
                <div>Effretikon, Seuzach</div>
                <div>Wiesendangen, Neftenbach</div>
                <div>Frauenfeld, Uster</div>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h4 className="font-medium text-white mb-4">Weitere Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>24/7 Notfallreinigung</div>
                <div>Kostenlose Besichtigung</div>
                <div>Individuelle Angebote</div>
                <div>Regelmäßige Termine</div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span>© 2025 CleanWin. Alle Rechte vorbehalten.</span>
              <span>Gemacht mit ♥️ in Winterthur</span>
            </div>
            <a
              href="/datenschutz"
              className="hover:text-[#e7027e] transition-colors duration-200"
            >
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 16s linear infinite;
        }
      `}</style>
    </>
  );
}

// Static Site Generation for SEO
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
    revalidate: 3600, // Revalidate every hour
  };
};
