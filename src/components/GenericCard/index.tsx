import * as C from './styles';

import Avatar from '../Avatar';

interface GenericCardProps {
  title: string;
  image: string;
  onClick?: VoidFunction;
  description?: string;
  avatarRounded?: boolean;
};

const GenericCard = ({ title, description, image, avatarRounded, onClick }: GenericCardProps) => (
  <C.Pressable onClick={onClick}>
    <Avatar image={image} name={title} size="small" rounded={avatarRounded} />
    <C.Content>
      <C.Title>{title}</C.Title>
      {description && <C.Description>{description}</C.Description>}
    </C.Content>
  </C.Pressable>
);

export default GenericCard;
