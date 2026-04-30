import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openSalesforceChat() {
  let attempts = 0;
  
  const tryLaunch = () => {
    attempts++;
    try {
      const sfWindow = window as unknown as {
        embeddedservice_bootstrap?: {
          utilAPI?: {
            launchChat: () => Promise<void>;
          };
        };
      };

      if (typeof window !== 'undefined' && sfWindow.embeddedservice_bootstrap?.utilAPI?.launchChat) {
        sfWindow.embeddedservice_bootstrap.utilAPI.launchChat()
          .then(() => {
            console.log('Salesforce chat launched successfully.');
          })
          .catch((err: unknown) => {
            console.error('Error launching Salesforce chat:', err);
          });
      } else {
        if (attempts < 20) {
          console.log(`Waiting for Salesforce chat to initialize... (Attempt ${attempts})`);
          setTimeout(tryLaunch, 500);
        } else {
          console.warn('Salesforce Embedded Messaging failed to initialize in time.');
        }
      }
    } catch (error) {
      console.error('Failed to launch Salesforce chat:', error);
    }
  };

  tryLaunch();
}
