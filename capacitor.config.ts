import type { CapacitorConfig } from "@capacitor/cli";

const serverUrl = process.env.CAPACITOR_SERVER_URL?.trim();

const config: CapacitorConfig = {
  appId: "com.mreroute.app",
  appName: "MRE Route",
  webDir: "capacitor-shell",
  server: serverUrl
    ? {
        url: serverUrl,
        cleartext: serverUrl.startsWith("http://"),
      }
    : undefined,
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: "#065F46",
      showSpinner: false
    }
  }
};

export default config;
