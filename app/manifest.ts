import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MRE Route",
    short_name: "MRE Route",
    description: "Assistant de voyage Europe ↔ Maroc avec itinéraire, budget et services utiles.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#065F46",
    lang: "fr",
  };
}
