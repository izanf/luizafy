import * as C from './styles';

import * as icons from '../../assets/icons';

export type IconsType = keyof typeof icons;

type IconSizeType = 'small' | 'medium' | 'large';

interface IconProps {
  name: IconsType;
  size?: IconSizeType;
}

const ICON_SIZES: { [key in IconSizeType]: number } = {
  small: 24,
  medium: 32,
  large: 48
}

const Icon = ({ name, size = 'medium' }: IconProps) => {
  const SelectedComponent = icons[name ?? 'home'];

  return (
    <C.Wrapper size={ICON_SIZES[size]} data-testid={`icon-${name}`}>
      <SelectedComponent />
    </C.Wrapper>
  )
}

export default Icon;
