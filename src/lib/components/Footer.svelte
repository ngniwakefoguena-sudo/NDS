<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<!-- SVG Wave Transition -->
<div class="wave-container" aria-hidden="true">
	<svg
		viewBox="0 0 1440 120"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
		class="wave-svg"
	>
		<path
			d="M0,120 L0,60 C120,80 240,100 360,90 C480,80 600,30 720,20 C840,10 960,40 1080,55 C1200,70 1320,85 1380,90 L1440,95 L1440,120 Z"
			fill="#080e06"
		/>
		<path
			d="M0,120 L0,80 C160,95 320,105 480,95 C640,85 800,50 960,45 C1120,40 1280,65 1360,75 L1440,80 L1440,120 Z"
			fill="#080e06"
			opacity="0.6"
		/>
		<path
			d="M0,120 L0,95 C200,105 400,115 600,105 C800,95 1000,65 1200,60 C1300,57 1380,65 1440,70 L1440,120 Z"
			fill="#080e06"
			opacity="0.3"
		/>
	</svg>
</div>

<footer class="footer-main">
	<div class="footer-content">
		<!-- Three-column grid -->
		<div class="footer-grid">

			<!-- LEFT COLUMN: Nos services -->
			<div class="footer-col col-services">
				<h3 class="col-heading">Nos services</h3>
				<ul class="link-list">
					<li><a href="/services/creation-site-web" class="footer-link">Développement Web</a></li>
					<li><a href="/services/application-mobile" class="footer-link">Application Mobile</a></li>
					<li><a href="/services/intelligence-artificielle" class="footer-link">Intelligence Artificielle</a></li>
					<li><a href="/services/automatisation-n8n" class="footer-link">Automatisation</a></li>
					<li><a href="/services/marketing-digital-seo" class="footer-link">Marketing Digital</a></li>
					<li><a href="/services/generation-de-leads" class="footer-link">Génération de Leads</a></li>
					<li><a href="/services/data-engineering" class="footer-link">Data Engineering</a></li>
					<li><a href="/services/formation" class="footer-link">Formation</a></li>
					<li><a href="/services/design-ui-ux" class="footer-link">Design UI/UX</a></li>
					<li><a href="/services/backend-api" class="footer-link">Backend & API</a></li>
					<li><a href="/vendia" class="footer-link">Vendia · Agent WhatsApp</a></li>
				</ul>
			</div>

			<!-- CENTER COLUMN: Logo + Name + Socials -->
			<div class="footer-col col-brand">
				<a href="/" class="brand-block">
					<div class="logo-wrapper">
						<img
							src="/images/logo-sm.webp"
							alt="Norbert Digital Service"
							width="80"
							height="80"
							class="logo-img"
						/>
					</div>
					<div class="brand-text">
						<span class="brand-name">Norbert</span>
						<span class="brand-sub">Digital Service</span>
					</div>
				</a>

				<p class="brand-tagline">
					Solutions digitales sur mesure pour transformer votre vision en réalité.
				</p>

				<!-- Social icons row -->
				<div class="social-row">
					<!-- LinkedIn -->
					<a
						href="https://www.linkedin.com/company/norbert-digital-service/?viewAsMember=true"
						target="_blank"
						rel="noopener"
						aria-label="LinkedIn"
						class="social-circle social-linkedin"
					>
						<svg class="social-svg" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>

					<!-- Facebook -->
					<a
						href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61589061242648"
						target="_blank"
						rel="noopener"
						aria-label="Facebook"
						class="social-circle social-facebook"
					>
						<svg class="social-svg" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>

					<!-- Instagram -->
					<a
						href="https://www.instagram.com/norbertdigitalservices/"
						target="_blank"
						rel="noopener"
						aria-label="Instagram"
						class="social-circle social-instagram"
					>
						<svg class="social-svg" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>

					<!-- WhatsApp -->
					<a
						href="https://wa.me/33659173774?text=Salut%20%2C%20Je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20digitaux"
						target="_blank"
						rel="noopener"
						aria-label="WhatsApp"
						class="social-circle social-whatsapp"
					>
						<svg class="social-svg" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
						</svg>
					</a>
				</div>

				<!-- Email -->
				<a href="mailto:norbertdigitalservices@gmail.com" class="email-link">
					<svg class="email-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					norbertdigitalservices@gmail.com
				</a>
			</div>

			<!-- RIGHT COLUMN: En savoir plus -->
			<div class="footer-col col-about">
				<h3 class="col-heading">En savoir plus</h3>
				<ul class="link-list">
					<li><a href="/about" class="footer-link">À Propos</a></li>
					<li><a href="/projects" class="footer-link">Réalisations</a></li>
					<li><a href="/blog" class="footer-link">Blog</a></li>
					<li><a href="/contact" class="footer-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Copyright bar -->
	<div class="copyright-bar">
		<div class="copyright-inner">
			<p>© {currentYear} Norbert Digital Service. Tous droits réservés.</p>
			<p>Conçu & développé par <strong>Norbert Digital Service</strong></p>
		</div>
	</div>
</footer>

