import {defineField} from 'sanity'
import {techStack} from '../constants'

export default defineField({
  name: 'adventOfCode',
  type: 'document',
  title: 'Advent of Code',
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
      name: 'content',
      type: 'markdown',
      title: 'Content',
    }),
    defineField({
      name: 'notes',
      type: 'markdown',
      title: 'Notes',
    }),
    defineField({
      title: 'Tech stack',
      type: 'tags',
      name: 'techStack',
      options: {
        predefinedTags: techStack,
      },
    }),
    defineField({
      name: 'year',
      type: 'date',
      title: 'Year',
      options: {
        dateFormat: 'YYYY',
      },
    }),
  ],
})
