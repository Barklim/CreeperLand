import * as React from 'react';
import { render } from '@testing-library/react';

import { RegisterModal } from '..';

describe('<RegisterModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RegisterModal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
