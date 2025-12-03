import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'companyInfo',
      type: 'group',
      label: 'Company Information',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
          admin: {
            description: 'Company physical address',
          },
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Contact Email',
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Business Hours',
          admin: {
            description: 'e.g., Mon-Fri 9am-5pm EST',
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'GitHub', value: 'github' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            description: 'Full URL to your social media profile',
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          defaultValue: true,
        },
      ],
      maxRows: 6,
      admin: {
        description: 'Add links to your social media profiles',
      },
    },
    {
      name: 'newsletterCTA',
      type: 'text',
      label: 'Newsletter CTA Text',
      admin: {
        description: 'Call-to-action text for newsletter signup (optional)',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
