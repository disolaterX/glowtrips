import DestinationPage from '../components/DestinationPage';

const thailandConfig = {
  name: 'Thailand',
  destinationKey: 'thailand',
  tagline: 'Beaches, temples, and endless smiles',
  heroImage:
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&h=900&fit=crop&auto=format&q=80',
  quickInfo: [
    { type: 'bestTime', label: 'Best Time', value: 'November \u2013 March' },
    { type: 'visa', label: 'Visa', value: 'Visa on arrival (conditions apply)' },
    { type: 'currency', label: 'Currency', value: 'Thai Baht (THB)' },
    { type: 'language', label: 'Language', value: 'Sawadee = Hello' },
  ],
  experiences: [
    {
      emoji: '🏝️',
      title: 'Island Hopping',
      description:
        'Speed between Phi Phi, Krabi\u2019s four islands, and hidden lagoons where turquoise water meets white sand.',
    },
    {
      emoji: '\ud83c\udf5b',
      title: 'Night Markets',
      description:
        'Graze through sizzling woks, mango sticky rice, and pad thai served on banana leaves under neon lights.',
    },
    {
      emoji: '\u26e9\ufe0f',
      title: 'Temple Tours',
      description:
        'Stand in awe before the Grand Palace, climb to Doi Suthep, and find serenity in Chiang Mai\u2019s ancient wats.',
    },
    {
      emoji: '\ud83d\udc86\u200d\u2642\ufe0f',
      title: 'Thai Massage',
      description:
        'Let centuries-old stretching techniques unknot every muscle \u2014 the ultimate post-flight recovery.',
    },
    {
      emoji: '\ud83c\udf73',
      title: 'Cooking Class',
      description:
        'Shop local markets, pound your own curry paste, and master dishes you\u2019ll cook for years to come.',
    },
    {
      emoji: '\ud83c\udf89',
      title: 'Beach Parties',
      description:
        'Dance barefoot on Koh Phangan\u2019s sands or chill at Phuket\u2019s beach clubs as the bass meets the waves.',
    },
  ],
};

export default function Thailand() {
  return <DestinationPage config={thailandConfig} />;
}
