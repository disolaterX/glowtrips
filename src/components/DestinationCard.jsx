import { Link } from 'react-router-dom';

export default function DestinationCard({ name, slug, image, tagline, packageCount }) {
  return (
    <Link
      to={slug}
      className="group relative block overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4]"
    >
      <img
        src={image}
        alt={`${name} travel destination — ${tagline}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          {name}
        </h3>
        {tagline && (
          <p className="mt-1 text-sm text-white/80">{tagline}</p>
        )}
        {packageCount != null && (
          <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-300 backdrop-blur-sm">
            {packageCount} {packageCount === 1 ? 'Package' : 'Packages'}
          </span>
        )}
      </div>
    </Link>
  );
}
