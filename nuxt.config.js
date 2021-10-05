import { withDocus } from "@docus/app";
export default withDocus({
  target: 'static',
  rootDir: __dirname,
  i18n: {
    langDir: "i18n/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
  },
});