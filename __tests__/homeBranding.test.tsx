import { render, screen } from "@testing-library/react";

import Home from "../app/page";

jest.mock("@/components/RouteSearch", () => () => <div>RouteSearch</div>);
jest.mock("@/components/CostCalculator", () => () => <div>CostCalculator</div>);
jest.mock("@/components/PrayerWidget", () => () => <div>PrayerWidget</div>);
jest.mock("@/components/ServicesMap", () => () => <div>ServicesMap</div>);
jest.mock("@/components/NewsFeed", () => () => <div>NewsFeed</div>);
jest.mock("@/components/RmeGuides", () => () => <div>RmeGuides</div>);

describe("Homepage branding", () => {
  it("shows RME Route Morocco-first positioning", () => {
    render(<Home />);

    expect(screen.getByText("RME Route 🇲🇦")).toBeInTheDocument();
    expect(
      screen.getByText(/RME = Ressortissants Marocains à l'Étranger/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Assistant de mobilité et d'assistance/i),
    ).toBeInTheDocument();
    expect(screen.queryByText(/MRE Route/i)).toBeNull();
  });
});
