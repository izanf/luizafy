import * as C from './styles';

import * as icons from '../../assets/icons';
import Disc from '../../assets/icons/disc.svg';

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
    <C.Figure size={ICON_SIZES[size]}>
      <Disc />
      {/* <SelectedComponent aria-label={name} /> */}
    </C.Figure>
  )
}

export default Icon;
