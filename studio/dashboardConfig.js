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
                  buildHookId: '5d23b5ff7bbdf4001e98f296',
                  title: 'Sanity Studio',
                  name: 'DRDL-sanity-gatsby-blog-studio',
                  apiId: '319a9aa1-24fe-4083-80f5-3c9492e11f8e'
                },
                {
                  buildHookId: '5d23b5ff357ed6e3a805c1c2',
                  title: 'Blog Website',
                  name: 'DRDL-sanity-gatsby-blog',
                  apiId: '8700ac2e-5939-4346-8a90-abfd9efa0a3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DarinLevesque/DRDL-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://DRDL-sanity-gatsby-blog.netlify.com', category: 'apps'}
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
