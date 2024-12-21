import type { Schema, Struct } from '@strapi/strapi';

export interface AccordianAccordian extends Struct.ComponentSchema {
  collectionName: 'components_accordian_accordians';
  info: {
    displayName: 'Accordian';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FileFile extends Struct.ComponentSchema {
  collectionName: 'components_file_files';
  info: {
    description: '';
    displayName: 'File';
  };
  attributes: {
    file: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface IconIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_icons';
  info: {
    description: '';
    displayName: 'Icon';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileProfile extends Struct.ComponentSchema {
  collectionName: 'components_profile_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    img: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keyword: Schema.Attribute.Text;
    richTxt: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accordian.accordian': AccordianAccordian;
      'banner.banner': BannerBanner;
      'file.file': FileFile;
      'icon.icon': IconIcon;
      'profile.profile': ProfileProfile;
      'seo.seo': SeoSeo;
    }
  }
}
