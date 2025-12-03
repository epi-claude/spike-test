import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
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
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'CTA Button',
      admin: {
        description: 'Optional call-to-action button in header',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable CTA Button',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Book a Consultation',
          admin: {
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
          required: false,
          admin: {
            description: 'Internal path (e.g., /contact) or external URL',
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          defaultValue: false,
          admin: {
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
