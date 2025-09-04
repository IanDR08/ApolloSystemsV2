import { ref, computed } from 'vue'

export function useLaunchFilter(launches: any[]) {
    const selectedYear = ref<string | null>(null)

    const years = computed(() => {
        const allYears = launches.map( l =>
            new Date(l.launch_date_utc).getFullYear().toString()
        )
        return [...new Set(allYears)].sort()
    })

    const filteredLaunches = computed(() => {
            if (!selectedYear.value) return launches
            return launches.filter(
                l => new Date(l.launch_date_utc).getFullYear().toString() === selectedYear.value
            )
    })

    return {
        years,
        selectedYear,
        filteredLaunches,
    }
}
