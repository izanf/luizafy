import { render, screen } from '@testing-library/react';

import Avatar from './';

describe('Avatar Component', () => {
  it('should render the component correctly', () => {
    render(<Avatar image="https://example.com/test-image.jpg" name="Image test" />);
    
    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
  });
});
