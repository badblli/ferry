import { defineStore } from 'pinia'

interface TripParams {
  FromTownID: string;
  ToTownID: string;
  DepartureDate: string;
  ArrivalDate: string;
  AdultCount: number;
  ChildCount: number;
  InfantCount: number;
}

export const useTripStore = defineStore('trip', {
  state: () => ({
    tripParams: {} as TripParams,
  }),
  actions: {
    setTripParams(params: TripParams) {
      this.tripParams = params;
    },
  },
})