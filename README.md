<h1>Node Proxy Network Client<img height="50" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></h1>

The node-proxy-network-client is a Node.js module designed to simplify making HTTP requests with proxy support using node-fetch. It is particularly useful for applications requiring to bypass network restrictions or mask IP addresses.


<h2>Installation</h2>

Install the module with npm:
```
npm i node-proxy-network-client
```

<h2>Usage</h2>

<h3>Setting Up Your Proxy</h3>

Configure your proxy by setting the HTTP_PROXY environment variable:
```
export HTTP_PROXY=http://your.proxy:8888
```

<h3>Using fetch with Proxy</h3>

To make a request with custom options, utilize the fetch function. The API mirrors that of node-fetch:

```
const { fetch } = require('node-proxy-network-client');
const url = 'https://example.com/api/data';
const options = {};
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

<h3>Making a GET Request</h3>

To make a GET request through a proxy, use the sendGetRequestAsync function:

```
const { proxyNetworkClient } = require('node-proxy-network-client');
const url = 'https://example.com/api/getData';
const options = {};
proxyNetworkClient.sendGetRequestAsync(url, options)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

<h3>Making a POST Request</h3>
To make a POST request through a proxy, use the sendPostRequestAsync function:

```
const { proxyNetworkClient } = require('node-proxy-network-client');
const url = 'https://example.com/api/postData';
const options = {
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        key: 'value'
    })
};
proxyNetworkClient.sendPostRequestAsync(url, options)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

<h3>Use as network client</h3>

Integrate with other applications, such as using it as a network client for Azure MSAL Node:

```
const { ConfidentialClientApplication } = require('@azure/msal-node');
const { proxyNetworkClient } = require('node-proxy-network-client');
const client = new ConfidentialClientApplication({
    auth: {
        clientId,
        clientSecret
    },
    system: {
        networkClient: proxyNetworkClient
    }
});
```

<h2>Note</h2>
Ensure your proxy environment variable is correctly configured for the module to function as expected.


<h2>License</h2>
Licensed under the Apache License, Version 2.0. See the LICENSE file for more details.
