import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSkills extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    languages: Schema.Attribute.Enumeration<
      ['English', 'Hindi', 'Chinese', 'Nepali', 'Spanish', 'Urdu', 'Swahili']
    >;
    soft_skills: Schema.Attribute.Enumeration<['Leadership', 'Collaboration']>;
    technologies: Schema.Attribute.Enumeration<
      [
        'JavaScript',
        'TypeScript',
        'ReactJs',
        'NextJs',
        'NestJs',
        'Laravel',
        'PHP',
        'Django',
        'Python',
      ]
    >;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    facebook_link: Schema.Attribute.String;
    github_link: Schema.Attribute.String;
    instagram_link: Schema.Attribute.String;
    linkedin_link: Schema.Attribute.String;
    threads_link: Schema.Attribute.String;
    tiktok_link: Schema.Attribute.String;
    twitter_link: Schema.Attribute.String;
    youtube_link: Schema.Attribute.String;
  };
}

export interface SharedTwoColumnLayoutWithMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_column_layout_with_medias';
  info: {
    description: '';
    displayName: 'TwoColumnLayoutWithMedia';
  };
  attributes: {
    featuredMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    paraFirst: Schema.Attribute.Text;
    paraSecond: Schema.Attribute.Text;
    slogan: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_site_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    country: Schema.Attribute.String & Schema.Attribute.Required;
    mapLink: Schema.Attribute.Text;
    postalCode: Schema.Attribute.String;
    primaryEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    primaryPhone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    secondaryEmail: Schema.Attribute.Email;
    secondaryPhone: Schema.Attribute.BigInteger;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    streetAddressOne: Schema.Attribute.String & Schema.Attribute.Required;
    streetAddressTwo: Schema.Attribute.String;
    unit: Schema.Attribute.String;
  };
}

export interface SiteSiteInfo extends Struct.ComponentSchema {
  collectionName: 'components_site_site_infos';
  info: {
    description: '';
    displayName: 'Site Info';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'site.contact-info', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    favicon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mainLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondaryLogo: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slogan: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.social-links', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.skills': SharedSkills;
      'shared.slider': SharedSlider;
      'shared.social-links': SharedSocialLinks;
      'shared.two-column-layout-with-media': SharedTwoColumnLayoutWithMedia;
      'site.contact-info': SiteContactInfo;
      'site.site-info': SiteSiteInfo;
    }
  }
}
