import { MapPin, MessageCircle, Globe, Wallet, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WhatsAppCTA from '../components/WhatsAppCTA';
import useScrollAnimations from '../hooks/useScrollAnimations';

const values = [
  {
    icon: MapPin,
    title: 'Personalized Itineraries',
    description: 'Every trip planned just for you — your pace, your interests, your budget.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Chat with us anytime, no call centers. Real people, real conversations.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'We know these destinations inside out — the hidden gems, the best seasons, the must-skips.',
  },
  {
    icon: Wallet,
    title: 'No Hidden Costs',
    description: 'Transparent pricing, no surprises. You\'ll know exactly what you\'re paying for.',
  },
];

const GRAIN_SVG =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

export default function About() {
  useScrollAnimations();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-warm-900 py-24 sm:py-32 lg:py-40">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80&auto=format"
          alt="Tropical beach with crystal clear water and lush greenery"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/50 via-warm-900/60 to-warm-900/90" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN_SVG }} />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full border border-primary-400/30 bg-primary-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-300 backdrop-blur-sm">
            Our Story
          </span>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            We Believe Travel Should
            <br />
            <span className="text-primary-300">Feel Personal</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Not mass-produced. Not one-size-fits-all. Every journey we help create starts with a conversation — because the best trips are built around you.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="scroll-animate relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80&auto=format"
                  alt="Travelers exploring a vibrant Southeast Asian market"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-dashed border-primary-200/50" />
            </div>

            <div className="scroll-animate">
              <h2 className="font-serif text-3xl font-bold leading-tight text-warm-900 sm:text-4xl">
                How It All Started
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-primary-400" />

              <div className="mt-8 space-y-4 text-base leading-relaxed text-warm-600 sm:text-lg">
                <p>
                  It started with a love for Southeast Asia — the kind that hits you on a quiet morning in Hoi An, or watching the sun melt into the sea at Uluwatu.
                </p>
                <p>
                  We noticed something: Indian travelers were either stuck with cookie-cutter tour groups, or overwhelmed trying to plan everything themselves. Neither felt right.
                </p>
                <p>
                  So we built <strong className="text-warm-800">GlowTrips</strong> — a travel planning service that sits right in the middle. We do the research, handle the logistics, and craft itineraries that actually match how <em>you</em> want to travel. Whether that's backpacking through Vietnam's highlands or lounging at a Bali cliff-side villa.
                </p>
                <p>
                  And we do it all over WhatsApp. Because planning a trip should feel like chatting with a friend who's been there, not filling out forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="bg-cream-dark py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <SectionHeading
              title="What Makes Us Different"
              subtitle="We're not a big travel agency. We're a small team that genuinely cares about your trip."
            />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="scroll-animate group relative overflow-hidden rounded-2xl border border-warm-200/50 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg sm:p-8"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-warm-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-500 sm:text-base">
                    {item.description}
                  </p>

                  <div className="absolute -bottom-1 -right-1 h-10 w-10 rounded-tl-3xl bg-primary-400/0 transition-colors duration-300 group-hover:bg-primary-400/10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-cream to-accent-50/30" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-warm-400) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center">
            <SectionHeading
              title="Let's Plan Your Trip"
              subtitle="Got questions? Want a custom itinerary? We're just a message away."
            />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {/* WhatsApp CTA Card */}
            <div className="scroll-animate flex flex-col items-center justify-center rounded-2xl border border-[#25D366]/20 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10">
                <svg className="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold text-warm-900">
                Chat With Us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-500">
                The fastest way to start planning. Send us a message and we'll get back to you within the hour.
              </p>
              <WhatsAppCTA
                message="Hi! I'd like to know more about GlowTrips and start planning my trip."
                label="Chat with us on WhatsApp"
                className="mt-6 px-6 py-3.5 text-base"
              />
            </div>

            {/* Other Contact Methods */}
            <div className="scroll-animate flex flex-col rounded-2xl border border-warm-200/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10">
              <h3 className="font-serif text-2xl font-bold text-warm-900">
                Other Ways to Reach Us
              </h3>
              <p className="mt-2 text-sm text-warm-500">
                Prefer to call? We're happy to chat!
              </p>

              <div className="mt-6 flex-1 space-y-5">
                <a
                  href="tel:+918708108321"
                  className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-primary-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800">+91 8708108321</p>
                    <p className="text-sm text-warm-500">Give us a ring</p>
                  </div>
                </a>

                <a
                  href="mailto:anjal.malik4117@gmail.com"
                  className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-primary-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800">anjal.malik4117@gmail.com</p>
                    <p className="text-sm text-warm-500">Drop us a line</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl p-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800">Mon–Sat, 10am–8pm IST</p>
                    <p className="text-sm text-warm-500">We typically reply within a few hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 py-16 sm:py-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="scroll-animate relative mx-auto max-w-2xl px-5 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            Your Next Adventure Is One Message Away
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
            No forms, no waiting, no pressure. Just tell us where you want to go and we'll take it from there.
          </p>
          <WhatsAppCTA
            message="Hi! I'm ready to plan my dream trip. Let's chat!"
            label="Start Planning Now"
            className="mt-8 rounded-xl px-8 py-4 text-base font-bold shadow-lg shadow-black/15 transition-all hover:shadow-xl sm:text-lg"
          />
        </div>
      </section>
    </>
  );
}
