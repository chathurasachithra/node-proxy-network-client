const fetch = require('node-fetch');
const { ProxyAgent } = require('proxy-agent');

const fetchWithProxy = (url, options) => {
    const agent = new ProxyAgent();
    return fetch(url, { agent, ...options });
};

const sendGetRequestAsync = async (url, options) => {
    const agent = new ProxyAgent();
    const response = await fetch(url, { agent, ...options });
    const json = await response.json();
    return {
        headers: Object.create(Object.prototype, response.headers.raw()),
        body: json,
        status: response.status
    };
};

const sendPostRequestAsync = async(url, options) => {
    const agent = new ProxyAgent();
    const sendingOptions = options || {};
    sendingOptions.method = 'post';
    const response = await fetch(url, { agent, ...sendingOptions });
    const json = await response.json();
    return {
        headers: Object.create(Object.prototype, response.headers.raw()),
        body: json,
        status: response.status
    };
};

module.exports = {
    proxyNetworkClient: {
        sendGetRequestAsync,
        sendPostRequestAsync
    }, 
    fetch: fetchWithProxy
};
