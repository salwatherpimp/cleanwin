// LCP-Optimized Hero Section with HTML img - Zero Background-Image CSS
export default function PureHeroSection() {
  return (
    <>      
      <section
        style={{
          position: 'relative',
          width: '100vw',
          height: '64vh',
          minHeight: '476px',
          overflow: 'hidden',
          contain: 'layout style paint',
          willChange: 'auto',
          isolation: 'isolate'
        }}
        role="img"
        aria-label="CleanWin Hero Background"
        data-lcp
      >
        {/* Hero image - priority set via preload in head */}
        <img
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          srcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif 480w, https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif 1280w"
          sizes="(max-width: 768px) 480px, 1280px"
          alt=""
          loading="eager"
          decoding="async"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '60% 50%',
            zIndex: 0,
            display: 'block'
          }}
        />

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 5
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
                transform: 'translateZ(0)',
                position: 'relative',
                zIndex: 15
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
                color: 'rgba(255,255,255,0.95)',
                position: 'relative',
                zIndex: 15
              }}
            >
              Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe. 
              Keine Schwarzarbeit und 100 % Verlässlichkeit – für Privat & Gewerbe.
            </p>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '32px',
              marginTop: '16px',
              position: 'relative',
              zIndex: 15
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
                  marginBottom: '32px',
                  position: 'relative',
                  zIndex: 15
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
                  gap: '4px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    height: '16px'
                  }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span style={{
                    fontSize: '11px',
                    lineHeight: '13.2px',
                    opacity: 0.8,
                    marginTop: 0
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
                    WebkitTapHighlightColor: 'transparent',
                    position: 'relative',
                    zIndex: 15
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
