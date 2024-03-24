import { skeleton } from "@skeletonlabs/tw-plugin"
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import { join } from "path"
import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        preset: [
          {
            name: "modern",
            enhancements: true,
          },
          {
            name: "crimson",
            enhancements: true,
          },
          {
            name: "gold-nouveau",
            enhancements: true,
          },
          {
            name: "vintage",
            enhancements: true,
          },
          {
            name: "rocket",
            enhancements: true,
          },
          {
            name: "hamlindigo",
            enhancements: true,
          },
          {
            name: "skeleton",
            enhancements: true,
          },
          {
            name: "wintry",
            enhancements: true,
          },
          {
            name: "sahara",
            enhancements: true,
          },
          {
            name: "seafoam",
            enhancements: true,
          },
        ],
      },
    }),
  ],
} satisfies Config
