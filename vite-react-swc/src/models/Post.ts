export interface Post {
  title?: string;
  slug?: string;
  mainImage?: mainImage;
}

interface mainImage {
  alt?: string;
  asset?: asset;
}

interface asset {
  _id?: number;
  url?: string;
}
