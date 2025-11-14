import Script from "next/script";

let cachedGtmId: string | null | undefined;
let hasWarned = false;

const isProduction = process.env.NODE_ENV === "production";

function resolveGtmId() {
  if (cachedGtmId !== undefined) {
    return cachedGtmId;
  }

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!isProduction) {
    if (!gtmId && !hasWarned) {
      console.warn(
        "[GTM] NEXT_PUBLIC_GTM_ID is not set; Google Tag Manager disabled in development."
      );
      hasWarned = true;
    }
    cachedGtmId = null;
    return cachedGtmId;
  }

  if (!gtmId) {
    if (!hasWarned) {
      console.warn(
        "[GTM] NEXT_PUBLIC_GTM_ID is missing; Google Tag Manager will not be initialized."
      );
      hasWarned = true;
    }
    cachedGtmId = null;
    return cachedGtmId;
  }

  cachedGtmId = gtmId;
  return cachedGtmId;
}

export function GTMHead() {
  const gtmId = resolveGtmId();

  if (!gtmId) {
    return null;
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

export function GTMNoScript() {
  const gtmId = resolveGtmId();

  if (!gtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        title="google-tag-manager"
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
