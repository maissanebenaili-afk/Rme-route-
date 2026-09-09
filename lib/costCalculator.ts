export interface TravelCostInput {
	distanceKm: number;
	fuelPricePerLiter: number;
	consumptionPer100Km: number;
	tollFeesEstimate: number;
	ferryTicketCost: number;
}

export interface TravelCostBreakdown {
	fuelTotal: number;
	tollTotal: number;
	ferryTotal: number;
	grandTotal: number;
}

export function calculateTravelCost(input: TravelCostInput): TravelCostBreakdown {
	const fuelTotal = (input.distanceKm / 100) * input.consumptionPer100Km * input.fuelPricePerLiter;
	const tollTotal = Math.max(0, input.tollFeesEstimate);
	const ferryTotal = Math.max(0, input.ferryTicketCost);

	return {
		fuelTotal: Math.round(fuelTotal * 100) / 100,
		tollTotal: Math.round(tollTotal * 100) / 100,
		ferryTotal: Math.round(ferryTotal * 100) / 100,
		grandTotal: Math.round((fuelTotal + tollTotal + ferryTotal) * 100) / 100
	};
}