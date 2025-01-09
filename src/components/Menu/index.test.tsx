import { render, screen } from '@testing-library/react';

import Menu from './';

describe('Menu Component', () => {
  it('should render the logo correctly', () => {
    render(<Menu />);

    const imgElement = screen.getByRole('img', { name: 'Luizafy' });

    expect(imgElement).toBeInTheDocument();
  });

  it('should render the menu items correctly', () => {
    render(<Menu />);

    const linkElement = screen.getByRole('link', { name: 'Artistas' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/artists');
  });
});
