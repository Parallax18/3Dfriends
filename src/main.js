import App from './App.svelte';
import { friendsStore } from './data/friends-store';

const app = new App({
	target: document.body,
	// props: {
	// 	name: 'world'
	// }
	fetch: document.body.addEventListener("load", friendsStore.fetch)
});

export default app;