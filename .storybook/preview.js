import "../src/index.scss";
export const parameters = {
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        color: "#ffffff",
        default: true,
      },
      {
        name: "Dark",
        class: ["dark"],
        color: "#1e1d2c",
      },
      {
        name: "cadbury",
        class: ["cadbury"],
        color: "#342584",
      },
      {
        name: "vodafone",
        class: ["voda"],
        color: "#fd0301",
      },
      {
        name: "coca cola",
        class: ["cola"],
        color: "#000000",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "enUS",
    toolbar: {
      icon: "globe",
      items: [
        { value: "enUS", right: "🇺🇸", title: "English" },
        { value: "frFR", right: "🇫🇷", title: "Français" },
        { value: "zhCN", right: "🇨🇳", title: "中文" },
      ],
    },
  },
};