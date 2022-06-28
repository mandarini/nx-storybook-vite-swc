import { render } from '@testing-library/react';

import ReactlibOne from './reactlib-one';

describe('ReactlibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactlibOne />);
    expect(baseElement).toBeTruthy();
  });
});
