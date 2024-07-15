import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsIngredients extends Schema.Component {
  collectionName: 'components_fields_ingredients';
  info: {
    displayName: 'Ingredients';
    icon: 'feather';
  };
  attributes: {
    ingredient: Attribute.Relation<
      'fields.ingredients',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    Amount: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fields.ingredients': FieldsIngredients;
    }
  }
}
