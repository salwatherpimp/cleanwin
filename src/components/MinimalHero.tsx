export default function MinimalHero() {
  return (
    <section data-lcp>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/w_480,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          type="image/avif"
        />
        <source
          media="(min-width: 769px)"
          srcSet="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          type="image/avif"
        />
        <img
          src="https://res.cloudinary.com/dwlk9of7h/image/upload/w_1280,q_70/v1752095181/dobiinter_A_close-up_of_a_cleaning_bucket_filled_with_turqois_c8b4fac7-6123-4eb8-a980-923d98629a76_2_ijdnha.avif"
          alt="CleanWin Hero Background"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      <div>
        <div>
          <h1>Professionelle Reinigung in Winterthur & Region</h1>
          <p>Unsere Reinigungsdienstleistung steht für Qualität, faire Preise und echte Nähe.</p>
          <a href="/kontakt">Jetzt unverbindlich kontaktieren</a>
        </div>
      </div>
    </section>
  );
}
