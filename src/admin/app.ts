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
        primary100: "#fe0468",
        primary200: "#fe0468",
        primary500: "#fe0468",
        primary600: "#fe0468",
        primary700: "#fe0468",
        danger700: "#b72b1a",
        buttonPrimary500: '#fe0468',
        buttonPrimary600: '#fe0468',
        buttonPrimary700: '#fe0468',
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