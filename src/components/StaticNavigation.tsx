// Static Navigation - Zero JavaScript for LCP optimization
export default function StaticNavigation() {
  return (
    <div className="nav-wrapper" style={{
      position: 'fixed',
      top: '16px',
      left: '0',
      right: '0',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 'calc(100vw - 20px)',
      margin: '0 auto',
      padding: '0 10px',
    }}>
      <nav className="nav-pill" style={{
        background: 'white',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        height: '56px',
        minHeight: '56px',
        padding: '8px 16px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1200px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'visible',
      }}>
        {/* Static Logo - No Next.js Image, pure HTML */}
        <a href="https://cleanwin.vercel.app/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <img
            src="https://res.cloudinary.com/dwlk9of7h/image/upload/v1752409362/cleanwin-logo-new_1_zflok6.png"
            alt="CleanWin Logo"
            width={110}
            height={30}
            decoding="async"
            style={{ width: 'auto', height: '30px', maxWidth: '110px' }}
          />
        </a>
        
        {/* Desktop Menu - Static links only, no JavaScript */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          marginLeft: '32px',
        }} className="desktop-menu">
          <a href="https://cleanwin.vercel.app/leistungen/fensterreinigung" style={{
            textDecoration: 'none',
            color: '#374151',
            fontWeight: '500',
            fontSize: '14px',
            padding: '10px 16px',
            borderRadius: '25px',
            whiteSpace: 'nowrap',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
          }}>
            Dienstleistungen
          </a>
          <a href="https://cleanwin.vercel.app/ueber-uns" style={{
            textDecoration: 'none',
            color: '#374151',
            fontWeight: '500',
            fontSize: '14px',
            padding: '10px 16px',
            borderRadius: '25px',
            whiteSpace: 'nowrap',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
          }}>
            Über uns
          </a>
          <a href="https://cleanwin.vercel.app/referenzen" style={{
            textDecoration: 'none',
            color: '#374151',
            fontWeight: '500',
            fontSize: '14px',
            padding: '10px 16px',
            borderRadius: '25px',
            whiteSpace: 'nowrap',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
          }}>
            Referenzen
          </a>
        </div>

        {/* Static CTA Button - Simple link, no dropdowns */}
        <a href="/kontakt" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#0DA6A6',
          color: 'white',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '20px',
          fontWeight: '500',
          fontSize: '13px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(13, 166, 166, 0.3)',
          height: '36px',
          minHeight: '36px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Kontaktiere uns</span>
        </a>

        {/* Mobile hamburger placeholder - no functionality during LCP */}
        <div style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          background: 'none',
          border: 'none',
          padding: '4px',
          flexShrink: 0,
          borderRadius: '16px',
          display: 'none'
        }} className="hamburger-placeholder">
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
            marginBottom: '3px',
          }}></div>
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
            marginBottom: '3px',
          }}></div>
          <div style={{
            width: '18px',
            height: '2px',
            backgroundColor: '#374151',
          }}></div>
        </div>
      </nav>
      
      {/* Critical static navigation CSS - no styled-jsx */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1023px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger-placeholder {
              display: flex !important;
            }
          }
          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
            .hamburger-placeholder {
              display: none !important;
            }
          }
        `
      }} />
    </div>
  );
}
