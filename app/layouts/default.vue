<template>
	<v-app>
		<AppNavbar />
		<v-main>
			<slot />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script>
	export default {
		name: 'index',
	}
</script>
