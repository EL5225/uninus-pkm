import React from 'react';
import { render } from '@testing-library/react';

import Page from '../app/(landing)/page';
import { MarketProvider } from '@psu/web-services';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MarketProvider>
        <Page />
      </MarketProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
