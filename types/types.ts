import { StaticImageData } from "next/image";

export type Course = {
  id: string;
  title: string;
  rating: number;
  price: number;
  imageUrl: StaticImageData;
};
