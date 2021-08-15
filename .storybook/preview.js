import { ConfigProvider } from "antd";

import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import frFR from "antd/lib/locale/fr_FR";

import i18n from "../src/translations/i18n";

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

const languages = {
  enUS: enUS,
  frFR: frFR,
  zhCN: zhCN,
};

export const decorators = [
  (Story, context) => {
    i18n.changeLanguage(context.globals.locale);
    return (
      <ConfigProvider locale={languages[context.globals.locale]}>
        <Story />
      </ConfigProvider>
    );
  },
];
