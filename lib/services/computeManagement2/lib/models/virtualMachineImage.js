/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineImage class.
 * @constructor
 * Describes a Virtual Machine Image.
 * @member {string} name Gets or sets the name of the resource.
 * 
 * @member {string} location Gets or sets the location of the resource.
 * 
 * @member {object} [tags] Gets or sets the tags attached to the resource.
 * 
 * @member {object} [plan]
 * 
 * @member {string} [plan.publisher] Gets or sets the publisher ID.
 * 
 * @member {string} [plan.name] Gets or sets the plan ID.
 * 
 * @member {string} [plan.product] Gets or sets the product ID.
 * 
 * @member {object} [osDiskImage]
 * 
 * @member {string} [osDiskImage.operatingSystem] Gets or sets the operating
 * system of the osDiskImage. Possible values include: 'Windows', 'Linux'
 * 
 * @member {array} [dataDiskImages]
 * 
 */
function VirtualMachineImage() {
  VirtualMachineImage['super_'].call(this);
}

util.inherits(VirtualMachineImage, models['SubResource']);

/**
 * Defines the metadata of VirtualMachineImage
 *
 * @returns {object} metadata of VirtualMachineImage
 *
 */
VirtualMachineImage.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineImage',
    type: {
      name: 'Composite',
      className: 'VirtualMachineImage',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        plan: {
          required: false,
          serializedName: 'properties.plan',
          type: {
            name: 'Composite',
            className: 'PurchasePlan'
          }
        },
        osDiskImage: {
          required: false,
          serializedName: 'properties.osDiskImage',
          type: {
            name: 'Composite',
            className: 'OSDiskImage'
          }
        },
        dataDiskImages: {
          required: false,
          serializedName: 'properties.dataDiskImages',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DataDiskImageElementType',
                type: {
                  name: 'Composite',
                  className: 'DataDiskImage'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineImage;