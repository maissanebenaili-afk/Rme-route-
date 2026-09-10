import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mreroute.app",
  appName: "RME Route",
  webDir: "out",
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: "#065F46",
      showSpinner: false
    },
    Geolocation: {}
  }
};

export default config;
