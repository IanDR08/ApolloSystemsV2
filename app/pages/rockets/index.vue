<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

    const GET_ROCKETS = gql`
        query GetRockets {
            rockets {
            id
            name
            }
        }`
    const { result, loading, error } = useQuery(GET_ROCKETS)
    const rocketImages: Record<string, string> = {  
        "falcon 1": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Falcon_1_Flight_4_launch.jpg",
        "falcon 9": "https://cdn.mos.cms.futurecdn.net/GofGsvdZ5x9mmvqQudrkfk.jpg",
        "falcon heavy": "https://media.wired.com/photos/5a7a194da4c0a80b672f6a4b/4:3/w_2028,h_1521,c_limit/falconheavy-RTX4RJ0W.jpg",
        "starship": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Starship_SN9_Evening_Rays.jpg"
        }

    const rockets = computed(() => result.value?.rockets || [])
</script>

<template>
    <v-container class="py-8">
        <h1 class="text-h4 mb-6">Rockets</h1>

        <v-progress-circular v-if="loading" indeterminate color="primary" />

        <v-alert v-if="error" type="error">Failed to load rockets: {{ error.message }}</v-alert>
        <v-row>
            <v-col v-for="rocket in rockets" :key="rocket.id" cols="12" sm="6" md="4">
                <v-card class="rocket-card hover-card" elevation="6">
                  <v-img :src="rocketImages[rocket.name.toLowerCase()] || 'https://via.placeholder.com/600x400?text=No+Image'" height="500px" cover/>
                    <v-card-title class="font-weight-bold">
                        {{ rocket.name }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn :to="`/rockets/${rocket.id}`" color="primary" variant="tonal"> View Details</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.rocket-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
    transform: translateY(-8px);
    box-shadow:  0 12px 32px rgba(0, 0, 0, 0.25);
}
</style>