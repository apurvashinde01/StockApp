import { Stock } from './stock';

export const STOCK: Stock[] = [
  {
    id: 1,
    name: 'Google',
    price: 100, d1: 70, d2: 60, d3: 75, d4: 80, d5: 140, prediction: 0,
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/color/48/000000/google-logo.png'
  },

  {
    id: 2,
    name: 'Facebook',
    price: 200, d1: 60, d2: 76, d3: 75, d4: 15, d5: 140, prediction: 0,
    // prediction: (d1 + d2 + d3 = d4 + d5) / 5;
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/color/48/000000/facebook.png'
  },

  {
    id: 3, name: 'Microsoft',
    price: 300, d1: 80, d2: 76, d3: 75, d4: 15, d5: 120, prediction: 0,
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/color/48/000000/windows-logo.png'
  },

  {
    id: 4,
    name: 'Amazon',
    price: 400, d1: 100, d2: 76, d3: 75, d4: 15, d5: 40, prediction: 0,
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/color/48/000000/amazon.png'
  },
  {
    id: 5,
    name: 'Apple',
    price: 400, d1: 100, d2: 76, d3: 75, d4: 15, d5: 40, prediction: 0,
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/ios-glyphs/30/000000/mac-os.png'
  },
  {
    id: 6,
    name: 'Oracle',
    price: 400, d1: 100, d2: 76, d3: 75, d4: 15, d5: 40, prediction: 0,
    currency: 'USD', searchTime: '',
    logo: 'https://img.icons8.com/color/48/000000/oracle-logo.png'
  }
];
