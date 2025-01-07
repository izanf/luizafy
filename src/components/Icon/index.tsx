import * as C from './styles';

import * as icons from '../../assets/icons';

export type IconsType = keyof typeof icons;

interface IconProps {
  name: IconsType;
}

const Icon = ({ name }: IconProps) => {
  const SelectedComponent = icons[name ?? 'home'];

  return (
    <C.Figure>
      <C.Image src={SelectedComponent} alt={name} />
    </C.Figure>
  )
}

export default Icon;
