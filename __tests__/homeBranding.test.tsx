import { render, screen } from "@testing-library/react";

import Home from "../app/page";

jest.mock("@/components/RouteSearch", () => () => <div>RouteSearch</div>);
jest.mock("@/components/CostCalculator", () => () => <div>CostCalculator</div>);
jest.mock("@/components/PrayerWidget", () => () => <div>PrayerWidget</div>);
jest.mock("@/components/ServicesMap", () => () => <div>ServicesMap</div>);
jest.mock("@/components/NewsFeed", () => () => <div>NewsFeed</div>);

describe("Homepage branding", () => {
  it("shows RME Voyage positioning and promise", () => {
    render(<Home />);

    expect(screen.getByText("RME Voyage 🇲🇦")).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /Ressortissants Marocains à l’Étranger/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByText(/préparer, organiser et simplifier vos trajets/i),
    ).toBeTruthy();
    expect(screen.queryByText(/MRE Route/i)).toBeNull();
  });
});
