import { ImageType } from "../types/spotify.type";

export const getImage = (images: ImageType[], minSize: number = 128) => {
  return images.find(image => image.width > minSize)?.url;
}
