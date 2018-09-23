module.exports = {
    title: 'Vue2Leaflet documentation',
    description: 'Documentation for Vue2Leaflet, Guide, API and samples',
    head: [
      ['link', {rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'}]
    ],
    themeConfig: {
      sidebar: 'auto',
      repo: 'KoRiGaN/Vue2Leaflet',
      docsDir: 'docs',
      docsBranch: 'docs',
      editLinks: true,
      editLinkText: 'Help us improve this page!',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Components', link: '/components/' }
      ]
    }
  }