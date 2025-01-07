import { render, screen } from '@testing-library/react';

import Icon from './';

describe('Button Component', () => {
  it('should render the component correctly', () => {
    render(<Icon name="home" />);
    
    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
  });
});
