import { packages } from '../data/packages';
import SectionHeading from '../components/SectionHeading';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import WhatsAppCTA from '../components/WhatsAppCTA';
import useScrollAnimations from '../hooks/useScrollAnimations';

const featuredIds = ['vietnam-heritage', 'bali-paradise', 'thailand-beach'];
const featuredPackages = featuredIds
  .map((id) => packages.find((p) => p.id === id))
  .filter(Boolean);

const destinations = [
  {
    name: 'Vietnam',
    slug: '/vietnam',
    tagline: 'From ancient temples to emerald bays',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80&auto=format',
    packageCount: packages.filter((p) => p.destination === 'vietnam').length,
  },
  {
    name: 'Bali',
    slug: '/bali',
    tagline: 'Where every sunrise feels like magic',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format',
    packageCount: packages.filter((p) => p.destination === 'bali').length,
  },
  {
    name: 'Thailand',
    slug: '/thailand',
    tagline: 'Beaches, temples, and endless smiles',
    image:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80&auto=format',
    packageCount: packages.filter((p) => p.destination === 'thailand').length,
  },
];

const steps = [
  { emoji: '\u{1F9ED}', title: 'Browse', description: 'Explore our curated packages' },
  { emoji: '\u{1F4AC}', title: 'Connect', description: 'Chat with us on WhatsApp' },
  { emoji: '\u{1F4CB}', title: 'Plan', description: 'We create your personalized itinerary' },
  { emoji: '\u2708\uFE0F', title: 'Travel', description: 'Pack your bags and make memories' },
];

const stats = [
  { value: '500+', label: 'Happy Travelers' },
  { value: '3', label: 'Dream Destinations' },
  { value: '100%', label: 'Personalized Itineraries' },
];

const GRAIN_SVG =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

export default function Home() {
  useScrollAnimations();

  const scrollToPackages = (e) => {
    e.preventDefault();
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="-mt-16 relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80&auto=format"
          alt="Vietnam rice terraces at sunset — Southeast Asia travel destination"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/60 via-warm-900/40 to-warm-900/70" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: GRAIN_SVG }} />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 backdrop-blur-sm">
            Southeast Asia Awaits
          </span>

          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Next Adventure
            <br />
            <span className="text-primary-300">Starts with a Conversation</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Handcrafted itineraries for Vietnam, Bali &amp; Thailand — planned around you, not a brochure.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#packages"
              onClick={scrollToPackages}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 sm:text-base"
            >
              Explore Packages
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <WhatsAppCTA
              message="Hi! I'd like to plan my dream trip to Southeast Asia. Can you help?"
              label="Plan My Trip"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:text-base [&]:bg-transparent [&]:hover:bg-white/15"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-2">
            <div className="h-2 w-1 animate-[scrollPulse_2s_ease-in-out_infinite] rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title="Where Would You Like to Go?"
              subtitle="Three incredible destinations, each with its own rhythm and magic. Pick the one that calls to you."
            />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {destinations.map((dest, i) => (
              <div
                key={dest.slug}
                className={`scroll-animate rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${i > 0 ? `animate-delay-${i * 100}` : ''}`}
              >
                <DestinationCard
                  name={dest.name}
                  slug={dest.slug}
                  image={dest.image}
                  tagline={dest.tagline}
                  packageCount={dest.packageCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section id="packages" className="bg-cream-dark py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title="Popular Packages"
              subtitle="Our most-loved itineraries — tried, tested, and adored by hundreds of travelers."
            />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPackages.map((pkg, i) => (
              <div key={pkg.id} className={`scroll-animate ${i > 0 ? `animate-delay-${i * 100}` : ''}`}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {destinations.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = d.slug;
                }}
                className="group inline-flex items-center gap-1.5 rounded-full border border-warm-200 bg-white px-5 py-2.5 text-sm font-medium text-warm-600 transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-sm"
              >
                All {d.name} Packages
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title="How GlowTrips Works"
              subtitle="From browsing to boarding — we keep it simple, personal, and stress-free."
            />
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent lg:block" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className={`scroll-animate relative text-center ${i > 0 ? `animate-delay-${i * 100}` : ''}`}>
                  <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200" />
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-secondary-50 shadow-sm">
                      <span className="text-3xl" role="img" aria-label={step.title}>
                        {step.emoji}
                      </span>
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white shadow-sm">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-warm-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-warm-100 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`scroll-animate text-center ${i > 0 ? `animate-delay-${i * 100}` : ''} ${i < stats.length - 1 ? 'sm:border-r sm:border-warm-100' : ''}`}
              >
                <div className="font-serif text-4xl font-bold text-primary-500 sm:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm font-medium tracking-wide text-warm-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 py-20 sm:py-28">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="scroll-animate relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            No commitment. Just a friendly chat about your dream trip. We'll handle the planning — you bring the excitement.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <WhatsAppCTA
              message="Hi! I'm ready to plan my dream trip. Let's chat!"
              label="Let's Plan Your Trip"
              className="rounded-xl px-8 py-4 text-base font-bold shadow-lg shadow-black/15 transition-all hover:shadow-xl sm:text-lg"
            />

            <div className="flex items-center gap-3 text-white/70">
              <span className="text-sm">or call us at</span>
              <a
                href="tel:+918708108321"
                className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
              >
                +91 87081 08321
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(6px); }
        }
      `}</style>
    </>
  );
}
