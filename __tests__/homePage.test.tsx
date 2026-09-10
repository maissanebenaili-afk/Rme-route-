import { render, screen } from "@testing-library/react";

import Home from "../app/page";

describe("Home page", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          timings: {
            Fajr: "05:10",
            Dhuhr: "13:40",
            Asr: "17:20",
            Maghrib: "20:44",
            Isha: "22:15",
          },
        },
      }),
    }) as typeof fetch;
  });

  afterEach(() => {
    if (originalFetch) {
      global.fetch = originalFetch;
    } else {
      delete (global as typeof global & { fetch?: typeof fetch }).fetch;
    }
  });

  it("reframes the product around RME travel assistance", async () => {
    render(<Home />);
    await screen.findByText("05:10");

    expect(
      screen.getByText(/RME = Ressortissants Marocains à l'Étranger/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Assistant de mobilité et d'assistance/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Préparer un trajet RME vers le Maroc/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Parcours d'assistance RME/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Guide éditorial, pas flux temps réel/i),
    ).toBeInTheDocument();
  });

  it("shows Morocco-first readiness messaging and future scope honestly", async () => {
    render(<Home />);
    await screen.findByText("05:10");

    expect(screen.getByText(/Priorité MVP/i)).toBeInTheDocument();
    expect(screen.getByText(/Déclinaison Algérie ensuite/i)).toBeInTheDocument();
    expect(screen.getByText(/Ce qui reste manuel/i)).toBeInTheDocument();
    expect(
      screen.getByText(/routing temps réel, données officielles, modération communautaire/i),
    ).toBeInTheDocument();
  });
});
