import { defineStore } from 'pinia'

interface Accordion {
     id: number
     title: string
     age: string
     name: string
     surname: string
     email: string
}

interface AccordionsState {
     accordions: Accordion[]
}

export const useAccordionsStore = defineStore('accordions', {
     state: (): AccordionsState => ({
          accordions: []
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
               const index = this.accordions.findIndex((a) => a.id === id)
               if (index !== -1) {
                    // If the accordion exists, merge the new data with the existing accordion data
                    this.accordions[index] = { ...this.accordions[index], ...data }
               } else {
                    // Optionally, handle the case where the accordion does not exist
                    console.error('Accordion not found with id:', id)
                    // Or push a new accordion (if that's your intended logic)
                    // this.accordions.push({ id, ...data } as Accordion);
               }
          }
     }
})
