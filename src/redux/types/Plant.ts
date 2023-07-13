import { Comment } from "./Comment";
import { Photo } from "./Photo";


export type Plant = {
  name: string;
  avatar: string;
  description: string;
  rating?: number;
  ratingCount?: number;
  publishDate?: Date;
  comments?: Comment[];
  photos? : Photo[];
  id: string;
};
