import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const destinations = [
  { name: 'Vietnam', slug: '/vietnam' },
  { name: 'Bali', slug: '/bali' },
  { name: 'Thailand', slug: '/thailand' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (path) => pathname === path;
  const isDestinationActive = destinations.some((d) => pathname === d.slug);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Click outside dropdown
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-[0_1px_3px_rgba(28,25,23,0.08)] backdrop-blur-md'
            : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="shrink-0">
              <span className="font-serif text-2xl font-bold">
                <span className="text-primary-500">Glow</span>
                <span className="text-warm-900">Trips</span>
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <NavLink to="/" active={isActive('/')}>
                Home
              </NavLink>

              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isDestinationActive
                      ? 'text-primary-600'
                      : 'text-warm-600 hover:text-warm-900'
                  }`}
                >
                  Destinations
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 rounded-xl bg-white py-2 shadow-lg ring-1 ring-warm-200/60 transition-all duration-200 ${
                    dropdownOpen
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-2 opacity-0'
                  }`}
                >
                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      to={d.slug}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(d.slug)
                          ? 'bg-primary-50 font-medium text-primary-700'
                          : 'text-warm-600 hover:bg-warm-50 hover:text-warm-900'
                      }`}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/about" active={isActive('/about')}>
                About
              </NavLink>
            </div>

            <a
              href="https://wa.me/918708108321?text=Hi!%20I'd%20like%20to%20know%20more%20about%20GlowTrips%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-primary-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600 md:inline-flex"
            >
              Contact Us
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg p-2 text-warm-600 transition-colors hover:bg-warm-100 hover:text-warm-900 md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 top-16 z-[60] bg-black/20 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed bottom-0 right-0 top-16 z-[70] w-72 overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-1 p-5">
          <MobileLink to="/" active={isActive('/')}>
            Home
          </MobileLink>

          <p className="mb-1 mt-4 px-3 text-[11px] font-semibold uppercase tracking-widest text-warm-400">
            Destinations
          </p>
          {destinations.map((d) => (
            <MobileLink key={d.slug} to={d.slug} active={isActive(d.slug)} indent>
              {d.name}
            </MobileLink>
          ))}

          <MobileLink to="/about" active={isActive('/about')}>
            About
          </MobileLink>

          <div className="mt-6 border-t border-warm-100 pt-5">
            <a
              href="https://wa.me/918708108321?text=Hi!%20I'd%20like%20to%20know%20more%20about%20GlowTrips%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium transition-colors ${
        active ? 'text-primary-600' : 'text-warm-600 hover:text-warm-900'
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary-500" />
      )}
    </Link>
  );
}

function MobileLink({ to, active, indent, children }) {
  return (
    <Link
      to={to}
      className={`rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
        indent ? 'pl-6' : ''
      } ${
        active
          ? 'bg-primary-50 text-primary-700'
          : 'text-warm-600 hover:bg-warm-50 hover:text-warm-900'
      }`}
    >
      {children}
    </Link>
  );
}
