import { ref, computed } from 'vue'

export function useLaunchSort(launches: any[]) {
    const sortOrder = ref<'asc' | 'desc'>('desc')

    const sortedLaunches = computed(() => {
        return [...launches].sort((a, b) => {
        const dateA = new Date(a.launch_date_utc).getTime()
        const dateB = new Date(b.launch_date_utc).getTime()
        return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
        })
    })

    return {
        sortOrder,
        sortedLaunches,
    }
}
