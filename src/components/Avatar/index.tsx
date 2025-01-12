import * as C from './styles';

import imgFallback from '../../assets/images/avatar-fallback.jpg';

interface AvatarProps {
  image: string;
  name: string;
  size?: AvatarSize;
  rounded?: boolean;
}

type AvatarSize = 'small' | 'medium' | 'large';

const SIZES: Record<AvatarSize, number> = {
  small: 64,
  medium: 128,
  large: 256
}

const Avatar = ({ image, name, size = 'medium', rounded }: AvatarProps) => (
  <C.Figure size={SIZES[size]} rounded={rounded}>
    <C.Image src={image ?? imgFallback} alt={name} />
  </C.Figure>
);

export default Avatar;
