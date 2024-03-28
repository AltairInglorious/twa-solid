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
				<li class="text-tg-bg">tg-bg: {WebApp.themeParams.bg_color}</li>
				<li class="text-tg-text">tg-text: {WebApp.themeParams.text_color}</li>
				<li class="text-tg-hint">tg-hint: {WebApp.themeParams.hint_color}</li>
				<li class="text-tg-link">tg-link: {WebApp.themeParams.link_color}</li>
				<li class="text-tg-button">tg-button: {WebApp.themeParams.button_color}</li>
				<li class="text-tg-button-text">tg-button-text: {WebApp.themeParams.button_text_color}</li>
				<li class="text-tg-secondary-bg">tg-secondary-bg: {WebApp.themeParams.secondary_bg_color}</li>
				<li class="text-tg-header-bg">tg-header-bg: {WebApp.themeParams.header_bg_color}</li>
				<li class="text-tg-accent-text">tg-accent-text: {WebApp.themeParams.accent_text_color}</li>
				<li class="text-tg-section-bg">tg-section-bg: {WebApp.themeParams.section_bg_color}</li>
				<li class="text-tg-section-header-text">tg-section-header-text: {WebApp.themeParams.section_header_text_color}</li>
				<li class="text-tg-subtitle-text">tg-subtitle-text: {WebApp.themeParams.subtitle_text_color}</li>
				<li class="text-tg-destructive-text">tg-destructive-text: {WebApp.themeParams.destructive_text_color}</li>
			</ul>
		</main>
	);
}

export default App;
