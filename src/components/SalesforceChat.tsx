"use client";

import Script from "next/script";

export function SalesforceChat() {
  return (
    <>
      <Script id="sf-embedded-messaging" strategy="afterInteractive">
        {`
          function initEmbeddedMessaging() {
            try {
              embeddedservice_bootstrap.settings.language = 'en_US';

              embeddedservice_bootstrap.init(
                '00DgK00000KnrZ7',
                'Website_Chat_Bot',
                'https://orgfarm-2f0187d65f-dev-ed.develop.my.site.com/ESWWebsiteChatBot1777476051546',
                {
                  scrt2URL: 'https://orgfarm-2f0187d65f-dev-ed.develop.my.salesforce-scrt.com'
                }
              );
            } catch (err) {
              console.error('Error loading Embedded Messaging: ', err);
            }
          };
          window.initEmbeddedMessaging = initEmbeddedMessaging;
        `}
      </Script>
      <Script 
        src="https://orgfarm-2f0187d65f-dev-ed.develop.my.site.com/ESWWebsiteChatBot1777476051546/assets/js/bootstrap.min.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).initEmbeddedMessaging) {
            (window as any).initEmbeddedMessaging();
          }
        }}
      />
    </>
  );
}
