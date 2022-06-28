import { render } from '@testing-library/react';

import Nextlib from './nextlib';

describe('Nextlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nextlib />);
    expect(baseElement).toBeTruthy();
  });
});
