import { Clock, MapPin, Check } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

const destinationImages = {
  vietnam:
    'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format',
  bali:
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format',
  thailand:
    'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop&auto=format',
};

const destinationLabels = {
  vietnam: 'Vietnam',
  bali: 'Bali',
  thailand: 'Thailand',
};

export default function PackageCard({ pkg }) {
  const image = destinationImages[pkg.destination] || destinationImages.vietnam;
  const destinationLabel = destinationLabels[pkg.destination] || pkg.destination;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${pkg.name} — ${destinationLabel} travel package`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {destinationLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-xl font-bold leading-snug text-warm-900 sm:text-2xl">
          {pkg.name}
        </h3>

        {/* Duration & Cities */}
        <div className="mt-3 flex flex-col gap-1.5 text-sm text-warm-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary-500" />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary-500" />
            {pkg.cities}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-xs uppercase tracking-wide text-warm-400">
            Starting from
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-bold text-primary-600">
              ₹{pkg.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-warm-400">/person</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-4 flex-1 space-y-1.5">
          {pkg.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-warm-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              {h}
            </li>
          ))}
        </ul>

        {/* Includes */}
        <p className="mt-3 text-xs text-warm-400">
          <span className="font-medium text-warm-500">Includes:</span>{' '}
          {pkg.includes}
        </p>

        {/* Best For Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {pkg.bestFor.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <WhatsAppCTA
          message={pkg.whatsappMessage}
          label="Book Now"
          className="mt-5 w-full py-3 text-sm"
        />
      </div>
    </div>
  );
}
