/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResourceRecommendationBaseListResult class.
 * @constructor
 * The list of Advisor recommendations.
 *
 * @member {string} [nextLink] The link used to get the next page of
 * recommendations.
 *
 */
class ResourceRecommendationBaseListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResourceRecommendationBaseListResult
   *
   * @returns {object} metadata of ResourceRecommendationBaseListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceRecommendationBaseListResult',
      type: {
        name: 'Composite',
        className: 'ResourceRecommendationBaseListResult',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceRecommendationBaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceRecommendationBase'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceRecommendationBaseListResult;
