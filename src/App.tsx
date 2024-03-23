import WebApp from "@twa-dev/sdk";
import {onMount} from "solid-js";

function App() {
	onMount(() => {
		WebApp.ready();
		WebApp.expand();
	});

	return (
		<main>
			<header>
				<h1>Telegram colors</h1>
			</header>
			<ul>
				<li class="text-tg-bg">tg-bg</li>
				<li class="text-tg-text">tg-text</li>
				<li class="text-tg-hint">tg-hint</li>
				<li class="text-tg-link">tg-link</li>
				<li class="text-tg-button">tg-button</li>
				<li class="text-tg-button-text">tg-button-text</li>
				<li class="text-tg-secondary-bg">tg-secondary-bg</li>
				<li class="text-tg-header-bg">tg-header-bg</li>
				<li class="text-tg-accent-text">tg-accent-text</li>
				<li class="text-tg-section-bg">tg-section-bg</li>
				<li class="text-tg-section-header-text">tg-section-header-text</li>
				<li class="text-tg-subtitle-text">tg-subtitle-text</li>
				<li class="text-tg-destructive-text">tg-destructive-text</li>
			</ul>
		</main>
	);
}

export default App;
