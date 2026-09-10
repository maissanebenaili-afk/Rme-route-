import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import BookingCards from "@/components/BookingCards";

describe("BookingCards", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    if (originalFetch) {
      global.fetch = originalFetch;
    } else {
      delete (global as typeof global & { fetch?: typeof fetch }).fetch;
    }
  });

  it("renders an inline fallback when no partner is configured", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ configured: false, affiliateUrl: null }),
    }) as typeof fetch;

    render(<BookingCards origin="Paris" destination="Tanger" />);

    fireEvent.click(screen.getByRole("button", { name: /comparer les ferries/i }));

    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("Le partenaire ferry n'est pas encore configuré."),
    );
  });
});
