<script setup lang="ts">
</script>

<template>
  <v-container fluid class="home-page pa-0">
		<v-row align="center" justify="center">
			<v-col cols="12" class="text-center">
			<div class="hero-section d-flex flex-column align-center justify-center text-center">
				<h1 class="text-h2 font-weight-bold mb-4">
					Welcome to SpaceX Explorer
				</h1>
				<p class="text-subtitle-1 mb-6">
					Discover missions, rockets, and the history of SpaceX launches.
					Filter launches by year, explore rocket details, and save your favorites!
				</p>
				<div>
					<v-btn to="/launches" color="primary" size="large" class="mx-2">
					Explore Launches
					</v-btn>
					<v-btn to="/rockets" color="secondary" size="large" class="mx-2">
					Explore Rockets
					</v-btn>
				</div>
			</div>
			</v-col>
		</v-row>

		<v-container class="py-12">
			<v-row justify="center" class="text-center">
				<v-col cols="12" md="4">
					<v-card class="pa-6 hover-card" elevation="4">
						<v-icon size="40" color="primary">mdi-rocket</v-icon>
						<h3 class="text-h6 font-weight-bold mt-4">SpaceX Launches</h3>
						<p class="text-body-2"> Browse past and upcoming missions, filter by year, and sort by launch date.</p>
					</v-card>
				</v-col>

				<v-col cols="12" md="4">
					<v-card class="pa-6 hover-card" elevation="4">
						<v-icon size="40" color="secondary">mdi-space-station</v-icon>
						<h3 class="text-h6 font-weight-bold mt-4">Rocket Details</h3>
						<p class="text-body-2"> Dive deep into rocket specifications like mass, height, and first flight.</p>
					</v-card>
				</v-col>

				<v-col cols="12" md="4">
					<v-card class="pa-6 hover-card" elevation="4">
					<v-icon size="40" color="amber">mdi-star</v-icon>
						<h3 class="text-h6 font-weight-bold mt-4">Favorites</h3>
						<p class="text-body-2"> Save your favorite rockets and access them anytime from your favorites list.</p>
					</v-card>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="py-12 text-center">
			<h2 class="text-h4 font-weight-bold mb-4"> Start Exploring the SpaceX Universe Today</h2>
			<v-btn to="/favorites" color="primary" size="large" class="mt-4"> View My Favorites</v-btn>
		</v-container>
	</v-container>
</template>

<style scoped>
.hero-section {
	width: 100%;
	min-height: 70vh; 
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia23/pia23645/jpeg/PIA23645.jpg?w=5230&h=5175&fit=clip&crop=faces%2Cfocalpoint");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	color: white;
	padding: 4rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
}
.hover-card {
  	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}
</style>