import {defineField} from 'sanity'

export default defineField({
  name: 'posts',
  type: 'document',
  title: 'Posts',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'coverImg',
      type: 'url',
      title: 'Cover image',
    }),
    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',
    }),
    defineField({
      name: 'content',
      type: 'markdown',
      title: 'Content',
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
    }),
    defineField({
      title: 'Tags',
      type: 'tags',
      name: 'tags',
      options: {
        predefinedTags: [
          {label: 'Web development', value: 'web-development'},
          {label: 'Personal development', value: 'personal-development'},
          {label: 'React', value: 'react'},
          {label: 'Next.js', value: 'nextjs'},
          {label: 'JavaScript', value: 'javascript'},
          {label: 'TypeScript', value: 'typescript'},
          {label: 'CSS', value: 'css'},
          {label: 'HTML', value: 'html'},
          {label: 'Git', value: 'git'},
          {label: 'Node.js', value: 'nodejs'},
          {label: 'Express.js', value: 'expressjs'},
          {label: 'MongoDB', value: 'mongodb'},
          {label: 'Exercise', value: 'exercise'},
          {label: 'React Query', value: 'react-query'},
          {label: 'Career', value: 'career'},
        ],
      },

      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'views',
      type: 'number',
      title: 'Views',
      initialValue: 0,
      readOnly: true,
    }),
  ],
})
