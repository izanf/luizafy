import { ImageType } from "../types/spotify.type";

export const getImage = (images: ImageType[], size: number = 128): string => {
  return images.find(image => image.width > size)?.url ?? images.find(image => image.width < size)?.url;
}
