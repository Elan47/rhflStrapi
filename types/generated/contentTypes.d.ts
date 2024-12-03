import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAnalystCoverageAnalystCoverage
  extends Struct.CollectionTypeSchema {
  collectionName: 'analyst_coverages';
  info: {
    displayName: 'Analyst Coverage';
    pluralName: 'analyst-coverages';
    singularName: 'analyst-coverage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnalystDocument: Schema.Attribute.Media<'files', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::analyst-coverage.analyst-coverage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Year: Schema.Attribute.String;
  };
}

export interface ApiAnnouncementsPageAnnouncementsPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'announcements_pages';
  info: {
    description: '';
    displayName: 'Announcements page';
    pluralName: 'announcements-pages';
    singularName: 'announcements-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    File: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    HasEndDate: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    ImportantAnnouncement: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::announcements-page.announcements-page'
    > &
      Schema.Attribute.Private;
    NewAnnouncement: Schema.Attribute.Boolean;
    publishedAt: Schema.Attribute.DateTime;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAnnualReturnAnnualReturn
  extends Struct.CollectionTypeSchema {
  collectionName: 'annual_returns';
  info: {
    displayName: 'Annual Return';
    pluralName: 'annual-returns';
    singularName: 'annual-return';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnnualReturnDocument: Schema.Attribute.Media<'images' | 'files', true>;
    AnnualReturnTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::annual-return.annual-return'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAreaConversionCalculatorAreaConversionCalculator
  extends Struct.CollectionTypeSchema {
  collectionName: 'area_conversion_calculators';
  info: {
    displayName: 'Area Conversion Calculator';
    pluralName: 'area-conversion-calculators';
    singularName: 'area-conversion-calculator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ConversionName: Schema.Attribute.String & Schema.Attribute.Required;
    ConversionValue: Schema.Attribute.Float;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::area-conversion-calculator.area-conversion-calculator'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuctionMelaAuctionMela extends Struct.CollectionTypeSchema {
  collectionName: 'auction_melas';
  info: {
    displayName: 'Auction Mela';
    pluralName: 'auction-melas';
    singularName: 'auction-mela';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auction_region: Schema.Attribute.Relation<
      'oneToOne',
      'api::auction-region.auction-region'
    >;
    borrower: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    document: Schema.Attribute.Media<'images' | 'files'>;
    endDate: Schema.Attribute.DateTime;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::auction-mela.auction-mela'
    > &
      Schema.Attribute.Private;
    property: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    startDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuctionRegionAuctionRegion
  extends Struct.CollectionTypeSchema {
  collectionName: 'auction_regions';
  info: {
    displayName: 'Auction Region';
    pluralName: 'auction-regions';
    singularName: 'auction-region';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::auction-region.auction-region'
    > &
      Schema.Attribute.Private;
    locator_state: Schema.Attribute.Relation<
      'manyToOne',
      'api::locator-state.locator-state'
    >;
    publishedAt: Schema.Attribute.DateTime;
    Region: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuctionSaleFileAuctionSaleFile
  extends Struct.CollectionTypeSchema {
  collectionName: 'auction_sale_files';
  info: {
    displayName: 'Auction Sale File';
    pluralName: 'auction-sale-files';
    singularName: 'auction-sale-file';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AuctionNotice: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::auction-sale-file.auction-sale-file'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    State: Schema.Attribute.Enumeration<
      [
        'TamilNadu',
        'AndhraPradesh',
        'Karnataka',
        'Maharashtra',
        'Gujarat',
        'Telangana',
        'Kerala',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuctionSaleNoticeAuctionSaleNotice
  extends Struct.CollectionTypeSchema {
  collectionName: 'auction_sale_notices';
  info: {
    displayName: 'Auction Sale Notice';
    pluralName: 'auction-sale-notices';
    singularName: 'auction-sale-notice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AuctionNotices: Schema.Attribute.Media<'files', true> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::auction-sale-notice.auction-sale-notice'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StateName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBidsDigitizationBidsDigitization
  extends Struct.CollectionTypeSchema {
  collectionName: 'bids_digitizations';
  info: {
    displayName: 'Bids Digitization';
    pluralName: 'bids-digitizations';
    singularName: 'bids-digitization';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AddendumDownloadFiles: Schema.Attribute.Media<'images' | 'files'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Text;
    EndDate: Schema.Attribute.DateTime &
      Schema.Attribute.DefaultTo<'2021-05-02T06:30:00.000Z'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bids-digitization.bids-digitization'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    RFPDownloadFiles: Schema.Attribute.Media<'images' | 'files'>;
    RFPNumber: Schema.Attribute.Text;
    StartDate: Schema.Attribute.DateTime &
      Schema.Attribute.DefaultTo<'2021-05-01T06:30:00.000Z'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime;
    Description: Schema.Attribute.Blocks;
    Featured_img: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    slug: Schema.Attribute.UID<'Title'>;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampaignLandingFormCampaignLandingForm
  extends Struct.CollectionTypeSchema {
  collectionName: 'campaign_landing_forms';
  info: {
    displayName: 'Campaign Landing Form';
    pluralName: 'campaign-landing-forms';
    singularName: 'campaign-landing-form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    loanAmount: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaign-landing-form.campaign-landing-form'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    mobile: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pincode: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    purpose: Schema.Attribute.Enumeration<
      [
        'Home Construction or Purchase',
        'Commercial Construction or Purchase',
        'Plot Purchase',
        'Repairs and renovation',
        'Loan against property',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    utmCampaign: Schema.Attribute.String;
    utmMedium: Schema.Attribute.String;
    utmSrc: Schema.Attribute.String;
  };
}

export interface ApiCareerCareer extends Struct.CollectionTypeSchema {
  collectionName: 'careers';
  info: {
    displayName: 'Career';
    pluralName: 'careers';
    singularName: 'career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Document: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    DocumentName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career.career'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCorporateGovernanceCorporateGovernance
  extends Struct.CollectionTypeSchema {
  collectionName: 'corporate_governances';
  info: {
    displayName: ' Corporate Governance';
    pluralName: 'corporate-governances';
    singularName: 'corporate-governance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BusinessReponsibilityReport: Schema.Attribute.Media<'files', true>;
    Codes: Schema.Attribute.Media<'files', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FamiliarizationProgrammes: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    IsSectionAccordion: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Letters: Schema.Attribute.Media<'files', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::corporate-governance.corporate-governance'
    > &
      Schema.Attribute.Private;
    Others: Schema.Attribute.Media<'files', true>;
    Policies: Schema.Attribute.Media<'files', true>;
    publishedAt: Schema.Attribute.DateTime;
    SectionDownloads: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    SectionHeading: Schema.Attribute.String & Schema.Attribute.Required;
    SectionText: Schema.Attribute.Blocks;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Vids: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface ApiDisclosedUnderRegulation30DisclosedUnderRegulation30
  extends Struct.CollectionTypeSchema {
  collectionName: 'disclosed_under_regulation_30s';
  info: {
    displayName: 'Disclosed under regulation 30';
    pluralName: 'disclosed-under-regulation-30s';
    singularName: 'disclosed-under-regulation-30';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DisclosedDocument: Schema.Attribute.Media<
      'images' | 'files' | 'videos',
      true
    >;
    DisclosedTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::disclosed-under-regulation-30.disclosed-under-regulation-30'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDocumentCollectionDocumentCollection
  extends Struct.CollectionTypeSchema {
  collectionName: 'document_collections';
  info: {
    displayName: 'DocumentCollection';
    pluralName: 'document-collections';
    singularName: 'document-collection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DocumentDescription: Schema.Attribute.Text;
    DocumentIcon: Schema.Attribute.String;
    DocumentName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::document-collection.document-collection'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDownloadDownload extends Struct.CollectionTypeSchema {
  collectionName: 'downloads';
  info: {
    displayName: 'Download';
    pluralName: 'downloads';
    singularName: 'download';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DownloadItems: Schema.Attribute.Media<'files', true>;
    DownloadType: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::download.download'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFairPracticeCodeFairPracticeCode
  extends Struct.CollectionTypeSchema {
  collectionName: 'fair_practice_codes';
  info: {
    displayName: 'Fair Practice Code';
    pluralName: 'fair-practice-codes';
    singularName: 'fair-practice-code';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Document: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fair-practice-code.fair-practice-code'
    > &
      Schema.Attribute.Private;
    PDF: Schema.Attribute.Media<'files' | 'images', true>;
    publishedAt: Schema.Attribute.DateTime;
    Publishes: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqGeneralInformationFaqGeneralInformation
  extends Struct.CollectionTypeSchema {
  collectionName: 'faq_general_informations';
  info: {
    displayName: 'FAQ-General Information';
    pluralName: 'faq-general-informations';
    singularName: 'faq-general-information';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-general-information.faq-general-information'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqHomeLoanGuideHomeLoanProcessAtRhflFaqHomeLoanGuideHomeLoanProcessAtRhfl
  extends Struct.CollectionTypeSchema {
  collectionName: 'faq_home_loan_guide_home_loan_process_at_rhfls';
  info: {
    displayName: 'FAQ-Home Loan Guide Home Loan Process At RHFL';
    pluralName: 'faq-home-loan-guide-home-loan-process-at-rhfls';
    singularName: 'faq-home-loan-guide-home-loan-process-at-rhfl';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-home-loan-guide-home-loan-process-at-rhfl.faq-home-loan-guide-home-loan-process-at-rhfl'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqHomeLoanGuideSupportingDocumentFaqHomeLoanGuideSupportingDocument
  extends Struct.CollectionTypeSchema {
  collectionName: 'faq_home_loan_guide_supporting_documents';
  info: {
    displayName: 'FAQ-Home Loan Guide Supporting Document';
    pluralName: 'faq-home-loan-guide-supporting-documents';
    singularName: 'faq-home-loan-guide-supporting-document';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-home-loan-guide-supporting-document.faq-home-loan-guide-supporting-document'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqHomeLoanGuideTaxBenefitFaqHomeLoanGuideTaxBenefit
  extends Struct.CollectionTypeSchema {
  collectionName: 'faq_home_loan_guide_tax_benefits';
  info: {
    displayName: 'FAQ-Home Loan Guide Tax Benefit';
    pluralName: 'faq-home-loan-guide-tax-benefits';
    singularName: 'faq-home-loan-guide-tax-benefit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-home-loan-guide-tax-benefit.faq-home-loan-guide-tax-benefit'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFaqQueryComplaintFaqQueryComplaint
  extends Struct.CollectionTypeSchema {
  collectionName: 'faq_query_complaints';
  info: {
    displayName: 'FAQ-Query-Complaint';
    pluralName: 'faq-query-complaints';
    singularName: 'faq-query-complaint';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-query-complaint.faq-query-complaint'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialInformationAnnualReportFinancialInformationAnnualReport
  extends Struct.SingleTypeSchema {
  collectionName: 'financial_information_annual_reports';
  info: {
    displayName: 'Financial Information - Annual Report';
    pluralName: 'financial-information-annual-reports';
    singularName: 'financial-information-annual-report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnnualReport: Schema.Attribute.Media<'files', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial-information-annual-report.financial-information-annual-report'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialInformationCreditRatingFinancialInformationCreditRating
  extends Struct.CollectionTypeSchema {
  collectionName: 'financial_information_credit_ratings';
  info: {
    displayName: 'Financial Information Credit Rating';
    pluralName: 'financial-information-credit-ratings';
    singularName: 'financial-information-credit-rating';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CreditRating: Schema.Attribute.JSON & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial-information-credit-rating.financial-information-credit-rating'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialInformationFinancialHighlightFinancialInformationFinancialHighlight
  extends Struct.CollectionTypeSchema {
  collectionName: 'financial_information_financial_highlights';
  info: {
    displayName: 'Financial Information Financial Highlight';
    pluralName: 'financial-information-financial-highlights';
    singularName: 'financial-information-financial-highlight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FinancialHighlights: Schema.Attribute.JSON & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial-information-financial-highlight.financial-information-financial-highlight'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialInformationQuarterlyResultFinancialInformationQuarterlyResult
  extends Struct.CollectionTypeSchema {
  collectionName: 'financial_information_quarterly_results';
  info: {
    displayName: 'Financial Information Quarterly Result';
    pluralName: 'financial-information-quarterly-results';
    singularName: 'financial-information-quarterly-result';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FinancialYear: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial-information-quarterly-result.financial-information-quarterly-result'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    QFourAudio: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QFourEarningsCallTranscript: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QFourEarningsConferenceCall: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QFourEarningsPresentationUpdate: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QFourFinancialResults: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QFourPublicDisclosure: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QOneAudio: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    QOneEarningsCallTranscript: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QOneEarningsConferenceCall: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QOneEarningsPresentationUpdate: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QOneFinancialResults: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QOnePublicDisclosure: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreeAudio: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreeEarningsCallTranscript: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreeEarningsConferenceCall: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreeEarningsPresentationUpdate: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreeFinancialResults: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QThreePublicDisclosure: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QTwoAudio: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    QTwoEarningsCallTranscript: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QTwoEarningsConferenceCall: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QTwoEarningsPresentationUpdate: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QTwoFinancialResults: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    QTwoPublicDisclosure: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialInformationFinancialInformation
  extends Struct.CollectionTypeSchema {
  collectionName: 'financial_informations';
  info: {
    displayName: 'FinancialInformation';
    pluralName: 'financial-informations';
    singularName: 'financial-information';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FinancialHighlights: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial-information.financial-information'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGalleryGallery extends Struct.CollectionTypeSchema {
  collectionName: 'galleries';
  info: {
    displayName: 'Gallery';
    pluralName: 'galleries';
    singularName: 'gallery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AlbumImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    AlbumName: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gallery.gallery'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGrievanceRedressalGrievanceRedressal
  extends Struct.CollectionTypeSchema {
  collectionName: 'grievance_redressals';
  info: {
    displayName: 'GrievanceRedressal';
    pluralName: 'grievance-redressals';
    singularName: 'grievance-redressal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CustomerGrievanceRedressal: Schema.Attribute.Media<'files'>;
    EscalationMatrix: Schema.Attribute.Media<'files'>;
    GrievanceInformationLeft: Schema.Attribute.Blocks;
    GrievanceInformationRight: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::grievance-redressal.grievance-redressal'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGuidelineValueGuidelineValue
  extends Struct.CollectionTypeSchema {
  collectionName: 'guideline_values';
  info: {
    displayName: 'Guideline Value';
    pluralName: 'guideline-values';
    singularName: 'guideline-value';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    LinkToGuideline: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::guideline-value.guideline-value'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StateName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageCarouselHomePageCarousel
  extends Struct.CollectionTypeSchema {
  collectionName: 'home_page_carousels';
  info: {
    displayName: 'HomePageCarousel';
    pluralName: 'home-page-carousels';
    singularName: 'home-page-carousel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    carousel: Schema.Attribute.Media<'images' | 'videos', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page-carousel.home-page-carousel'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIconIcon extends Struct.CollectionTypeSchema {
  collectionName: 'icons';
  info: {
    displayName: 'Icon';
    pluralName: 'icons';
    singularName: 'icon';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    IconName: Schema.Attribute.String;
    Icons: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::icon.icon'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIntimationToStockExchangeIntimationToStockExchange
  extends Struct.CollectionTypeSchema {
  collectionName: 'intimation_to_stock_exchanges';
  info: {
    displayName: 'Intimation to Stock Exchange';
    pluralName: 'intimation-to-stock-exchanges';
    singularName: 'intimation-to-stock-exchange';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    IntimationDocuments: Schema.Attribute.Media<'files', true> &
      Schema.Attribute.Required;
    IntimationTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::intimation-to-stock-exchange.intimation-to-stock-exchange'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorCalendarInvestorCalendar
  extends Struct.CollectionTypeSchema {
  collectionName: 'investor_calendars';
  info: {
    displayName: 'Investor Calendar';
    pluralName: 'investor-calendars';
    singularName: 'investor-calendar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EndDate: Schema.Attribute.Date;
    EventDate: Schema.Attribute.Date;
    EventDetails: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    EventName: Schema.Attribute.String & Schema.Attribute.Required;
    HasEndDate: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor-calendar.investor-calendar'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorContactInvestorContact
  extends Struct.CollectionTypeSchema {
  collectionName: 'investor_contacts';
  info: {
    displayName: 'Investor Contact';
    pluralName: 'investor-contacts';
    singularName: 'investor-contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContactHeading: Schema.Attribute.String & Schema.Attribute.Required;
    ContactInformation: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor-contact.investor-contact'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorFaqInvestorFaq extends Struct.CollectionTypeSchema {
  collectionName: 'investor_faqs';
  info: {
    displayName: 'Investor FAQ';
    pluralName: 'investor-faqs';
    singularName: 'investor-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    FAQName: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor-faq.investor-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLocatorBranchLocatorBranch
  extends Struct.CollectionTypeSchema {
  collectionName: 'locator_branches';
  info: {
    description: '';
    displayName: 'Locator Branch';
    pluralName: 'locator-branches';
    singularName: 'locator-branch';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BranchAddress: Schema.Attribute.Text;
    BranchCity: Schema.Attribute.String;
    BranchCode: Schema.Attribute.String;
    BranchContactDetails: Schema.Attribute.Text;
    BranchEmail: Schema.Attribute.String;
    BranchIFrame: Schema.Attribute.Blocks;
    BranchIFSC: Schema.Attribute.String;
    BranchLatitude: Schema.Attribute.String;
    BranchLongitude: Schema.Attribute.String;
    BranchName: Schema.Attribute.String;
    BranchPin: Schema.Attribute.String;
    BranchStatus: Schema.Attribute.String;
    BranchStreet: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::locator-branch.locator-branch'
    > &
      Schema.Attribute.Private;
    locator_state: Schema.Attribute.Relation<
      'oneToOne',
      'api::locator-state.locator-state'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sat_center: Schema.Attribute.Relation<
      'oneToOne',
      'api::sat-center.sat-center'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLocatorStateLocatorState
  extends Struct.CollectionTypeSchema {
  collectionName: 'locator_states';
  info: {
    description: '';
    displayName: 'Locator State';
    pluralName: 'locator-states';
    singularName: 'locator-state';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auction_regions: Schema.Attribute.Relation<
      'oneToMany',
      'api::auction-region.auction-region'
    >;
    BranchLink: Schema.Attribute.Relation<
      'oneToMany',
      'api::locator-branch.locator-branch'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::locator-state.locator-state'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sat_centers: Schema.Attribute.Relation<
      'oneToMany',
      'api::sat-center.sat-center'
    >;
    State: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsUpdateNewsUpdate extends Struct.CollectionTypeSchema {
  collectionName: 'news_updates';
  info: {
    displayName: 'NewsUpdates';
    pluralName: 'news-updates';
    singularName: 'news-update';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EndDate: Schema.Attribute.Date;
    HasEndDate: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-update.news-update'
    > &
      Schema.Attribute.Private;
    NewsPDF: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    NewsUpdates: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPossessionNoticePossessionNotice
  extends Struct.CollectionTypeSchema {
  collectionName: 'possession_notices';
  info: {
    displayName: 'Possession Notices';
    pluralName: 'possession-notices';
    singularName: 'possession-notice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::possession-notice.possession-notice'
    > &
      Schema.Attribute.Private;
    pdf: Schema.Attribute.Media<'files', true>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductListProductList extends Struct.CollectionTypeSchema {
  collectionName: 'product_lists';
  info: {
    description: '';
    displayName: 'ProductList';
    pluralName: 'product-lists';
    singularName: 'product-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DocumentsRequired: Schema.Attribute.Blocks;
    IsASpecialProduct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-list.product-list'
    > &
      Schema.Attribute.Private;
    ProductDescription: Schema.Attribute.Blocks;
    ProductEligibility: Schema.Attribute.Blocks;
    ProductFeatures: Schema.Attribute.Blocks;
    ProductId: Schema.Attribute.UID & Schema.Attribute.Required;
    ProductIllustration: Schema.Attribute.Media<'images' | 'videos'>;
    ProductImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ProductInterestRatesAndFees: Schema.Attribute.Blocks;
    ProductName: Schema.Attribute.String;
    ProductOrder: Schema.Attribute.UID & Schema.Attribute.Required;
    ProductPreviewText: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'seo.seo', false>;
    SpecialProductAvailability: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReachUsCardReachUsCard extends Struct.CollectionTypeSchema {
  collectionName: 'reach_us_cards';
  info: {
    displayName: 'Reach Us Card';
    pluralName: 'reach-us-cards';
    singularName: 'reach-us-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CardDescription: Schema.Attribute.Blocks;
    CardImage: Schema.Attribute.Media<'images'>;
    CardTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::reach-us-card.reach-us-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReferralProgrammeReferralProgramme
  extends Struct.CollectionTypeSchema {
  collectionName: 'referral_programmes';
  info: {
    displayName: 'ReferralProgramme';
    pluralName: 'referral-programmes';
    singularName: 'referral-programme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    loan_amount: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::referral-programme.referral-programme'
    > &
      Schema.Attribute.Private;
    member_name: Schema.Attribute.String;
    mob_number: Schema.Attribute.String;
    product: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    ref_email: Schema.Attribute.String;
    ref_name: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRepcoBankDetailRepcoBankDetail
  extends Struct.SingleTypeSchema {
  collectionName: 'repco_bank_details';
  info: {
    description: '';
    displayName: 'Repco Bank Detail';
    pluralName: 'repco-bank-details';
    singularName: 'repco-bank-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AboutUS: Schema.Attribute.Blocks;
    AboutUSImages: Schema.Attribute.Media<'images', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CustomerGrievanceRedressal: Schema.Attribute.Media<'files'>;
    EscalationMatrix: Schema.Attribute.Media<'files'>;
    InterestRate: Schema.Attribute.String;
    KYCPolicy: Schema.Attribute.Media<'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::repco-bank-detail.repco-bank-detail'
    > &
      Schema.Attribute.Private;
    PrivacyPolicy: Schema.Attribute.Media<'files'>;
    publishedAt: Schema.Attribute.DateTime;
    RepcoAddress: Schema.Attribute.Blocks;
    RepcoEmail: Schema.Attribute.String;
    RepcoFax: Schema.Attribute.String;
    RepcoMobile: Schema.Attribute.String;
    RepcoPhone: Schema.Attribute.String;
    RepcoRegisteredOfficeAddress: Schema.Attribute.Blocks;
    RepcoTitle: Schema.Attribute.String;
    RepcoTollFreeNumber: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSatCenterSatCenter extends Struct.CollectionTypeSchema {
  collectionName: 'sat_centers';
  info: {
    displayName: 'SATCenter';
    pluralName: 'sat-centers';
    singularName: 'sat-center';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sat-center.sat-center'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SatCentreAddress: Schema.Attribute.Text;
    SatCentreContactNumber: Schema.Attribute.String;
    SatCentreIncharge: Schema.Attribute.String;
    SatCentreName: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecretarialComplianceReportSecretarialComplianceReport
  extends Struct.CollectionTypeSchema {
  collectionName: 'secretarial_compliance_reports';
  info: {
    displayName: 'Secretarial Compliance Report';
    pluralName: 'secretarial-compliance-reports';
    singularName: 'secretarial-compliance-report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::secretarial-compliance-report.secretarial-compliance-report'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SecretarialDocuments: Schema.Attribute.Media<'images' | 'files', true>;
    SecretarialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShareHoldingPatternDocumentShareHoldingPatternDocument
  extends Struct.CollectionTypeSchema {
  collectionName: 'share_holding_pattern_documents';
  info: {
    displayName: 'Share Holding Pattern Document';
    pluralName: 'share-holding-pattern-documents';
    singularName: 'share-holding-pattern-document';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::share-holding-pattern-document.share-holding-pattern-document'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    QuarterFour: Schema.Attribute.Media<'images' | 'files'>;
    QuarterOne: Schema.Attribute.Media<'files' | 'images'>;
    QuarterThree: Schema.Attribute.Media<'images' | 'files'>;
    QuarterTwo: Schema.Attribute.Media<'images' | 'files'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Year: Schema.Attribute.String;
  };
}

export interface ApiStampDutyCalculatorStampDutyCalculator
  extends Struct.CollectionTypeSchema {
  collectionName: 'stamp_duty_calculators';
  info: {
    displayName: 'Stamp Duty Calculator';
    pluralName: 'stamp-duty-calculators';
    singularName: 'stamp-duty-calculator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::stamp-duty-calculator.stamp-duty-calculator'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StampDutyPercentage: Schema.Attribute.Decimal & Schema.Attribute.Required;
    StateName: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStatCounterStatCounter extends Struct.CollectionTypeSchema {
  collectionName: 'stat_counters';
  info: {
    displayName: 'StatCounter';
    pluralName: 'stat-counters';
    singularName: 'stat-counter';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::stat-counter.stat-counter'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StatBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    StatIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    StatTitle: Schema.Attribute.String;
    StatValue: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTdsOnDividendTdsOnDividend
  extends Struct.CollectionTypeSchema {
  collectionName: 'tds_on_dividends';
  info: {
    displayName: 'TDS on Dividend';
    pluralName: 'tds-on-dividends';
    singularName: 'tds-on-dividend';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tds-on-dividend.tds-on-dividend'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TDSonDividend: Schema.Attribute.Media<'files', true> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUnclaimedDividendUnclaimedDividend
  extends Struct.CollectionTypeSchema {
  collectionName: 'unclaimed_dividends';
  info: {
    displayName: 'Unclaimed Dividend';
    pluralName: 'unclaimed-dividends';
    singularName: 'unclaimed-dividend';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EndDate: Schema.Attribute.Date;
    HasEndDate: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::unclaimed-dividend.unclaimed-dividend'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    UnclaimedDividend: Schema.Attribute.Media<'files'> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::analyst-coverage.analyst-coverage': ApiAnalystCoverageAnalystCoverage;
      'api::announcements-page.announcements-page': ApiAnnouncementsPageAnnouncementsPage;
      'api::annual-return.annual-return': ApiAnnualReturnAnnualReturn;
      'api::area-conversion-calculator.area-conversion-calculator': ApiAreaConversionCalculatorAreaConversionCalculator;
      'api::auction-mela.auction-mela': ApiAuctionMelaAuctionMela;
      'api::auction-region.auction-region': ApiAuctionRegionAuctionRegion;
      'api::auction-sale-file.auction-sale-file': ApiAuctionSaleFileAuctionSaleFile;
      'api::auction-sale-notice.auction-sale-notice': ApiAuctionSaleNoticeAuctionSaleNotice;
      'api::bids-digitization.bids-digitization': ApiBidsDigitizationBidsDigitization;
      'api::blog.blog': ApiBlogBlog;
      'api::campaign-landing-form.campaign-landing-form': ApiCampaignLandingFormCampaignLandingForm;
      'api::career.career': ApiCareerCareer;
      'api::corporate-governance.corporate-governance': ApiCorporateGovernanceCorporateGovernance;
      'api::disclosed-under-regulation-30.disclosed-under-regulation-30': ApiDisclosedUnderRegulation30DisclosedUnderRegulation30;
      'api::document-collection.document-collection': ApiDocumentCollectionDocumentCollection;
      'api::download.download': ApiDownloadDownload;
      'api::fair-practice-code.fair-practice-code': ApiFairPracticeCodeFairPracticeCode;
      'api::faq-general-information.faq-general-information': ApiFaqGeneralInformationFaqGeneralInformation;
      'api::faq-home-loan-guide-home-loan-process-at-rhfl.faq-home-loan-guide-home-loan-process-at-rhfl': ApiFaqHomeLoanGuideHomeLoanProcessAtRhflFaqHomeLoanGuideHomeLoanProcessAtRhfl;
      'api::faq-home-loan-guide-supporting-document.faq-home-loan-guide-supporting-document': ApiFaqHomeLoanGuideSupportingDocumentFaqHomeLoanGuideSupportingDocument;
      'api::faq-home-loan-guide-tax-benefit.faq-home-loan-guide-tax-benefit': ApiFaqHomeLoanGuideTaxBenefitFaqHomeLoanGuideTaxBenefit;
      'api::faq-query-complaint.faq-query-complaint': ApiFaqQueryComplaintFaqQueryComplaint;
      'api::financial-information-annual-report.financial-information-annual-report': ApiFinancialInformationAnnualReportFinancialInformationAnnualReport;
      'api::financial-information-credit-rating.financial-information-credit-rating': ApiFinancialInformationCreditRatingFinancialInformationCreditRating;
      'api::financial-information-financial-highlight.financial-information-financial-highlight': ApiFinancialInformationFinancialHighlightFinancialInformationFinancialHighlight;
      'api::financial-information-quarterly-result.financial-information-quarterly-result': ApiFinancialInformationQuarterlyResultFinancialInformationQuarterlyResult;
      'api::financial-information.financial-information': ApiFinancialInformationFinancialInformation;
      'api::gallery.gallery': ApiGalleryGallery;
      'api::grievance-redressal.grievance-redressal': ApiGrievanceRedressalGrievanceRedressal;
      'api::guideline-value.guideline-value': ApiGuidelineValueGuidelineValue;
      'api::home-page-carousel.home-page-carousel': ApiHomePageCarouselHomePageCarousel;
      'api::icon.icon': ApiIconIcon;
      'api::intimation-to-stock-exchange.intimation-to-stock-exchange': ApiIntimationToStockExchangeIntimationToStockExchange;
      'api::investor-calendar.investor-calendar': ApiInvestorCalendarInvestorCalendar;
      'api::investor-contact.investor-contact': ApiInvestorContactInvestorContact;
      'api::investor-faq.investor-faq': ApiInvestorFaqInvestorFaq;
      'api::locator-branch.locator-branch': ApiLocatorBranchLocatorBranch;
      'api::locator-state.locator-state': ApiLocatorStateLocatorState;
      'api::news-update.news-update': ApiNewsUpdateNewsUpdate;
      'api::possession-notice.possession-notice': ApiPossessionNoticePossessionNotice;
      'api::product-list.product-list': ApiProductListProductList;
      'api::reach-us-card.reach-us-card': ApiReachUsCardReachUsCard;
      'api::referral-programme.referral-programme': ApiReferralProgrammeReferralProgramme;
      'api::repco-bank-detail.repco-bank-detail': ApiRepcoBankDetailRepcoBankDetail;
      'api::sat-center.sat-center': ApiSatCenterSatCenter;
      'api::secretarial-compliance-report.secretarial-compliance-report': ApiSecretarialComplianceReportSecretarialComplianceReport;
      'api::share-holding-pattern-document.share-holding-pattern-document': ApiShareHoldingPatternDocumentShareHoldingPatternDocument;
      'api::stamp-duty-calculator.stamp-duty-calculator': ApiStampDutyCalculatorStampDutyCalculator;
      'api::stat-counter.stat-counter': ApiStatCounterStatCounter;
      'api::tds-on-dividend.tds-on-dividend': ApiTdsOnDividendTdsOnDividend;
      'api::unclaimed-dividend.unclaimed-dividend': ApiUnclaimedDividendUnclaimedDividend;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
