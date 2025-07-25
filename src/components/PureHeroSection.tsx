// Pure HTML implementation - No React styling patterns
export default function PureHeroSection() {
  return (
    <div
      data-lcp
      dangerouslySetInnerHTML={{
        __html: `
          <section style="position:relative;width:100vw;height:64vh;min-height:476px;max-height:64vh;overflow:hidden;">
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
            <div style="position:relative;z-index:10;height:100%;display:flex;align-items:center;justify-content:center;padding:100px 16px 32px 16px;text-align:center;color:white;">
              <div style="max-width:1152px;width:100%;">
                <h1 style="font-size:32px;font-weight:800;line-height:38px;margin-bottom:16px;margin-top:0;color:white;text-shadow:rgba(0,0,0,0.1) 0px 4px 6px;">
                  Professionelle Reinigung in Winterthur & Region
                </h1>
                <p style="font-size:16px;line-height:24px;margin-bottom:24px;margin-top:0;margin-left:auto;margin-right:auto;max-width:768px;color:rgba(255,255,255,0.95);">
                  Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe. Keine Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
                </p>
                <a href="/kontakt" style="display:inline-block;background-color:white;color:#374151;padding:16px 32px;border-radius:9999px;font-size:14px;font-weight:600;text-decoration:none;">
                  Jetzt unverbindlich kontaktieren
                </a>
              </div>
            </div>
          </section>
        `
      }}
    />
  );
}
