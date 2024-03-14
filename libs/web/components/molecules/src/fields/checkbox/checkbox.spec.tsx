import React from 'react';
import { render } from '@testing-library/react';
import { FieldCheckbox } from './checkbox';

describe('Field Checkbox Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<FieldCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
