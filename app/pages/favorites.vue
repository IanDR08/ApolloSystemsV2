<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites'

const favoritesStore = useFavoritesStore()
</script>

<template>
    <v-container class="py-8">
        <h1 class="text-h4 mb-6">Favorite Rockets</h1>
        <v-alert v-if="favoritesStore.rockets.length === 0" type="info"> No favorites yet. Go add some rockets </v-alert>
        <v-row>
            <v-col v-for="rocket in favoritesStore.rockets" :key="rocket.id" cols="12" md="6" lg="4">
                <v-card class="mb-4 pa-4">
                <v-card-title>{{ rocket.name }}</v-card-title>
                <v-card-text>
                    {{ rocket.description || 'No description available' }}
                </v-card-text>
                <v-card-actions>
                    <v-btn color="error" @click="favoritesStore.removeFavorite(rocket.id)">
                    Remove
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-btn v-if="favoritesStore.rockets.length" color="error" class="mt-6" @click="favoritesStore.clearFavorites">
            Clear All Favorites
        </v-btn>
    </v-container>
</template>