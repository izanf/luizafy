import * as C from './styles';

interface AvatarProps {
  image: string;
  name: string;
}

const Avatar = ({ image, name }: AvatarProps) => (
  <C.Figure>
    <C.Image src={image} alt={name} />
  </C.Figure>
);

export default Avatar;
