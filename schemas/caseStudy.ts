import {defineField} from 'sanity'
import {techStack} from '../constants'

export default defineField({
  name: 'projects',
  type: 'document',
  title: ' Projects',
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
      name: 'link',
      type: 'string',
      title: 'Link',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    }),
    defineField({
      name: 'content',
      type: 'markdown',
      title: 'Content',
    }),
    defineField({
      title: 'Tech stack',
      type: 'tags',
      name: 'techStack',
      options: {
        predefinedTags: techStack,
      },

      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
    }),
  ],
})
