import { defineStore } from 'pinia'

interface Rocket {
  id: string
  name: string
  description?: string
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    rockets: [] as Rocket[],
  }),

  getters: {
    isFavorite: (state) => {
      return (id: string) => state.rockets.some(r => r.id === id)
    },
  },

  actions: {
    addFavorite(rocket: Rocket) {
      if (!this.rockets.find(r => r.id === rocket.id)) {
        this.rockets.push(rocket)
      }
    },
    removeFavorite(id: string) {
      this.rockets = this.rockets.filter(r => r.id !== id)
    },
    clearFavorites() {
      this.rockets = []
    },
  },
})
