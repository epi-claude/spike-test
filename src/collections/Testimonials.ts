import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['clientName', 'clientCompany', 'featured', 'order'],
    useAsTitle: 'clientName',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: {
        description: 'Testimonial quote (max 300 characters)',
      },
    },
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Client Name',
    },
    {
      name: 'clientRole',
      type: 'text',
      required: false,
      label: 'Client Role/Title',
    },
    {
      name: 'clientCompany',
      type: 'text',
      required: false,
      label: 'Company',
    },
    {
      name: 'clientPhoto',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Client Photo',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured on Homepage',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show this testimonial on the homepage',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'When the testimonial was received',
      },
    },
  ],
}
