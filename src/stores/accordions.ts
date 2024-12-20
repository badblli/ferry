import { defineStore } from 'pinia'

interface Accordion {
     id: string
     title: string
     age: string
     name: string
     surname: string
     email: string
     nation: string
}

interface AccordionsState {
     accordions: Accordion[]
     adultPassenger: Accordion[]
     accountState: any
}

export const useAccordionsStore = defineStore('accordions', {
     state: (): AccordionsState => ({
          accordions: [],
          adultPassenger: [],
          accountState: false
     }),
     actions: {
          updateAccordion(accordion: Accordion) {
               const index = this.accordions.findIndex((a) => a.id === accordion.id)
               if (index !== -1) {
                    this.accordions[index] = accordion
               } else {
                    this.accordions.push(accordion)
               }
          },
          setAccordionData(id: number, data: Partial<Accordion>) {
               const index = this.accordions.findIndex((a: any) => a.id === id)
               if (index !== -1) {
                    // Ensure reactivity when updating
                    this.accordions[index] = { ...this.accordions[index], ...data }
               } else {
                    // Correctly type cast when adding new
                    this.accordions.push(data as Accordion)
               }
          },
          // setAdultPassenger(id: number, data: Partial<Accordion>) {
          //      const index = this.adultPassenger.findIndex((a) => a.id === id)
          //      if (index !== -1) {
          //           // Ensure reactivity when updating
          //           this.adultPassenger[index] = { ...this.adultPassenger[index], ...data }
          //      } else {
          //           // Correctly type cast when adding new
          //           this.adultPassenger.push(data as Accordion)
          //      }
          // }
          setAdultPassenger(id: number, data: Partial<Accordion>) {
               const index = this.adultPassenger.findIndex((a: any) => a.id === id);
               if (index !== -1) {
                   // Completely override with new data
                   this.adultPassenger[index] = data as Accordion;
               } else {
                   // If no element with the specified ID is found, add the new element to the array
                   this.adultPassenger.push(data as Accordion);
               }
           },
           setAccountState(state: any) {
               console.log("setAccountState")
               this.accountState = state
             }
     },
     getters: {
          getTripParams: (state) => state.accordions,
          // getTotalPassengerCount: (state) => {
          //   return state.tripParams.AdultCount + state.tripParams.ChildCount + state.tripParams.InfantCount;
          // },
          getAccordionData: (state) => state.accordions,
          getPassengerData: (state) => state.adultPassenger,
          // getAccountState: (state) => state.accountState
          getAccountState: (state) => state.accountState
     }
})
