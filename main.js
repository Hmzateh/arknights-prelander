// =============================================
// CONFIGURATION - Modifier ici
// =============================================

const CONFIG = {
    // Logo
    logoTop: "ARKNIGHTS",
    logoMain: "ENDFIELD",

    // Headline (utiliser {{highlight}} pour le texte en jaune)
    headline: "Arknights: Endfield Is Now Accessible on {{Windows PC}}",

    // Subtitle
    subtitle: "Official PC launcher required. Full installation to play.",

    // CTA Button
    ctaText: "Access Official PC Version",
    ctaLink: "{{AFFILIATE_LINK}}",

    // Disclaimer
    disclaimer: "PC version requires official launcher and installation."
};

// =============================================
// APPLICATION - Ne pas modifier
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Logo
    document.querySelector('.logo-top').textContent = CONFIG.logoTop;
    document.querySelector('.logo-main').textContent = CONFIG.logoMain;

    // Headline avec highlight
    const headlineEl = document.querySelector('.headline');
    const headlineText = CONFIG.headline.replace(
        /\{\{(.+?)\}\}/g, 
        '<span>$1</span>'
    );
    headlineEl.innerHTML = headlineText;

    // Subtitle
    document.querySelector('.subtitle').textContent = CONFIG.subtitle;

    // CTA
    const ctaBtn = document.querySelector('.cta-button');
    ctaBtn.textContent = CONFIG.ctaText;
    ctaBtn.href = CONFIG.ctaLink;

    // Disclaimer
    document.querySelector('.disclaimer').textContent = CONFIG.disclaimer;
});
