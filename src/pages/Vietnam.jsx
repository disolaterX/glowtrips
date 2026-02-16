import DestinationPage from '../components/DestinationPage';

const vietnamConfig = {
  name: 'Vietnam',
  destinationKey: 'vietnam',
  tagline: 'From ancient temples to emerald bays',
  heroImage:
    'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&h=900&fit=crop&auto=format&q=80',
  quickInfo: [
    { type: 'bestTime', label: 'Best Time', value: 'October – April' },
    { type: 'visa', label: 'Visa', value: 'e-Visa available' },
    { type: 'currency', label: 'Currency', value: 'Vietnamese Dong (VND)' },
    { type: 'language', label: 'Language', value: 'Xin ch\u00e0o = Hello' },
  ],
  experiences: [
    {
      emoji: '\ud83c\udf5c',
      title: 'Street Food',
      description:
        'Slurp ph\u1edf on tiny plastic chairs, crunch b\u00e1nh m\u00ec from roadside carts, and taste dishes you won\u2019t find anywhere else.',
    },
    {
      emoji: '\ud83d\udea3',
      title: 'Ha Long Bay Cruise',
      description:
        'Drift through thousands of limestone karsts rising from emerald waters on an overnight junk-boat cruise.',
    },
    {
      emoji: '\ud83c\udfee',
      title: 'Hoi An Lanterns',
      description:
        'Wander the ancient town after dark when hundreds of silk lanterns turn the streets into a living painting.',
    },
    {
      emoji: '\ud83c\udfdb\ufe0f',
      title: 'Temple Visits',
      description:
        'Explore centuries-old pagodas, the Temple of Literature, and sacred sites wrapped in incense and history.',
    },
    {
      emoji: '\ud83c\udfcd\ufe0f',
      title: 'Motorbike Culture',
      description:
        'Feel the pulse of Vietnam from the back of a motorbike weaving through Hanoi\u2019s organised chaos.',
    },
    {
      emoji: '\u2615',
      title: 'Vietnamese Coffee',
      description:
        'Sip rich, slow-drip c\u00e0 ph\u00ea s\u1eefa \u0111\u00e1 or the famous egg coffee that\u2019s more dessert than drink.',
    },
  ],
};

export default function Vietnam() {
  return <DestinationPage config={vietnamConfig} />;
}
