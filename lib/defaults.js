// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {};


// Server configuration

exports.server = {

    // TLS

    // tls: {
    //
    //     key: '',
    //     cert: ''
    // },

    maxSockets: null,                               // Sets http/https globalAgent maxSockets value

    // Router

    router: {
        isCaseSensitive: true,                      // Case-seinsitive paths
        normalizeRequestPath: false                 // Normalize incoming request path (Uppercase % encoding and decode non-reserved encoded characters)
    },

    // State

    state: {
        cookies: {
            parse: true,                            // Parse content of req.headers.cookie
            failAction: 'error',                    // Action on bad cookie - 'error': return 400, 'log': log and continue, 'ignore': continue
            clearInvalid: false,                    // Automatically instruct the client to remove the invalid cookie
            strictHeader: true                      // Require an RFC 6265 compliant header format
        }
    },

    // Location

    location: '',                                   // Base uri used to prefix non-absolute outgoing Location headers ('http://example.com:8080'). Must not contain trailing '/'.

    // Payload

    payload: {
        maxBytes: 1024 * 1024,
        multipart: false                            // false, 'file', 'stream', { mode, encoding, maxFieldBytes, maxFields, uploadDir, hash }
    },

    // Validation

    validation: null,                               // Joi validation options

    // JSON

    json: {
        replacer: null,
        space: null
    },

    // Files path

    files: {
        relativeTo: 'cwd'                           // Determines what file and directory handlers use to base relative paths off: 'cwd', 'routes', or absolute path prefix
    },

    // timeout limits

    timeout: {
        socket: undefined,                          // Determines how long before closing request socket. Defaults to node (2 minutes)
        client: 10 * 1000,                          // Determines how long to wait for receiving client payload. Defaults to 10 seconds
        server: false                               // Determines how long to wait for server request processing. Disabled by default
    },

    // Load

    load: {
        maxHeapUsedBytes: 0,                        // Reject requests when V8 heap is over size in bytes (zero is no max)
        maxRssBytes: 0,                             // Reject requests when process RSS is over size in bytes (zero is no max)
        maxEventLoopDelay: 0,                       // Milliseconds of delay after which requests are rejected (zero is no max)
        sampleInterval: 0,                          // Frequency of load sampling in milliseconds (zero is no sampling)
        sampleSize: 3                               // Number of samples used to calculate an average
    },

    // Debug

    debug: {
        request: ['uncaught', 'implementation']
    },

    // Pack

    labels: [],                                     // Server pack labels

    // Cache

    cache: null,                                    // Always created (null defaults to exports.cache)

    // Optional components

    cors: false,                                    // CORS headers on responses and OPTIONS requests (defaults: exports.cors): false -> null, true -> defaults, {} -> override defaults
    views: null,                                    // Views engine
    auth: {}                                        // Authentication
};


// CORS

exports.cors = {
    origin: ['*'],
    isOriginExposed: true,                          // Return the list of supported origins if incoming origin does not match
    maxAge: 86400,                                  // One day
    headers: [
        'Authorization',
        'Content-Type',
        'If-None-Match'
    ],
    additionalHeaders: [],
    methods: [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS'
    ],
    additionalMethods: [],
    exposedHeaders: [
        'WWW-Authenticate',
        'Server-Authorization'
    ],
    additionalExposedHeaders: [],
    credentials: false
};


// Server caching

exports.cache = 'memory';                           // Primart cache configuration (see catbox)


// State management

exports.state = {

    // Cookie attributes

    isSecure: false,
    isHttpOnly: false,
    path: null,
    domain: null,
    ttl: null,                                      // MSecs, 0 means remove

    // Value generation

    encoding: 'none'                                // options: 'base64json', 'base64', 'form', 'iron', 'none'
};


// Views

exports.views = {
    defaultExtension: '',
    path: '',
    basePath: '',
    compileOptions: {},
    runtimeOptions: {},
    layout: false,
    layoutKeyword: 'content',
    encoding: 'utf-8',
    isCached: true,
    allowAbsolutePaths: false,
    allowInsecureAccess: false,
    partialsPath: '',
    contentType: 'text/html',
    compileMode: 'sync'
};


// Proxy

exports.proxy = {
    xforward: false,
    passThrough: false,
    redirects: false,
    timeout: 1000 * 60 * 3                          // timeout request after 3 minutes
};
