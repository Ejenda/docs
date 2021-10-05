export default {
  title: "Ejenda Docs",
  description: "",
  template: "docs",
  github: {
    repo: "https://github.com/ejenda/docs",
    branch: "main",
    releases: "https://github.com/ejenda/ejenda",
  },
  layout: {
    aside: true,
  },
  theme: {
    logo: '/icon.png',
    shortcuts: {
      'd-header': "p-2 bg-red-100 flex justify-between h-[57.5px] print:hidden",
      'd-container-content': 'ml-0 mr-0 justify-between'
    },
    header: {
      logo: '/icon.png',
    },
    colors: {
      primary: "#ef4444",
      logo: "#f87171",
    },
  },
};
