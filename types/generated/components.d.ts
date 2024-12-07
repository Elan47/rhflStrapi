import type { Schema, Struct } from '@strapi/strapi';

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
    keywords: Schema.Attribute.Text;
    richTxt: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'icon.icon': IconIcon;
      'seo.seo': SeoSeo;
    }
  }
}
