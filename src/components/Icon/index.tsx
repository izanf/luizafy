import * as C from './styles';

import * as icons from '../../assets/icons';

type IconProps = {
  name: keyof typeof icons;
}

const Icon = ({ name }: IconProps) => {
  const SelectedComponent = icons[name ?? 'home'];

  return (
    <C.Figure>
      <C.Image src={SelectedComponent} />
    </C.Figure>
  )
}

export default Icon;
