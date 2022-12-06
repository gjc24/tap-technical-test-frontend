export interface CalculatedFare {
  id: BigInteger;
  driverId: BigInteger;
  csvDistanceTraveled: BigInteger;
  csvTravelUnit: BigInteger;
  csvCostPerDistanceTraveled: BigInteger;
  finalCalculatedCost: BigInteger;
}
