export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'e-tron GT',
      models: [
        {
          name: 'e-tron GT quattro',
          price: '101.600',
        },
        {
          name: 'RS e-tron GT',
          price: '140.000',
        },
      ],
    },
    {
      name: 'e-tron',
      models: [
        {
          name: 'Audi e-tron',
          price: '69.100',
        },
        {
          name: 'Audi e-tron Sportback',
          price: '71.350',
        },
        {
          name: 'Audi e-tron S',
          price: '93.800',
        },
        {
          name: 'Audi e-tron S Sportback',
          price: '96.050',
        },
      ],
    },
    {
      name: 'A1',
      models: [
        {
          name: 'A1 Sportback',
          price: '21.200',
        },
        {
          name: 'A1 citycarver',
          price: '23.000',
        },
      ],
    },
    {
      name: 'A3',
      models: [
        {
          name: 'A3 Sportback',
          price: '27.700',
        },
        {
          name: 'A3 Sportback TFSI e',
          price: '38.440',
        },
        {
          name: 'A3 Sportback g-tron',
          price: '32.500',
        },
        {
          name: 'A3 Limousine',
          price: '28.600',
        },
        {
          name: 'S3 Sportback',
          price: '48.500',
        },
        {
          name: 'S3 Limousine',
          price: '49.400',
        },
        {
          name: 'RS 3 Sportback',
          price: '60.000',
        },
        {
          name: 'RS 3 Limousine',
          price: '62.000',
        },
      ],
    },
    {
      name: 'A4',
      models: [
        {
          name: 'A4 Limousine',
          price: '35.250',
        },
        {
          name: 'A4 Avant',
          price: '36.900',
        },
        {
          name: 'A4 Avant g-tron',
          price: '45.000',
        },
        {
          name: 'A4 allroad quattro',
          price: '50.900',
        },
        {
          name: 'S4 Limousine TDI',
          price: '64.750',
        },
        {
          name: 'S4 Avant TDI',
          price: '66.400',
        },
        {
          name: 'RS 4 Avant',
          price: '84.000',
        },
      ],
    },
  ]);
}
