import DestinationPage from '../components/DestinationPage';

const baliConfig = {
  name: 'Bali',
  destinationKey: 'bali',
  tagline: 'Where every sunrise feels like magic',
  heroImage:
    'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&h=900&fit=crop&auto=format&q=80',
  quickInfo: [
    { type: 'bestTime', label: 'Best Time', value: 'April \u2013 October' },
    { type: 'visa', label: 'Visa', value: 'Visa on arrival for Indians' },
    { type: 'currency', label: 'Currency', value: 'Indonesian Rupiah (IDR)' },
    { type: 'language', label: 'Language', value: 'Terima kasih = Thank you' },
  ],
  experiences: [
    {
      emoji: '\ud83c\udf3e',
      title: 'Rice Terrace Walks',
      description:
        'Stroll through Tegalalang\u2019s cascading emerald paddies and feel the rhythm of Bali\u2019s ancient irrigation system.',
    },
    {
      emoji: '\ud83d\ude4f',
      title: 'Temple Ceremonies',
      description:
        'Witness sacred rituals at sea-cliff temples while offerings of flowers and incense drift on the ocean breeze.',
    },
    {
      emoji: '\ud83c\udf05',
      title: 'Beach Sunsets',
      description:
        'Watch the sky explode in gold and coral from Uluwatu\u2019s cliffs or Seminyak\u2019s black-sand shores.',
    },
    {
      emoji: '\ud83e\udd3f',
      title: 'Snorkeling',
      description:
        'Dive into crystal-clear waters around Nusa Penida and swim alongside manta rays and vibrant coral gardens.',
    },
    {
      emoji: '\ud83d\udc86',
      title: 'Spa Rituals',
      description:
        'Surrender to Balinese massage, flower baths, and healing traditions perfected over centuries.',
    },
    {
      emoji: '\ud83d\udc83',
      title: 'Kecak Dance',
      description:
        'Experience the mesmerising fire dance at Uluwatu as the sun sets and a chorus of voices fills the night.',
    },
  ],
};

export default function Bali() {
  return <DestinationPage config={baliConfig} />;
}
