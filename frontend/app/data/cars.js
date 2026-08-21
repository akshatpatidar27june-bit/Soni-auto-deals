export const cars = [
  {
    id: 'hyundai-creta-2022',
    name: 'Hyundai Creta',
    price: '₹12,50,000',
    year: 2022,
    km: '42,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    description: 'Well-maintained Hyundai Creta with a comfortable interior and smooth automatic transmission.',
  },
  {
    id: 'mahindra-xuv700-2023',
    name: 'Mahindra XUV700',
    price: '₹18,50,000',
    year: 2023,
    km: '28,000 km',
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern XUV700 with strong performance, premium features and a spacious cabin.',
  },
  {
    id: 'maruti-swift-2021',
    name: 'Maruti Suzuki Swift',
    price: '₹7,00,000',
    year: 2021,
    km: '35,000 km',
    fuel: 'Petrol',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    description: 'Reliable and economical Swift, suitable for everyday city driving.',
  },
];

export function getCar(id) {
  return cars.find((car) => car.id === id);
}
