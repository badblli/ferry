import { defineStore } from 'pinia';

interface TripParams {
  FromTownID: string;
  ToTownID: string;
  DepartureDate: string;
  ArrivalDate: string;
  AdultCount: number;
  ChildCount: number;
  InfantCount: number;
}

// Store tanımınızın doğru şekilde güncellenmiş hali
export const useTripStore = defineStore('trip', {
  state: (): { 
    tripParams: TripParams; 
    selectedDepartureData: any[]; 
    selectedArrivalData: any[]; 
    ferryList: any[];
  } => ({
    tripParams: {} as TripParams,
    selectedDepartureData: [],
    selectedArrivalData: [],
    ferryList: [],
  }),
  getters: {
    getTripParams: (state) => state.tripParams,
    // getTotalPassengerCount: (state) => {
    //   return state.tripParams.AdultCount + state.tripParams.ChildCount + state.tripParams.InfantCount;
    // },
    getDepartureData: (state) => state.selectedDepartureData,
    getArrivalData: (state) => state.selectedArrivalData,
    getFerryList: (state) => state.ferryList,
  },
  actions: {
    setTripParams(params: TripParams) {
      this.tripParams = params;
    },
    setSelectedDepartureData(item: any) {
      this.selectedDepartureData = [item];
    },
    setSelectedArrivalData(item: any) {
      this.selectedArrivalData = [item];
    },
    setFerryList: function(item: any) {
      this.ferryList = item;
    },
  },
});