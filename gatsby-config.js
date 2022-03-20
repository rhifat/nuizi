module.exports = {
  flags: {
    DEV_SSR: false
  },
  pathPrefix: "/nuizi",
 
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-news',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        
      }
    }
  ],

  
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Nuizi.com',
    name: 'Nuizi',
    description: 'Yeni nesil bilgi-eğlence sitesi',
    address: 'Türkiye',
    email: 'nuizidotcom@gmail.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/rhifat'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/nuizi01'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/nuizi-dot-com'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Ana Sayfa',
        slug: '/'
      },
      {
        name: 'Yazarlarımız',
        slug: '/authors'
      },
      {
        name: 'İletişim',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Hızlı Linkler',
        items: [
          {
            name: 'Görüş Öneri İletişim',
            slug: '/contact'
          },
          {
            name: 'Hakkımızda',
            slug: '/about'
          },
          {
            name: 'İletişim',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
