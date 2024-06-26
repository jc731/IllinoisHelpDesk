import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Helpdesk Services',
      links: [
        {
          text: 'Tier 1 Support',
          href: getPermalink('/tier1'),
        },
        {
          text: 'Tier 2 Support',
          href: getPermalink('/tier2'),
        },
      ],
    },
    {
      text: 'Knowledge Base',
      href: getPermalink('/knowledgebase'),
    },
    //   // {
    //   //   text: 'IT Project Support',
    //   //   href: '/projectmanagement'
    //   // },
    //   // {
    //   //   text: 'Start Ups',
    //   //   href: '/startups',
    //   // },
  ],
  actions: [{ text: 'Contact Us', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Helpdesk Services',
      links: [
        { text: 'Tier 1 Support', href: '/tier1' },
        { text: 'Tier 2 Support', href: '/helpdesk/tier2' },
      ],
    },
    // {
    //   title: 'Project Support',
    //   links: [
    //     { text: 'Project Management', href: '/projectmanagement' },
    //     { text: 'Business Analysis', href: '/businessanalysis' },
    //     { text: 'IT Consulting', href: '/itconsulting' },
    //     { text: 'IT Procurement', href: '/itprocurement' },
    //   ],
    // },
    // {
    //   title: 'Start Ups',
    //   links: [
    //     { text: 'Basic Services', href: '/startups' },
    //     { text: 'Infrastracture Services', href: '/startups/infrastracture' },
    //     { text: 'Software Development', href: '/startups/software' },
    //     { text: 'Global Administration Support', href: '/startups/administration'}
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About Us', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
    {
      title: 'Knowledge Base',
      links: [{ text: 'Tips, Tricks, and Guides', href: getBlogPermalink() }],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Powered by <a class="text-orange-500 hover:underline" href="https://unisyntechnologies.com"> UniSyn Technologies</a> · All rights reserved.
  `,
};
