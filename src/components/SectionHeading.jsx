export default function SectionHeading({ title, subtitle, align = 'center', accent = true }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <h2 className="font-serif text-3xl font-bold leading-tight text-warm-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-warm-500 lg:text-xl ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
      {accent && (
        <div
          className={`mt-4 h-1 w-16 rounded-full bg-primary-400 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      )}
    </div>
  );
}
