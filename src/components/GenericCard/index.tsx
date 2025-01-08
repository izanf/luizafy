import * as C from './styles';

import Avatar from '../Avatar';

interface GenericCardProps {
  title: string;
  image: string;
  path: string;
  description?: string;
};

const GenericCard = ({ title, description, image, path }: GenericCardProps) => (
  <C.Pressable href={path} target="_blank" rel="noreferrer">
    <Avatar image={image} name={title} size="small" />
    <C.Content>
      <C.Title>{title}</C.Title>
      {description && <C.Description>{description}</C.Description>}
    </C.Content>
  </C.Pressable>
);

export default GenericCard;
