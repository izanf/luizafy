import { render, screen } from '@testing-library/react';

import Button from './';

describe('Button Component', () => {
  it('should render the component correctly', () => {
    render(<Button>Click me</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
  });
});
