import { fireEvent, render, screen } from '@testing-library/react';

import HomePage from '@/components/HomePage';

describe('HomePage', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          timings: {
            Fajr: '05:12',
            Dhuhr: '13:35',
            Asr: '17:10',
            Maghrib: '20:44',
            Isha: '22:15',
          },
        },
      }),
    } as Response);
  });

  afterEach(() => {
    if (originalFetch) {
      global.fetch = originalFetch;
    } else {
      delete (global as typeof global & { fetch?: typeof fetch }).fetch;
    }
  });

  it('renders diaspora messaging and switches community defaults', async () => {
    render(<HomePage />);

    expect(
      screen.getByText(/L'application communautaire pour préparer les voyages diaspora/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Préparer un trajet Europe ↔ Maroc/i })
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue('Tanger, Maroc')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Portugal/i }));

    expect(
      screen.getByRole('heading', { name: /Préparer un trajet Europe ↔ Portugal/i })
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue('Porto, Portugal')).toBeInTheDocument();
    expect(screen.getByText(/Beta communautaire/i)).toBeInTheDocument();
    expect(await screen.findByText('05:12')).toBeInTheDocument();
  });
});
