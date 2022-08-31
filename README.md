# You Might Not Need jQuery

![Build Workflow](https://github.com/HubSpot/youmightnotneedjquery/actions/workflows/build.yml/badge.svg)

A resource for doing things _au naturel_.

### [YouMightNotNeedjQuery.com](https://youmightnotneedjquery.com)

## Contributing

To add a new section, just create a folder for it, and add `jquery.js`, and `ie8.js`, `ie9.js`, `ie10.js` and `ie11.js` as needed. For example, if you have `ie8.js` and `ie9.js`, the ie9 version will be shown to people looking for a solution that works in ie9, 10 or 11.

## Building

Building YMNNJQ requires Node.js

1. In the project directory, run `npm install`
1. To build the project and watch for changes, run `npm run start`. Alternatively, if you have `gulp` installed globally, you can run `gulp default`
1. To build the project without watching for changes, use `npm run build`. If you have `gulp` installed globally, you can run `gulp serve`
