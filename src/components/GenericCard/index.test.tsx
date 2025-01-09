import { fireEvent, render, screen } from '@testing-library/react';

import GenericCard from './';

describe('GenericCard Component', () => {
  const props = {
    title: 'Test title',
    description: 'Test descriptio',
    image: 'https://example.com/test-image.jpg',
    onClick: jest.fn()
  };

  it('should render the component correctly', () => {
    render(<GenericCard {...props} />);
    
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();

    const titleElement = screen.getByRole('heading', { name: props.title });
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByRole('paragraph');
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Test title/i });
    fireEvent.click(buttonElement)
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should not render description if not have', () => {
    render(<GenericCard {...props} description={undefined} />);
    
    const descriptionElement = screen.queryByRole('paragraph');
    expect(descriptionElement).not.toBeInTheDocument();
  })
});
