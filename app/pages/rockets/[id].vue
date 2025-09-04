<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useFavoritesStore } from '~/stores/favorites'

const route = useRoute()
const rocketId = route.params.id as string
const favoritesStore = useFavoritesStore()

const GET_ROCKET = gql`
    query GetRocket($id: ID!) {
        rocket(id: $id) {
        id
        name
        description
        first_flight
        height {
            meters
        }
        diameter {
            meters
        }
        mass {
            kg
        }
        stages
        }
    }`

    const { result, loading, error } = useQuery(GET_ROCKET, { id: rocketId })
    function toggleFavorite() {
        if (result.value?.rocket) {
            if (favoritesStore.isFavorite(result.value.rocket.id)) {
                favoritesStore.removeFavorite(result.value.rocket.id)
            } else {
                favoritesStore.addFavorite({
                    id: result.value.rocket.id,
                    name: result.value.rocket.name,
                    description: result.value.rocket.description,
                })
            }
        }
    }
</script>

<template>
    <v-container class="py-8">
        <v-progress-circular v-if="loading" indeterminate color="primary"/>
        <v-alert v-if="error" type="error"> Failed to load rocket details: {{ error.message }} </v-alert>

        <v-card v-if="result?.rocket" class="pa-6" elevation="3">
            <v-card-title class="text-h5 font-weight-bold">
                {{ result.rocket.name }}
            </v-card-title>
            <v-card-text>
                <p><strong>Description:</strong> {{ result.rocket.description }}</p>
                <p><strong>First Flight:</strong> {{ result.rocket.first_flight }}</p>
                <p><strong>Height:</strong> {{ result.rocket.height?.meters }} m</p>
                <p><strong>Diameter:</strong> {{ result.rocket.diameter?.meters }} m</p>
                <p><strong>Mass:</strong> {{ result.rocket.mass?.kg }} kg</p>
                <p><strong>Stages:</strong> {{ result.rocket.stages }}</p>
            </v-card-text>
            <v-card-actions>    
                <v-btn color="secondary" @click="toggleFavorite">
                    {{ favoritesStore.isFavorite(result.rocket.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
