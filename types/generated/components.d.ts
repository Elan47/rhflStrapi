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

export interface IconIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
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
      'icon.icon': IconIcon;
      'seo.seo': SeoSeo;
    }
  }
}
