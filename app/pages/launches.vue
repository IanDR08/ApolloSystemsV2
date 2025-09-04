<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useLaunchFilter } from '~/composables/useLaunchFilter'

const GET_LAUNCHES = gql`
	query GetLaunches {
		launchesPast(limit: 50) {
		mission_name
		launch_date_utc
		launch_site {
			site_name_long
		}
		rocket {
			rocket_name
		}
		details
		}
	}`

const { result, loading, error } = useQuery(GET_LAUNCHES)

const launches = computed(() => result.value?.launchesPast || [])
const { years, selectedYear, filteredLaunches } = useLaunchFilter(launches.value)
</script>

<template>
	<v-container class="py-12">
		<h1 class="text-h4 mb-6">SpaceX Launches</h1>
		<v-select v-if="years.length" v-model="selectedYear" :items="years" label="Filter by Year" clearable class="mb-6"/>
		<v-progress-circular v-if="loading" indeterminate color="primary"/>
		<v-alert v-if="error" type="error">Failed to load launches: {{ error.message }}</v-alert>
		<v-row v-if="filteredLaunches.length">
			<v-col v-for="launch in filteredLaunches" :key="launch.mission_name" cols="12" md="6" lg="4">
				<v-card class="mb-4" elevation="3">
					<v-card-title>{{ launch.mission_name }}</v-card-title>
					<v-card-subtitle>
						{{ new Date(launch.launch_date_utc).toLocaleDateString() }}
					</v-card-subtitle>
					<v-card-text>
						<p>
							<strong>Site:</strong>
							{{ launch.launch_site?.site_name_long || 'N/A' }}
						</p>
						<p>
							<strong>Rocket:</strong>
							{{ launch.rocket?.rocket_name || 'N/A' }}
						</p>
						<p>
							<strong>Details:</strong>
							<p v-if="launch.details">{{ launch.details }}</p>
							<p v-else class="text-grey">No details available</p>
						</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>