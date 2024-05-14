// import { ref } from 'vue';

// const showModalState = ref(false);

// export function useModal(){
//     return {
//         showModalState,
//         showModal: () => { showModalState.value = true },
//         closeModal: () => { showModalState.value = false },
//     }
// }

import { ref } from 'vue';

export function useModal() {
    const showModalState = ref(false);

    const showModal = () => {
        showModalState.value = true;
    };

    const closeModal = () => {
        showModalState.value = false;
    };

    return {
        showModalState,
        showModal,
        closeModal,
    };
}