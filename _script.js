/* 
  Lenawei Safaris - Ultra-Detailed, Modern CSS
  Author: Lenawei Safaris (Improved by Copilot)
  Description: World-class, visually stunning, responsive, and accessible stylesheet for a safari/travel single-page website.
*/

/* ====== GLOBAL RESETS ====== */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh;
  font-family: 'Montserrat', Arial, sans-serif;
  background: #f9f6ef;
  color: #222;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  line-height: 1.7;
  font-size: 1.08rem;
  letter-spacing: .02em;
  background: linear-gradient(180deg, #f9f6ef 0%, #fffbe6 100%);
  min-height: 100vh;
  transition: background 0.3s;
}

/* ====== TYPOGRAPHY ====== */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  margin-top: 0;
  color: #3a3a1a;
  letter-spacing: 0.01em;
}

h1 { font-size: 2.9rem; margin: 1.2rem 0; }
h2 { font-size: 2.15rem; margin: 1rem 0; }
h3 { font-size: 1.4rem; margin: 1rem 0 .7rem 0; }
h4 { font-size: 1.18rem; }
p, ul, ol { margin-bottom: 1.2em; }
a {
  color: #448C2C;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover, a:focus { color: #638e3b; text-decoration: underline; }

/* ====== CONTAINER & GRID ====== */
.container {
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: transparent;
}
@media (max-width: 700px) {
  .container { width: 99%; }
}

/* ====== HEADER & NAV ====== */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.97);
  box-shadow: 0 2px 18px rgba(188,176,96,0.08);
  transition: box-shadow 0.2s;
}
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .7rem 0;
  gap: 2vw;
}
.logo-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo {
  height: 54px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(150,120,32,0.13);
}
.brand {
  font-size: 1.6rem;
  font-family: 'Merriweather', serif;
  letter-spacing: .03em;
  color: #35502a;
  font-weight: 700;
}
.brand-accent { color: #e6b800; }

/* NAVIGATION */
nav {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.1rem;
  margin: 0;
  padding: 0;
  align-items: center;
  background: transparent;
}
.nav-link {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.07rem;
  padding: .6rem 1.2rem;
  border-radius: 30px;
  transition: background 0.2s, color 0.2s;
  color: #4b5320;
  font-weight: 500;
  position: relative;
  letter-spacing: .01em;
}
.nav-link.active,
.nav-link:hover,
.nav-link:focus {
  background: #e6b8001a;
  color: #35502a;
}
.nav-link.special {
  color: #fff;
  background: #e6b800;
  margin-left: .4rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(230,184,0,0.13);
}
.nav-link.special:hover { color: #f7ffe4; background: #bfa200; }
.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2.1rem;
  margin-left: .7rem;
  color: #4b5320;
  cursor: pointer;
  transition: color 0.2s;
}

/* Header CTA Button */
.header-cta .btn-highlight {
  background: #e6b800;
  color: #fff;
  padding: .75em 1.5em;
  border-radius: 28px;
  font-size: 1.1rem;
  font-weight: 700;
  transition: background .22s;
  border: none;
  box-shadow: 0 3px 12px rgba(230,184,0,0.13);
}
.header-cta .btn-highlight:hover { background: #bfa200; color: #fff; }

/* Responsive Nav */
@media (max-width: 950px) {
  .nav-links {
    flex-direction: column;
    background: #fffbe6;
    position: absolute;
    top: 70px; right: 0; left: 0;
    display: none;
    gap: 0;
    box-shadow: 0 4px 24px rgba(188,176,96,0.13);
    z-index: 999;
    padding: 1.2em 0;
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 1em 2em; border-radius: 0; }
  .nav-toggle { display: block; }
}

@media (max-width: 700px) {
  .header-bar { flex-direction: column; gap: .5rem; }
  .logo { height: 36px; }
}

/* ====== HERO SECTION ====== */
.hero {
  position: relative;
  min-height: 85vh;
  background: linear-gradient(rgba(31, 49, 24,.25),rgba(31,49,24,.10)), url('images/safari-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 0 16px 32px rgba(88,88,25,0.11);
  overflow: hidden;
  border-bottom: 2px solid #e6b80033;
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, rgba(230,184,0,0.10) 0%, rgba(31,49,24,0.34) 100%);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 4vw;
  padding: 5vw 3vw 3vw 3vw;
}
.hero-text {
  flex: 2 1 460px;
  max-width: 640px;
  color: #fff;
  text-shadow: 0 3px 20px rgba(31,49,24,0.17);
}
.hero-text h1 {
  font-size: 3.1rem;
  line-height: 1.1;
  margin-bottom: .7em;
  color: #fff;
  letter-spacing: 0.01em;
}
.hero-text .highlight {
  color: #e6b800;
  background: rgba(31,49,24,0.16);
  padding: 0 .3em;
  border-radius: 8px;
}
.hero-text p {
  font-size: 1.22rem;
  margin-bottom: 1.5em;
  color: #f7ffe4;
}
.hero-btns {
  display: flex;
  gap: 1.4em;
  margin-bottom: 1.2em;
}
.btn, .btn-lg, .btn-alt, .btn-sm {
  display: inline-block;
  text-align: center;
  border: none;
  border-radius: 32px;
  padding: .75em 2.1em;
  background: #4b5320;
  color: #ffe082;
  font-weight: 700;
  font-size: 1.13rem;
  cursor: pointer;
  margin-right: .7em;
  transition: background .22s, color .22s, box-shadow .22s;
  box-shadow: 0 4px 18px rgba(76, 83, 32, 0.12);
}
.btn-lg { font-size: 1.21rem; padding: 1em 2.5em; }
.btn-alt {
  background: #e6b800;
  color: #fff;
}
.btn-alt:hover, .btn-lg:hover, .btn:hover {
  background: #638e3b;
  color: #fff;
  box-shadow: 0 6px 24px rgba(136,100,0,0.14);
}
.btn-sm {
  font-size: 1rem;
  padding: .45em 1.3em;
  background: #fffbe6;
  color: #4b5320;
  border: 1.6px solid #e6b800;
  margin-top: 1em;
  box-shadow: none;
}
.btn-sm:hover { background: #e6b800; color: #fff; }
.hero-awards img {
  height: 38px;
  margin-right: 1em;
  background: #fffbe6;
  border-radius: 8px;
  box-shadow: 0 1px 7px rgba(136,100,0,0.13);
}
.hero-media {
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
}
.hero-img {
  width: 340px;
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31,49,24,0.23);
  margin-bottom: .7em;
}
.hero-video {
  width: 340px;
  max-width: 100%;
  aspect-ratio: 16/9;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31,49,24,0.13);
  background: #222;
}
.hero-video iframe {
  width: 100%;
  height: 100%;
  border: none;
}
.hero-socials {
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  gap: 1.3em;
  z-index: 3;
}
.hero-socials a {
  font-size: 1.44rem;
  color: #fffbe6;
  background: #35502a;
  border-radius: 50%;
  width: 38px; height: 38px;
  display: flex;
  align-items: center; justify-content: center;
  transition: background .21s, color .21s, box-shadow .21s;
  box-shadow: 0 2px 8px rgba(188,176,96,0.11);
}
.hero-socials a:hover { background: #e6b800; color: #35502a; box-shadow: 0 4px 16px #e6b80022; }
.scroll-down-indicator {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}
.scroll-down-indicator a {
  color: #e6b800;
  font-size: 2.2rem;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(10px);}
}

/* Responsive Hero */
@media (max-width: 1000px) {
  .hero-content { flex-direction: column; align-items: flex-start; }
  .hero-media { align-items: flex-start; }
  .hero-socials { left: 20px; bottom: 16px; }
}
@media (max-width: 700px) {
  .hero-content { padding: 3vw 1vw 1vw 1vw; }
  .hero-img, .hero-video { width: 98vw; }
  .hero-text h1 { font-size: 2rem; }
}

/* More improvements: better mobile spacing, grid gaps, shadows, etc.
   ... (The rest of your CSS is already quite detailed and well-structured, so small tweaks are made below for padding, gaps, and contrasts) */

/* ====== ABOUT, DESTINATIONS, TOURS, ETC. ====== */

/* Use slightly larger gaps and more consistent paddings for all grids */
.why-grid, .destinations-grid, .tour-cards, .gallery-grid, .team-grid, .resources-grid, .offers-grid {
  gap: 2.3rem;
}

/* Slightly more prominent card shadows and hover scale */
.why-card, .destination-card, .tour-card, .gallery-item, .team-member, .resource-card, .offer-card, .testimonial {
  box-shadow: 0 2px 16px rgba(188,176,96,0.11);
  transition: box-shadow 0.18s, transform 0.16s;
}
.why-card:hover, .destination-card:hover, .tour-card:hover, .gallery-item:hover, .team-member:hover, .resource-card:hover, .offer-card:hover, .testimonial:hover {
  box-shadow: 0 8px 32px rgba(136,100,0,0.16);
  transform: translateY(-4px) scale(1.04);
}

/* FAQ focus + answer animation */
.faq-question:focus {
  outline: 2.4px solid #e6b800;
  background: #f9f6ef;
}
.faq-item .faq-answer {
  transition: max-height .35s cubic-bezier(.4,0,.2,1), padding .15s;
}

/* Newsletter and Contact improvements */
#newsletter-form label, .contact-form-box form label {
  font-weight: 600;
  color: #35502a;
  letter-spacing: .01em;
}
#newsletter-email, .contact-form-box input, .contact-form-box textarea {
  border: 1.5px solid #e6b800;
  border-radius: 22px;
  padding: .8em 1.2em;
  font-size: 1.08rem;
  background: #fff;
  transition: border-color 0.18s;
}
#newsletter-email:focus, .contact-form-box input:focus, .contact-form-box textarea:focus {
  border-color: #bfa200;
}

