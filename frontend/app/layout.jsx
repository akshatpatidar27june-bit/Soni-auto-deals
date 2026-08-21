import './globals.css';

export const metadata = {
  title: 'Soni Auto Deals | Used Cars in Mandsaur',
  description: 'Trusted pre-owned cars from Soni Auto Deals, Mandsaur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}