import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsIngredients extends Schema.Component {
  collectionName: 'components_fields_ingredients';
  info: {
    displayName: 'Ingredients';
    icon: 'feather';
    description: '';
  };
  attributes: {
    ingredient: Attribute.Relation<
      'fields.ingredients',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    Amount: Attribute.Decimal;
    Unit: Attribute.Enumeration<['g', 'tsp', 'tbsp', 'items', 'ml', 'litres']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fields.ingredients': FieldsIngredients;
    }
  }
}
