import type { StaticImageData } from 'next/image';
// IMPORTANT: You must create a folder named 'images' inside the 'public' directory
// and add an image file named 'prueba-sunset.png' for the application to build and run correctly.
import pruebaSunset from '@/public/images/prueba-sunset.png';

export const localImages = {
  heroBackground: pruebaSunset,
  gallery: [
    { id: 'gallery1', src: pruebaSunset, alt: 'Comfortable living room with a view' },
    { id: 'gallery2', src: pruebaSunset, alt: 'Modern and fully equipped kitchen' },
    { id: 'gallery3', src: pruebaSunset, alt: 'Cozy bedroom with natural light' },
    { id: 'gallery4', src: pruebaSunset, alt: 'Spacious terrace with sunbeds' },
    { id: 'gallery5', src: pruebaSunset, alt: 'Bathroom with modern fixtures' },
  ],
  explore: [
    { id: 'explore1', src: pruebaSunset, alt: 'Charming streets of Alcalá' },
    { id: 'explore2', src: pruebaSunset, alt: 'Alcalá beach with volcanic sand' },
    { id: 'explore3', src: pruebaSunset, alt: 'Stunning coastline view' },
    { id: 'explore4', src: pruebaSunset, alt: 'Secluded Méndez beach' },
    { id: 'explore5', src: pruebaSunset, alt: 'The majestic cliffs of Los Gigantes' },
  ],
  sports: [
    { id: 'sports1', src: pruebaSunset, alt: 'Person hiking on a coastal trail' },
    { id: 'sports2', src: pruebaSunset, alt: 'Cyclist on a scenic mountain road' },
    { id: 'sports3', src: pruebaSunset, alt: 'Golfer on a lush green course' },
    { id: 'sports4', src: pruebaSunset, alt: 'Surfer riding a wave' },
    { id: 'sports5', src: pruebaSunset, alt: 'Kayakers paddling in the ocean' },
    { id: 'sports6', src: pruebaSunset, alt: 'Diver exploring underwater life' },
  ]
};
