export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  details: { name: string; description: string }[];
  image: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Axis Wireless Charger',
    category: 'Carga',
    price: 79.99,
    description: 'Carga tus dispositivos de forma inalámbrica con un diseño minimalista y elegante.',
    details: [
      { name: 'Potencia', description: 'Carga rápida de 15W' },
      { name: 'Compatibilidad', description: 'Compatible con todos los dispositivos Qi' },
      { name: 'Material', description: 'Superficie de silicona antideslizante y base de aluminio' },
      { name: 'Indicador', description: 'Indicador LED de estado de carga' },
    ],
    image: '../assets/Axis Wireless Charger/Gemini_Generated_Image_p56tetp56tetp56t.png',
    images: [
      '../assets/Axis Wireless Charger/Gemini_Generated_Image_p56tetp56tetp56t.png',
      '../assets/Axis Wireless Charger/Gemini_Generated_Image_p56teup56teup56t.png',
    ],
  },
  {
    id: 2,
    name: 'Axis Bluetooth Speaker',
    category: 'Audio',
    price: 129.99,
    description: 'Sonido inmersivo y diseño portátil para llevar tu música a todas partes.',
    details: [
      { name: 'Sonido', description: 'Sonido 360° de alta fidelidad' },
      { name: 'Batería', description: '24 horas de duración' },
      { name: 'Resistencia', description: 'Resistente al agua IPX7' },
      { name: 'Conectividad', description: 'Bluetooth 5.0' },
    ],
    image: '../assets/Axis Bluetooth Speaker/Gemini_Generated_Image_p56tepp56tepp56t.png',
    images: [
      '../assets/Axis Bluetooth Speaker/Gemini_Generated_Image_p56tepp56tepp56t.png',
      '../assets/Axis Bluetooth Speaker/Gemini_Generated_Image_p56teqp56teqp56t.png',
    ],
  },
  {
    id: 3,
    name: 'Axis Smartwatch',
    category: 'Accesorios',
    price: 249.99,
    description: 'Monitoriza tu actividad física y recibe notificaciones con estilo.',
    details: [
      { name: 'Pantalla', description: 'AMOLED de 1.4"' },
      { name: 'Sensores', description: 'GPS integrado y sensor de ritmo cardíaco' },
      { name: 'Batería', description: '7 días de duración' },
      { name: 'Material', description: 'Caja de titanio y cristal de zafiro' },
    ],
    image: '../assets/Axis Smartwatch/Gemini_Generated_Image_p56temp56temp56t.png',
    images: [
      '../assets/Axis Smartwatch/Gemini_Generated_Image_p56temp56temp56t.png',
      '../assets/Axis Smartwatch/Gemini_Generated_Image_p56teop56teop56t.png',
    ],
  },
  {
    id: 4,
    name: 'Axis Noise-Cancelling Headphones',
    category: 'Audio',
    price: 349.99,
    description: 'Sumérgete en tu música con la cancelación de ruido activa y un sonido cristalino.',
    details: [
      { name: 'Cancelación de Ruido', description: 'Activa híbrida con modo transparencia' },
      { name: 'Audio', description: 'Sonido de alta resolución con drivers de 40mm' },
      { name: 'Batería', description: '30 horas de duración con una sola carga' },
      { name: 'Diseño', description: 'Ergonómico, ligero y con almohadillas de espuma viscoelástica' },
    ],
    image: '../assets/Axis Noise-Cancelling Headphones/auri1.png',
    images: [
      '../assets/Axis Noise-Cancelling Headphones/auri1.png',
      '../assets/Axis Noise-Cancelling Headphones/Gemini_Generated_Image_1vda0l1vda0l1vda.png',
      '../assets/Axis Noise-Cancelling Headphones/Gemini_Generated_Image_nq8j6knq8j6knq8j.png',
    ],
  },
];