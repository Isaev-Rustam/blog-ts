import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Layout } from './index';

describe('suite', () => {
  it('serial test', async () => {
    render(<Layout isAuth />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
