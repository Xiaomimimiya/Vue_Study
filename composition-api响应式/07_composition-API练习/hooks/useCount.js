import { ref, computed } from "vue"

export default function() {

    const count = ref(1);
    const doubleCount = computed(() => count.value * 2)
    const increase = () => {
        count.value++
    }
    const decrease = () => {
        count.value--
    }
    return {
        count,
        doubleCount,
        increase,
        decrease
    }


}