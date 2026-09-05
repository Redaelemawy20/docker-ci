import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Page from './page';

describe('Home page', () => {
  it('Must have h1 React', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', { name: 'React', level: 1 }),
    ).toBeTruthy();
  });
});
