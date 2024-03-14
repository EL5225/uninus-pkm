import React from 'react';
import { render } from '@testing-library/react';
import { FieldText } from './text';

describe('Field Text Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<FieldText />);
    expect(baseElement).toBeTruthy();
  });
});
