import { render, screen } from '@testing-library/react';

import Icon from './';

describe('Button Component', () => {
  it('should render the component correctly', () => {
    render(<Icon name="Home" />);
    
    const imgElement = screen.getByTestId('icon-Home');

    expect(imgElement).toBeInTheDocument();
  });
});
