import { packages, pricingDisclaimer } from '../data/packages';
import SectionHeading from './SectionHeading';
import PackageCard from './PackageCard';
import WhatsAppCTA from './WhatsAppCTA';
import useScrollAnimations from '../hooks/useScrollAnimations';
import { Phone, Stamp, Sun, Banknote, Languages } from 'lucide-react';

const infoIcons = {
  visa: Stamp,
  bestTime: Sun,
  currency: Banknote,
  language: Languages,
};

export default function DestinationPage({ config }) {
  useScrollAnimations();

  const {
    name,
    destinationKey,
    tagline,
    heroImage,
    quickInfo,
    experiences,
  } = config;

  const destPackages = packages.filter((p) => p.destination === destinationKey);

  return (
    <>
      <section className="relative isolate h-[60vh] min-h-[420px] overflow-hidden sm:h-[70vh]">
        <img
          src={heroImage}
          alt={`Scenic ${name} landscape showcasing its natural beauty`}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/30 to-warm-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/40 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
            <span className="mb-3 inline-block rounded-full border border-primary-400/40 bg-primary-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-300 backdrop-blur-sm">
              Explore {name}
            </span>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {name}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/80 sm:text-xl">
              {tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate grid grid-cols-2 gap-3 rounded-2xl border border-warm-200/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:grid-cols-4 sm:gap-4 sm:p-6">
            {quickInfo.map((item) => {
              const Icon = infoIcons[item.type] || Sun;
              return (
                <div key={item.type} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-warm-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium leading-snug text-warm-800">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title={`${name} Tour Packages`}
              subtitle={`Handpicked itineraries for every kind of ${name} traveler`}
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {destPackages.map((pkg, i) => (
              <div key={pkg.id} className={`scroll-animate ${i > 0 ? `animate-delay-${i * 100}` : ''}`}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-warm-400 sm:text-sm">
            {pricingDisclaimer}
          </p>
        </div>
      </section>

      <section className="bg-cream-dark py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title={`What You'll Experience in ${name}`}
              subtitle="The moments that make this destination unforgettable"
            />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`scroll-animate group relative overflow-hidden rounded-2xl border border-warm-200/50 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg sm:p-6 ${i > 0 && i < 4 ? `animate-delay-${i * 100}` : ''}`}
              >
                <span className="text-3xl sm:text-4xl" role="img" aria-label={exp.title}>
                  {exp.emoji}
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-warm-900 sm:text-lg">
                  {exp.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-warm-500 sm:text-sm">
                  {exp.description}
                </p>

                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-tl-2xl bg-primary-400/0 transition-colors duration-300 group-hover:bg-primary-400/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-cream to-accent-50/30" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-warm-400) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="scroll-animate mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Can't decide? Let us help!"
            subtitle={`Tell us your dates and preferences — we'll craft the perfect ${name} itinerary just for you.`}
          />

          <div className="mt-8 flex flex-col items-center gap-4">
            <WhatsAppCTA
              message={`Hi! I'm interested in visiting ${name}. Can you help me choose the right package?`}
              label={`Plan My ${name} Trip`}
              className="px-8 py-3.5 text-base"
            />

            <div className="flex items-center gap-2 text-sm text-warm-500">
              <Phone className="h-4 w-4" />
              <span>Or call us at</span>
              <a
                href="tel:+918708108321"
                className="font-semibold text-warm-700 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-600"
              >
                +91 8708108321
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
