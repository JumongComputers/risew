export interface Slide {
  imageUrl: string;
  heading: string;
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: { duration: number; delay: number };
}

const slides: Slide[] = [
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731455/gridex/133-OVI_9449_ls8fov.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731447/gridex/053-OVI_9257_1_c5ra3g.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731464/gridex/hero3_hn6gaj.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
  {
    imageUrl: "https://res.cloudinary.com/dyijwff8m/image/upload/v1702731461/gridex/ab2_gabvo7.webp",
    heading: "Rise High Hotel",
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.5 },
  },
];

export default slides;
