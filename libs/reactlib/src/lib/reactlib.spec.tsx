import { render } from '@testing-library/react';

import Reactlib from './reactlib';

describe('Reactlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactlib />);
    expect(baseElement).toBeTruthy();
  });
});
