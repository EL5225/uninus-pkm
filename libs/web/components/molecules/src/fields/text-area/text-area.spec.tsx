import React from 'react';
import { render } from '@testing-library/react';
import { FieldTextArea } from './text-area';

describe('Input Text Area Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<FieldTextArea />);
    expect(baseElement).toBeTruthy();
  });
});
