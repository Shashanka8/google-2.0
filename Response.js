export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '9370000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2ca875220b1ce898a',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '9370000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2ca875220b1ce898a',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.589475,
    formattedSearchTime: '0.59',
    totalResults: '9370000',
    formattedTotalResults: '9,370,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello World Shopping',
      htmlTitle: '<b>Hello World</b> Shopping',
      link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
      displayLink: 'www.google.com',
      snippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...',
      htmlSnippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
      cacheId: 'q0-peCHq4tIJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            name: 'Hello World Shopping',
            description: 'Hello World Shopping',
            url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Shopping',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World Shopping',
            'og:title': 'Hello World Shopping',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:description': 'Hello World Shopping',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! Processing',
      htmlTitle: '<b>Hello World</b>! Processing',
      link: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      htmlSnippet:
        '<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      cacheId: 'LkrfSTqN6ZAJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            name: 'Hello World! Processing',
            description: 'Hello World! Processing',
            url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! Processing',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World! Processing',
            'og:title': 'Hello World! Processing',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:description': 'Hello World! Processing',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Street View – Google Earth Education',
      htmlTitle: 'Street View – Google <b>Earth</b> Education',
      link: 'https://www.google.com/earth/education/tools/street-view/',
      displayLink: 'www.google.com',
      snippet:
        'Hello World. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that ...',
      htmlSnippet:
        '<b>Hello World</b>. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that&nbsp;...',
      cacheId: '3JVjy8mTuWQJ',
      formattedUrl: 'https://www.google.com/earth/education/tools/street-view/',
      htmlFormattedUrl:
        'https://www.google.com/<b>earth</b>/education/tools/street-view/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPZfrHx-q2hW2XybZmW_HVHjH9SjxMpXPG1eFgrSP4_lPw7fScrssNPSg',
            width: '259',
            height: '194',
          },
        ],
        metatags: [
          {
            viewport: 'width=device-width, initial-scale=1.0',
            'og:title': 'Street View',
            'og:url':
              'https://www.google.com/earth/education/tools/street-view/',
          },
        ],
        cse_image: [
          {
            src: 'https://i1.ytimg.com/vi/UrS9AVPUMFQ/hqdefault.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
      htmlTitle:
        '<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance',
      link: 'https://www.google.com/finance/quote/HLO:ASX',
      displayLink: 'www.google.com',
      snippet:
        'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...',
      htmlSnippet:
        'Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...',
      formattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      htmlFormattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8',
            width: '311',
            height: '162',
          },
        ],
        metatags: [
          {
            'application-name': 'Google Finance',
            'og:image':
              'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
            'theme-color': '#ffffff',
            'og:type': 'website',
            'og:image:width': '770',
            'twitter:card': 'summary',
            'twitter:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'apple-mobile-web-app-title': 'Google Finance',
            'og:title':
              'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'og:image:height': '402',
            'og:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'twitter:image':
              'https://ssl.gstatic.com/finance/favicon/finance_496x496.png',
            referrer: 'origin',
            'apple-mobile-web-app-status-bar-style': 'default',
            'msapplication-tap-highlight': 'no',
            'twitter:site': '@google',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'mobile-web-app-capable': 'yes',
            'og:url': 'https://www.google.com/finance/quote/HLO:ASX',
          },
        ],
        cse_image: [
          {
            src: 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google',
      htmlTitle: 'Google',
      link: 'https://www.google.com/',
      displayLink: 'www.google.com',
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        'Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...',
      cacheId: 'y14FcUQOGl4J',
      formattedUrl: 'https://www.google.com/',
      htmlFormattedUrl: 'https://www.google.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc',
            width: '320',
            height: '112',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            viewport: 'width=device-width,minimum-scale=1.0',
            google: 'notranslate',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Docs: Free Online Document Editor | Google Workspace',
      htmlTitle: 'Google Docs: Free Online Document Editor | Google Workspace',
      link: 'https://www.google.com/docs/about/',
      displayLink: 'www.google.com',
      snippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      htmlSnippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      cacheId: 'B4Skq4M5akkJ',
      formattedUrl: 'https://www.google.com/docs/about/',
      htmlFormattedUrl: 'https://www.google.com/docs/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwELdtonBh-4WwJ2BtD4mygtEC5WJBYy4XjXbIvY4YA92EZHCyMfTD',
            width: '36',
            height: '36',
          },
        ],
        metatags: [
          {
            referrer: 'no-referrer',
            'og:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
            'twitter:title':
              'Google Docs: Free Online Document Editor | Google Workspace',
            'og:type': 'website',
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
            'twitter:url': 'https://twitter.com/googledocs',
            'twitter:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'og:title':
              'Google Docs: Free Online Document Editor | Google Workspace',
            'og:url': 'https://www.facebook.com/GoogleDocs/',
            'twitter:creator': 'Google',
            'og:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'twitter:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
        cse_image: [
          {
            src: 'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Search - Discover How Google Search Works',
      htmlTitle: 'Google Search - Discover How Google Search Works',
      link: 'https://www.google.com/search/howsearchworks/',
      displayLink: 'www.google.com',
      snippet:
        "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search.",
      htmlSnippet:
        'Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search.',
      cacheId: 'QaaN9KCyEasJ',
      formattedUrl: 'https://www.google.com/search/howsearchworks/',
      htmlFormattedUrl: 'https://www.google.com/search/howsearchworks/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'og:type': 'website',
            'twitter:card': 'summary',
            'twitter:title': 'Google Search - Discover How Google Search Works',
            'og:site_name': 'Google Search - Discover How Google Search Works',
            'og:title': 'Google Search - Discover How Google Search Works',
            'og:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:image:secure_url':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'twitter:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            referrer: 'no-referrer',
            viewport: 'width=device-width, initial-scale=1.0',
            'twitter:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:locale': 'en',
            'og:url': 'https://www.google.com/search/howsearchworks/',
          },
        ],
        cse_image: [
          {
            src: 'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Docs – create and edit documents online, for free.',
      htmlTitle: 'Google Docs – create and edit documents online, for free.',
      link: 'https://www.google.com/intl/en-GB/docs/about/',
      displayLink: 'www.google.com',
      snippet:
        'google; google maps; google translate; google drive; google docs; google earth. golden state warriors; golden corral; golf; golfnow; gold price; gold cup.',
      htmlSnippet:
        'google; google maps; google translate; google drive; google docs; google <b>earth</b>. golden state warriors; golden corral; golf; golfnow; gold price; gold cup.',
      cacheId: '74i9kLyrVA4J',
      formattedUrl: 'https://www.google.com/intl/en-GB/docs/about/',
      htmlFormattedUrl: 'https://www.google.com/intl/en-GB/docs/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqO0pDoFK9gostQa4y-pPe9MFcA6On9lqSTUp35O0uudVcQ1m956g',
            width: '120',
            height: '120',
          },
        ],
        metatags: [
          {
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/intl/en-GB/docs/about/images/common/add-pam.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "Alan Turing's 100th Birthday",
      htmlTitle: 'Alan Turing&#39;s 100th Birthday',
      link: 'https://www.google.com/doodles/alan-turings-100th-birthday',
      displayLink: 'www.google.com',
      snippet:
        'Jun 23, 2012 ... The code for this doodle has been open sourced. Alan Turing was a completely original thinker who shaped the modern world, but many people ...',
      htmlSnippet:
        'Jun 23, 2012 <b>...</b> The code for this doodle has been open sourced. Alan Turing was a completely original thinker who shaped the modern <b>world</b>, but many people&nbsp;...',
      formattedUrl:
        'https://www.google.com/doodles/alan-turings-100th-birthday',
      htmlFormattedUrl:
        'https://www.google.com/doodles/alan-turings-100th-birthday',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCYztJQqxWJNedwpvpAYABR8kOs6rDfdh0E_Sli1cozxfeTG5Vb56If3c',
            width: '521',
            height: '96',
          },
        ],
        metatags: [
          {
            'og:image':
              'http://www.google.com/logos/2012/turing-doodle-static.jpg',
            'twitter:card': 'summary_large_image',
            'twitter:title': "Alan Turing's 100th Birthday",
            'og:image:width': '522',
            'og:type': 'website',
            'twitter:site': '@GoogleDoodles',
            viewport: 'width=device-width',
            'twitter:description': "Alan Turing's 100th Birthday #GoogleDoodle",
            'og:title': "Alan Turing's 100th Birthday",
            'og:image:height': '97',
            'og:description': "Alan Turing's 100th Birthday #GoogleDoodle",
            'twitter:image':
              'http://www.google.com/logos/2012/turing-doodle-static.jpg',
          },
        ],
        cse_image: [
          {
            src: 'http://www.google.com/logos/2012/turing-doodle-static.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Slides – create and edit presentations online, for free.',
      htmlTitle:
        'Google Slides – create and edit presentations online, for free.',
      link: 'https://www.google.com/intl/en-GB/slides/about/',
      displayLink: 'www.google.com',
      snippet:
        'Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint ...',
      htmlSnippet:
        'Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint&nbsp;...',
      cacheId: 'ZGn_PEZ9DdcJ',
      formattedUrl: 'https://www.google.com/intl/en-GB/slides/about/',
      htmlFormattedUrl: 'https://www.google.com/intl/en-GB/slides/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nYrM_Nhi0qjXxM876Rkm3HhW5s49dGIb5URbs5ogiIVTgKV8gI0alw',
            width: '120',
            height: '120',
          },
        ],
        metatags: [
          {
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/intl/en-GB/slides/about/images/common/add-kim.jpg',
          },
        ],
      },
    },
  ],
};
