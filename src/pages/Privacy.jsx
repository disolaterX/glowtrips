import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream-light py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-warm-500 transition-colors hover:text-primary-600"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <SectionHeading
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information"
          align="left"
        />

        <div className="mt-10 space-y-8 text-warm-700">
          <p className="text-sm italic text-warm-500">Last updated: February 2026</p>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="leading-relaxed">
              Welcome to GlowTrips, operated by <strong>Malk Inn</strong>. We're a small travel
              consultancy that helps people plan amazing trips to Southeast Asia. This policy
              explains how we handle your personal information when you reach out to us or use our
              services.
            </p>
          </div>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>When you contact us to plan a trip, we collect:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Contact details:</strong> Your name, phone number, and email address
                </li>
                <li>
                  <strong>Travel preferences:</strong> Destination interests, budget range, travel
                  dates, group size, and any special requests
                </li>
                <li>
                  <strong>Conversation history:</strong> Messages exchanged via WhatsApp, phone
                  calls, or email
                </li>
              </ul>
              <p className="mt-4">
                We collect this information directly from you when you reach out through our
                website, WhatsApp, phone, or email.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              2. How We Use Your Information
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>We use your information to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Understand your travel needs and create personalized itineraries</li>
                <li>Communicate with you about your trip plans and bookings</li>
                <li>Coordinate with hotels, tour operators, and other service providers</li>
                <li>Send you booking confirmations, travel documents, and updates</li>
                <li>Provide customer support before, during, and after your trip</li>
                <li>Improve our services based on feedback and preferences</li>
              </ul>
              <p className="mt-4">
                We don't use your information for marketing unless you explicitly ask us to keep you
                updated about new destinations or special offers.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              3. Information Sharing
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>We don't sell your data.</strong> Period.
              </p>
              <p className="mt-3">We may share your information with:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Travel partners:</strong> Hotels, tour operators, and transport providers
                  who need your details to fulfill your bookings
                </li>
                <li>
                  <strong>Payment processors:</strong> If you pay online, your payment information
                  goes directly to secure payment gateways (we don't store card details)
                </li>
                <li>
                  <strong>Legal requirements:</strong> If required by law or to protect our rights
                </li>
              </ul>
              <p className="mt-4">
                All our partners are carefully selected and required to protect your information.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              4. WhatsApp Communication
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                Most of our conversations happen on WhatsApp because it's quick and convenient.
                When you message us on WhatsApp:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Your messages are protected by WhatsApp's end-to-end encryption</li>
                <li>
                  WhatsApp's own privacy policy applies to how they handle your data (we recommend
                  reading it)
                </li>
                <li>We save important trip details from our chats to help plan your itinerary</li>
                <li>You can request to switch to email or phone calls anytime</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">5. Data Security</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                We take reasonable steps to protect your information from unauthorized access, loss,
                or misuse. This includes:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Storing customer data securely with password protection</li>
                <li>Limiting access to your information to only those who need it</li>
                <li>Using secure communication channels</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. We do our best,
                but can't guarantee absolute security.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">6. Your Rights</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the information we have about you
                </li>
                <li>
                  <strong>Correction:</strong> Ask us to update or correct your details
                </li>
                <li>
                  <strong>Deletion:</strong> Request that we delete your information (unless we need
                  it for legal or contractual reasons)
                </li>
                <li>
                  <strong>Opt-out:</strong> Stop receiving promotional messages from us
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, just reach out to us using the contact details
                below.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">7. Cookies & Tracking</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>Good news:</strong> This website doesn't use cookies or tracking scripts. We
                don't collect analytics, track your browsing, or show you ads.
              </p>
              <p className="mt-3">
                If you visit our site, you're just browsing. No data is collected unless you
                actively reach out to us.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              8. Changes to This Policy
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                We may update this policy from time to time. If we make significant changes, we'll
                let you know by updating the "Last updated" date at the top of this page.
              </p>
              <p className="mt-3">
                For major changes that affect how we use your information, we'll notify you directly
                via email or WhatsApp.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">9. Contact Us</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                If you have questions about this privacy policy or how we handle your information,
                we're here to help:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Business Name:</strong> Malk Inn (operating as GlowTrips)
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:anjal.malik4117@gmail.com"
                    className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-500"
                  >
                    anjal.malik4117@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+918708108321"
                    className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-500"
                  >
                    +91 8708108321
                  </a>
                </p>
              </div>
              <p className="mt-4 text-sm text-warm-600">
                We'll respond to your inquiry within 2-3 business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
