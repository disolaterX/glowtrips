import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

export default function Terms() {
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
          title="Terms of Service"
          subtitle="What to expect when you work with GlowTrips"
          align="left"
        />

        <div className="mt-10 space-y-8 text-warm-700">
          <p className="text-sm italic text-warm-500">Last updated: February 2026</p>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="leading-relaxed">
              Welcome to GlowTrips! By using our services, you agree to these terms. We've written
              them in plain language so you know exactly what you're signing up for. If anything is
              unclear, just ask.
            </p>
          </div>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">1. About GlowTrips</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                GlowTrips is a travel planning and consultation service operated by{' '}
                <strong>Malk Inn</strong>. We help travelers plan personalized trips to Southeast
                Asia, focusing on Vietnam, Bali, and Thailand.
              </p>
              <p className="mt-3">
                We're not a traditional travel agency. Think of us as your travel planning partner.
                We create custom itineraries, recommend trusted partners, and help coordinate your
                bookings, but you're always in control of your trip.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">2. Our Services</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>We offer:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Personalized trip planning and itinerary design</li>
                <li>Recommendations for hotels, tours, and activities</li>
                <li>Coordination with local partners for bookings</li>
                <li>Travel advice and support before and during your trip</li>
              </ul>
              <p className="mt-4">
                <strong>What we don't do:</strong> We don't operate tours, own hotels, or provide
                transportation. We connect you with trusted partners who deliver these services.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              3. Pricing & Payments
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>Important:</strong> All prices shown on our website are starting estimates
                per person on a twin-sharing basis, excluding international flights.
              </p>
              <p className="mt-3">
                Actual costs vary based on travel dates, group size, accommodation choices, and
                customization. We'll provide an exact quote after discussing your specific needs.
              </p>
              <div className="mt-4 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-medium text-primary-900">
                  <strong>Pricing Disclaimer:</strong> All prices are starting prices per person on
                  twin-sharing basis, excluding international flights. Actual cost varies based on
                  travel dates, group size, and customization. Contact us for an exact quote.
                </p>
              </div>
              <p className="mt-4">
                Payments are made directly to GlowTrips (Malk Inn) via bank transfer, UPI, or other
                agreed methods. We'll send you a detailed payment breakdown before you commit.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              4. Booking & Cancellation
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>Booking confirmation:</strong> Your trip is confirmed once we receive your
                payment and send you a booking confirmation.
              </p>
              <p className="mt-3">
                <strong>Cancellation policy:</strong> Cancellation terms depend on the specific
                services booked (hotels, tours, etc.) and how close to your travel date you cancel.
                We'll discuss the cancellation policy for your trip before you book.
              </p>
              <p className="mt-3">
                In general, cancellations made well in advance have more flexible refund options.
                Last-minute cancellations may result in partial or no refunds due to partner
                policies.
              </p>
              <p className="mt-3">
                If you need to cancel, contact us as soon as possible. We'll work with our partners
                to get you the best possible outcome.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              5. Travel Documentation
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>You're responsible for:</strong>
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Having a valid passport (with at least 6 months validity)</li>
                <li>Obtaining necessary visas for your destination</li>
                <li>Getting required vaccinations or health clearances</li>
                <li>Checking travel advisories and entry requirements</li>
              </ul>
              <p className="mt-4">
                We'll provide guidance on visa requirements and travel documentation, but it's your
                responsibility to ensure everything is in order before you travel.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              6. Liability Disclaimer
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                <strong>Please read this carefully:</strong>
              </p>
              <p className="mt-3">
                GlowTrips acts as an intermediary between you and travel service providers (hotels,
                tour operators, airlines, etc.). We carefully select our partners, but we don't
                control their operations.
              </p>
              <p className="mt-3">
                <strong>We're not liable for:</strong>
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Flight delays, cancellations, or changes by airlines</li>
                <li>Hotel service issues, overbooking, or quality concerns</li>
                <li>Tour operator performance or safety incidents</li>
                <li>Natural disasters, political unrest, or force majeure events</li>
                <li>Loss, theft, injury, or illness during your trip</li>
                <li>Changes to local laws, entry requirements, or travel restrictions</li>
              </ul>
              <p className="mt-4">
                <strong>Travel insurance is strongly recommended.</strong> It protects you against
                trip cancellations, medical emergencies, lost luggage, and other unforeseen events.
                We can recommend insurance providers if needed.
              </p>
              <p className="mt-4">
                If something goes wrong during your trip, contact us immediately. We'll do our best
                to help resolve the issue with our partners.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">
              7. Intellectual Property
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                All content on this website, including text, images, itineraries, and design, is
                owned by Malk Inn (GlowTrips) or used with permission.
              </p>
              <p className="mt-3">
                You can browse and share our content for personal use, but please don't copy,
                reproduce, or use it commercially without our permission.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">8. Governing Law</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                These terms are governed by the laws of India. Any disputes will be resolved in
                accordance with Indian law.
              </p>
              <p className="mt-3">
                We hope it never comes to that. If you have concerns, let's talk and work it out.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-warm-900">9. Contact Us</h2>
            <div className="mt-4 space-y-3 leading-relaxed">
              <p>
                Questions about these terms? Want to discuss your trip? We're here to help:
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
                We typically respond within 2-3 business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
