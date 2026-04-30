"use client";

import { useEffect } from "react";

export function SalesforceChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("sf-embedded-messaging-script")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "sf-embedded-messaging-script";
    script.src = "https://orgfarm-2f0187d65f-dev-ed.develop.my.site.com/ESWWebsiteChatBot1777476051546/assets/js/bootstrap.min.js";
    script.async = true;

    script.onload = () => {
      try {
        const win = window as any;
        if (win.embeddedservice_bootstrap) {
          win.embeddedservice_bootstrap.settings.language = "en_US";
          win.embeddedservice_bootstrap.init(
            "00DgK00000KnrZ7",
            "Website_Chat_Bot",
            "https://orgfarm-2f0187d65f-dev-ed.develop.my.site.com/ESWWebsiteChatBot1777476051546",
            {
              scrt2URL: "https://orgfarm-2f0187d65f-dev-ed.develop.my.salesforce-scrt.com",
            }
          );
        }
      } catch (err) {
        console.error("Error loading Embedded Messaging: ", err);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
