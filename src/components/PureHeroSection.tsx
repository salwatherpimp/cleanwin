// Pure HTML implementation - No React styling patterns
export default function PureHeroSection() {
  return (
    <div
      data-lcp
      dangerouslySetInnerHTML={{
        __html: `
          <section style="position:relative;width:100vw;height:64vh;min-height:476px;max-height:64vh;overflow:hidden;" class="hero-section">
            <picture style="position:absolute;inset:0;width:100%;height:100%;display:block;">
              <source 
                media="(max-width: 768px)" 
                srcset="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif" 
                type="image/avif">
              <source 
                media="(min-width: 769px)" 
                srcset="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif" 
                type="image/avif">
              <img 
                src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
                alt="CleanWin Hero Background" 
                width="1920" 
                height="1080" 
                loading="eager" 
                decoding="async" 
                fetchpriority="high"
                style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%;display:block;">
            </picture>
            <div style="position:absolute;inset:0;background-color:rgba(0,0,0,0.4);"></div>
            <div style="position:relative;z-index:10;height:100%;display:flex;align-items:center;justify-content:center;padding:100px 16px 32px 16px;text-align:center;color:white;" class="hero-content">
              <div style="max-width:1152px;width:100%;">
                <h1 style="font-size:32px;font-weight:800;line-height:38px;margin-bottom:16px;margin-top:0;color:white;text-shadow:rgba(0,0,0,0.1) 0px 4px 6px;">
                  Professionelle Reinigung in Winterthur & Region
                </h1>
                <p style="font-size:16px;line-height:24px;margin-bottom:24px;margin-top:0;margin-left:auto;margin-right:auto;max-width:768px;color:rgba(255,255,255,0.95);">
                  Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe. Keine Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
                </p>
                <div style="text-align:center;margin-bottom:32px;margin-top:16px;">
                  <div style="display:inline-flex;align-items:center;background-color:rgba(255,255,255,0.2);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.3);border-radius:8px;padding:8px 16px;color:white;margin-bottom:32px;">
                    <svg style="width:32px;height:32px;margin-right:8px;" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:2px;">
                      <div style="display:flex;">
                        <svg style="width:16px;height:16px;color:#fbbf24;fill:#fbbf24;" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>
                        <svg style="width:16px;height:16px;color:#fbbf24;fill:#fbbf24;" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>
                        <svg style="width:16px;height:16px;color:#fbbf24;fill:#fbbf24;" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>
                        <svg style="width:16px;height:16px;color:#fbbf24;fill:#fbbf24;" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>
                        <div style="position:relative;">
                          <svg style="width:16px;height:16px;color:#e5e7eb;fill:#e5e7eb;" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                          </svg>
                          <div style="position:absolute;top:0px;left:0px;width:50%;overflow:hidden;">
                            <svg style="width:16px;height:16px;color:#fbbf24;fill:#fbbf24;" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span style="font-size:11px;line-height:13.2px;opacity:0.8;">4.7 aus +110 Bewertungen</span>
                    </div>
                  </div>
                  <div>
                    <a href="/kontakt" style="display:inline-block;background-color:white;color:#374151;padding:16px 32px;border-radius:9999px;font-size:14px;font-weight:600;text-decoration:none;">
                      Jetzt unverbindlich kontaktieren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `
      }}
    />
  );
}
