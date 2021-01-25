import * as React from 'react';
import { render } from '@testing-library/react';

import { LoginModal } from '..';

describe('<LoginModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoginModal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
