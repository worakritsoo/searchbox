<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Sidemenu from '$lib/SideMenu/sidemenu.svelte';
	import '../app.css';
</script>
<!-- <body>
	
	<ion-split-pane content-id="menu-content" when="lg">
		<ion-menu content-id="menu-content" side="start" type="overlay">
			<Sidemenu></Sidemenu>
		</ion-menu>
		<ion-content id="menu-content">
			<slot/>
		</ion-content>
	</ion-split-pane>
</body> -->
<!-- src/routes/$layout.svelte -->
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
	<a href="/blog">blog</a>
	<a href="/posts">posts</a>
</nav>

<slot></slot>
<style>
	
</style>