/* Custom scrollbar improvements */
::-webkit-scrollbar { width: 10px; background: #fffbe6; }
::-webkit-scrollbar-thumb {
  background: #e6b80088;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover { background: #e6b800cc; }

/* Footer: larger links and social icons */
footer nav a {
  font-size: 1.07rem;
  padding: .2em .5em;
}
.footer-socials a {
  width: 36px; height: 36px;
  font-size: 1.5rem;
}

@media (max-width: 600px) {
  .container { width: 100%; }
  .btn, .btn-lg, .btn-alt { padding: .6em 1.1em; font-size: .97rem; }
  .special-offers, .about-history, .about-video, .impact-stats, .gallery-video, .newsletter, .partners { padding: 1.3em .4em; }
  footer { font-size: .96rem; padding: 1.1rem 0 1rem 0; }
}

/* Accessibility improvements */
:focus {
  outline: 2.4px solid #e6b800;
  outline-offset: 2px;
}
[aria-live="polite"] { font-style: italic; color: #e6b800; }

/* Print styles unchanged from your original */
@media print {
  header, nav, .btn, .scroll-down-indicator, .hero-video, .gallery-video, #scroll-to-top, .testimonial-nav, .contact-socials, .footer-socials, .offers, .newsletter, .partners, .special-offers, .tours-cta {
    display: none !important;
  }
  body, .container {
    background: #fff !important;
    color: #111 !important;
  }
}
