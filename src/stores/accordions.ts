     import { defineStore } from 'pinia'

     interface Accordion {
          id: number
          title: string
          age: string
          name: string
          surname: string
          email: string
          nation: string
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
                    
               console.log(`Updating accordion ${id} with datadatadatadatadatadata:`, data);
               const index = this.accordions.findIndex((a) => a.id === id);
               if (index !== -1) {
                    this.accordions[index] = { ...this.accordions[index], ...data };
                    console.log(`Updated accordion:`, this.accordions[index]);
               } else {
                    console.error('Accordion not found with id:', id);
               }
          }
          }
     })
