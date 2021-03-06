// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2017-05-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '7eca7135-0a18-47be-8ebb-c892d9550bc9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '35770ca3-41fc-415e-9fa3-6883578dd3ec',
  'x-ms-correlation-request-id': '35770ca3-41fc-415e-9fa3-6883578dd3ec',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160254Z:35770ca3-41fc-415e-9fa3-6883578dd3ec',
  date: 'Fri, 26 May 2017 16:02:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2017-05-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '7eca7135-0a18-47be-8ebb-c892d9550bc9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '35770ca3-41fc-415e-9fa3-6883578dd3ec',
  'x-ms-correlation-request-id': '35770ca3-41fc-415e-9fa3-6883578dd3ec',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160254Z:35770ca3-41fc-415e-9fa3-6883578dd3ec',
  date: 'Fri, 26 May 2017 16:02:54 GMT',
  connection: 'close' });
 return result; }]];