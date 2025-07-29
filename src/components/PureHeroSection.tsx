// LCP-Optimized Hero Section with Pure Inline Styles - Zero Runtime CSS Processing
export default function PureHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          [data-lcp] {
            background-image: url('https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif');
          }
          @media (max-width: 768px) {
            [data-lcp] {
              background-image: url('https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif') !important;
              min-height: 600px !important;
              height: auto !important;
            }
            [data-hero-content] {
              margin-top: 85px !important;
              padding: 20px 16px 40px 16px !important;
            }
            [data-hero-headline] {
              font-size: 28px !important;
              line-height: 34px !important;
            }
            [data-hero-description] {
              font-size: 15px !important;
              line-height: 23px !important;
            }
            [data-hero-rating] {
              padding: 8px 14px !important;
              margin-bottom: 24px !important;
            }
            [data-hero-cta] {
              padding: 14px 28px !important;
              min-height: 48px !important;
            }
          }
          @media (min-width: 769px) {
            [data-lcp] {
              height: 612px;
              min-height: 612px;
            }
            [data-hero-headline] {
              font-size: 48px;
              line-height: 54px;
            }
            [data-hero-description] {
              font-size: 18px;
              line-height: 28px;
            }
          }
        `
      }} />
      
      <section
        style={{
          position: 'relative',
          width: '100vw',
          height: '64vh',
          minHeight: '476px',
          overflow: 'hidden',
          contain: 'layout paint',
          willChange: 'transform',
          backgroundSize: 'cover',
          backgroundPosition: '60% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local'
        }}
        role="img"
        aria-label="CleanWin Hero Background"
        data-lcp
      >
        {/* Invisible high-priority images for browser resource prioritization */}
        <img
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1
          }}
        />
        <img
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1
          }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)'
        }} />
        
        <div 
          data-hero-content
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 16px 32px 16px',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <div style={{
            maxWidth: '1152px',
            width: '100%'
          }}>
            <h1 
              data-hero-headline
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
                fontSize: '32px',
                fontWeight: 800,
                lineHeight: '38px',
                margin: '0 0 16px 0',
                color: 'white',
                textShadow: 'rgba(0,0,0,0.1) 0px 4px 6px',
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            >
              Professionelle Reinigung in Winterthur & Region
            </h1>
            
            <p 
              data-hero-description
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                margin: '0 auto 24px auto',
                maxWidth: '768px',
                color: 'rgba(255,255,255,0.95)'
              }}
            >
              Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe. 
              Keine Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
            </p>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '32px',
              marginTop: '16px'
            }}>
              <div 
                data-hero-rating
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: 'white',
                  marginBottom: '32px'
                }}
              >
                <svg style={{width: '32px', height: '32px', marginRight: '8px'}} viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '2px'
                }}>
                  <div style={{display: 'flex'}}>
                    <svg style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                    </svg>
                    <svg style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                    </svg>
                    <svg style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                    </svg>
                    <svg style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                    </svg>
                    <div style={{position: 'relative'}}>
                      <svg style={{width: '16px', height: '16px', color: '#e5e7eb', fill: '#e5e7eb'}} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                      </svg>
                      <div style={{position: 'absolute', top: '0px', left: '0px', width: '50%', overflow: 'hidden'}}>
                        <svg style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    lineHeight: '13.2px',
                    opacity: 0.8
                  }}>
                    4.7 aus +110 Bewertungen
                  </span>
                </div>
              </div>
              
              <div>
                <a 
                  href="/kontakt" 
                  data-hero-cta
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    color: '#374151',
                    padding: '16px 32px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  Jetzt unverbindlich kontaktieren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
