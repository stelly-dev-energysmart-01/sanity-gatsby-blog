export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db33a1d71da9ba0163ba383',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hdmob5ct',
                  apiId: '0a0b0b52-6fc1-43a0-a958-dac1561fc85b'
                },
                {
                  buildHookId: '5db33a1daed8ce019aebb94a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zd139he3',
                  apiId: 'c0d53166-85a4-4c30-9161-7094f6754734'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stelly-dev-energysmart-01/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zd139he3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
