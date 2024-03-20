import React from 'react';
import { render } from '@testing-library/react';
import { Message } from '.';
import '@testing-library/jest-dom';

describe('Testing Message component', () => {
  it('renders without errors', () => {
    const { getByText } = render(<Message>Test Message</Message>);
    expect(getByText('Test Message')).toBeInTheDocument();
  });

  it('applies the correct styles based on status prop', () => {
    const { container, rerender } = render(
      <Message status="default">Test Message</Message>
    );

    expect(container.firstChild).toHaveClass('text-grey');

    rerender(<Message status="error">Test Message</Message>);
    expect(container.firstChild).toHaveClass('text-red');

    rerender(<Message status="success">Test Message</Message>);
    expect(container.firstChild).toHaveClass('text-primary');

    rerender(<Message status="warning">Test Message</Message>);
    expect(container.firstChild).toHaveClass('text-secondary-60%');
  });

  it('applies additional classes passed in the className prop', () => {
    const { container } = render(
      <Message status="none" className="custom-class">
        Test Message
      </Message>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
