import { render } from '@testing-library/react';

import One from './one';

describe('One', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<One />);
    expect(baseElement).toBeTruthy();
  });
});
