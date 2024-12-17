import AuthLogo from "../extensions/my-logo.png";
import MenuLogo from "../extensions/logo.png";
import favicon from "../extensions/favicon.png";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      // Try to change the origin favicon.png file in the
      // root of strapi project if this config don't work.
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    // locales: ["fr", "de"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#ffe2eb",  // Light pink
        primary200: "#ffb3ca",  // Soft pink
        primary500: "#fe0468",  // Bright pink (base color)
        primary600: "#d20458",  // Slightly darker pink
        primary700: "#a00345",  // Deep pink

        danger100: "#fdd8d0",   // Light red
        danger500: "#e8503a",   // Bright red
        danger700: "#b72b1a",   // Deep red

        buttonPrimary100: "#ffe2eb",  // Light pink for buttons
        buttonPrimary500: "#fe0468",  // Bright pink for buttons (same as primary500)
        buttonPrimary700: "#a00345",  // Deep pink for buttons

      },
    },
    // Extend the translations
    // translations: {
    //   fr: {
    //     "Auth.form.email.label": "test",
    //     Users: "Utilisateurs",
    //     City: "CITY (FRENCH)",
    //     // Customize the label of the Content Manager table.
    //     Id: "ID french",
    //   },
    // },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() { },
};