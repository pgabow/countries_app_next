import Head from "next/head";

function Meta() {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Countries info' />
      <meta
        name='keywords'
        content='weather app, next.js, typescript, tailwind css, open weather'
      />
      <meta http-equiv='author' content='P.Gabov' />
      <meta name='robots' content='noindex,nofollow' />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Countries info' />
      <meta property='og:description' content='Select a country to view information.' />
      <meta property='og:url' content='https://skill.gabow.ru' />
      <meta property='og:site_name' content='Countries info' />
      <meta property='og:image' content='http://skill.gabow.ru/images/new_logo.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='ru_RU' />
      <meta name='Address' content='Россия, Москва' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Countries info' />
      <meta name='twitter:description' content='Select a country to view information.' />
      <meta name='twitter:image' content='http://skill.gabow.ru/images/new_logo.png' />
      <meta name='twitter:image:alt' content='Skill' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@paul.gabow' />

      {/* App Favicon */}
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  )
}

export default Meta;
