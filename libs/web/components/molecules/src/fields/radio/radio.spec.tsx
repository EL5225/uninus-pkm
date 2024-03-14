import React from 'react';
import { render } from '@testing-library/react';
import { FieldRadio } from './radio';

describe('Field Radio Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<FieldRadio />);
    expect(baseElement).toBeTruthy();
  });
});
