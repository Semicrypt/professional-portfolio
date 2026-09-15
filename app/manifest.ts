import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nwachukwu Ifeanyi Divine | Cloud & DevOps Engineer",
    short_name: "Divine",
    description:
      "Cloud and DevOps engineering portfolio of Nwachukwu Ifeanyi Divine.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070a",
    theme_color: "#05070a",
  };
}
