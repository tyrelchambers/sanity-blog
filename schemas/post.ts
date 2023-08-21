import {defineField} from 'sanity'
import {techStack} from '../constants'

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
        predefinedTags: techStack,
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
