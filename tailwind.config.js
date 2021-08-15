module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "button-primary": "var(--button-primary)",
        input: "var(--input)",
        text: "var(--text)",
        "text-primary": "var(--text-primary)",
        placeholder: "var(--placeholder)",
        "form-label": "var(--form-label)",
        "input-border": "var(--form-border)",
        "text-crumb-active": "var(--text-crumb-active)",
        crumb: "var(--crumb)",
        "crumb-active": "var(--crumb-active)",
        "crumb-completed": "var(--crumb-completed)",
      },
      fontFamily: {
        sofia: ["Sofia Pro", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