<style>
	/* ─── Wave ─── */
	/* La vague recouvre le bas de la section précédente : transition propre
	   que la page se termine sur fond clair ou sur un bandeau sombre. */
	.wave-container {
		width: 100%;
		overflow: hidden;
		line-height: 0;
		margin-top: -80px;
		pointer-events: none;
		margin-bottom: -2px;
		position: relative;
		z-index: 1;
	}
	.wave-svg {
		display: block;
		width: 100%;
		height: 80px;
	}

	/* ─── Footer Main ─── */
	.footer-main {
		background: #080e06;
		position: relative;
		z-index: 0;
	}

	.footer-content {
		max-width: 72rem;
		margin: 0 auto;
		padding: 3.5rem 1.5rem 2.5rem;
	}

	/* ─── Grid ─── */
	.footer-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	@media (min-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr 1.4fr 1fr;
			gap: 2rem;
		}
	}

	/* ─── Column Base ─── */
	.footer-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	@media (min-width: 768px) {
		.col-services {
			align-items: flex-start;
			text-align: left;
		}
		.col-brand {
			align-items: center;
			text-align: center;
		}
		.col-about {
			align-items: flex-end;
			text-align: right;
		}
	}

	/* ─── Column Headings ─── */
	.col-heading {
		font-family: 'Space Grotesk', system-ui, sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #98c816;
		margin-bottom: 1.5rem;
		position: relative;
		padding-bottom: 0.75rem;
	}
	.col-heading::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 32px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #98c816, transparent);
		border-radius: 2px;
	}
	@media (min-width: 768px) {
		.col-services .col-heading::after {
			left: 0;
			transform: none;
		}
		.col-about .col-heading::after {
			left: auto;
			right: 0;
			transform: none;
		}
	}

	/* ─── Links ─── */
	.link-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}
	.footer-link {
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.25s ease, padding-left 0.25s ease;
		line-height: 1.6;
	}
	.footer-link:hover {
		color: #ffffff;
		padding-left: 4px;
	}
	@media (min-width: 768px) {
		.col-about .footer-link:hover {
			padding-left: 0;
			padding-right: 4px;
		}
	}

	/* ─── Brand Center ─── */
	.brand-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		margin-bottom: 1rem;
	}
	.logo-wrapper {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow:
			0 0 0 3px rgba(152, 200, 22, 0.4),
			0 0 24px rgba(152, 200, 22, 0.15),
			0 8px 32px rgba(0, 0, 0, 0.3);
		flex-shrink: 0;
		transition: box-shadow 0.3s ease, transform 0.3s ease;
	}
	.brand-block:hover .logo-wrapper {
		box-shadow:
			0 0 0 3px rgba(152, 200, 22, 0.6),
			0 0 32px rgba(152, 200, 22, 0.25),
			0 8px 32px rgba(0, 0, 0, 0.3);
		transform: scale(1.05);
	}
	.logo-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.brand-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 1;
	}
	.brand-name {
		font-family: 'Space Grotesk', system-ui, sans-serif;
		font-size: 1.35rem;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: -0.01em;
	}
	.brand-sub {
		font-family: 'Space Grotesk', system-ui, sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		color: #98c816;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		margin-top: 0.25rem;
	}
	.brand-tagline {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.8rem;
		line-height: 1.6;
		max-width: 280px;
		margin-bottom: 1.5rem;
	}

	/* ─── Social Icons ─── */
	.social-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.25rem;
	}
	.social-circle {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}
	.social-circle:hover {
		transform: translateY(-3px) scale(1.1);
	}
	.social-svg {
		width: 18px;
		height: 18px;
	}

	/* Brand colors */
	.social-linkedin {
		background: #0077b5;
		box-shadow: 0 4px 14px rgba(0, 119, 181, 0.35);
	}
	.social-linkedin:hover {
		box-shadow: 0 6px 20px rgba(0, 119, 181, 0.55);
	}

	.social-facebook {
		background: #1877f2;
		box-shadow: 0 4px 14px rgba(24, 119, 242, 0.35);
	}
	.social-facebook:hover {
		box-shadow: 0 6px 20px rgba(24, 119, 242, 0.55);
	}

	.social-instagram {
		background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
		box-shadow: 0 4px 14px rgba(225, 48, 108, 0.35);
	}
	.social-instagram:hover {
		box-shadow: 0 6px 20px rgba(225, 48, 108, 0.55);
	}

	.social-whatsapp {
		background: #25d366;
		box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
	}
	.social-whatsapp:hover {
		box-shadow: 0 6px 20px rgba(37, 211, 102, 0.55);
	}

	/* ─── Email ─── */
	.email-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.8rem;
		text-decoration: none;
		transition: color 0.25s ease;
	}
	.email-link:hover {
		color: #98c816;
	}
	.email-icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	/* ─── Copyright Bar ─── */
	.copyright-bar {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(0, 0, 0, 0.15);
	}
	.copyright-inner {
		max-width: 72rem;
		margin: 0 auto;
		padding: 1.25rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		text-align: center;
	}
	.copyright-inner p {
		color: rgba(255, 255, 255, 0.35);
		font-size: 0.75rem;
		margin: 0;
	}
	.copyright-inner strong {
		color: rgba(255, 255, 255, 0.55);
		font-weight: 600;
	}

	@media (min-width: 768px) {
		.copyright-inner {
			flex-direction: row;
			justify-content: space-between;
		}
		.wave-svg {
			height: 120px;
		}
		.wave-container {
			margin-top: -120px;
		}
	}
</style>
