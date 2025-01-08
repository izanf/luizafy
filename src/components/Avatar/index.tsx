import * as C from './styles';

interface AvatarProps {
  image: string;
  name: string;
  size?: AvatarSize;
}

type AvatarSize = 'small' | 'medium' | 'large';

const SIZES: Record<AvatarSize, number> = {
  small: 64,
  medium: 128,
  large: 256
}

const Avatar = ({ image, name, size = 'medium' }: AvatarProps) => (
  <C.Figure size={SIZES[size]}>
    <C.Image src={image} alt={name} />
  </C.Figure>
);

export default Avatar;
