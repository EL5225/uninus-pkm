import React from 'react';
import { render } from '@testing-library/react';
import { FieldSelect } from './select';

describe('Field Select Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<FieldSelect />);
    expect(baseElement).toBeTruthy();
  });
});
