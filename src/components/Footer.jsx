import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Privacy Policy', to: '/privacy' },
  { name: 'Terms & Conditions', to: '/terms' },
];

const destinations = [
  { name: 'Vietnam', to: '/vietnam' },
  { name: 'Bali', to: '/bali' },
  { name: 'Thailand', to: '/thailand' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900">
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Logo + tagline */}
        <div className="mb-10">
          <Link to="/" className="inline-block">
            <span className="font-serif text-3xl font-bold">
              <span className="text-primary-400">Glow</span>
              <span className="text-white">Trips</span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-warm-400">
            Curated travel experiences to Southeast Asia&apos;s most
            breathtaking destinations.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warm-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-warm-400 transition-colors hover:text-primary-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warm-500">
              Destinations
            </h3>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest.to}>
                  <Link
                    to={dest.to}
                    className="text-warm-400 transition-colors hover:text-primary-400"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warm-500">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+918708108321"
                  className="inline-flex items-center gap-2 text-warm-400 transition-colors hover:text-primary-400"
                >
                  <Phone className="h-4 w-4" />
                  +91 8708108321
                </a>
              </li>
              <li>
                <a
                  href="mailto:anjal.malik4117@gmail.com"
                  className="inline-flex items-center gap-2 text-warm-400 transition-colors hover:text-primary-400"
                >
                  <Mail className="h-4 w-4" />
                  anjal.malik4117@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918708108321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm-400 transition-colors hover:text-primary-400"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-warm-800 pt-8 text-sm text-warm-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} GlowTrips. All rights reserved.
          </p>
          <p>
            Owned by{' '}
            <span className="font-medium text-warm-400">Malk Inn</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
