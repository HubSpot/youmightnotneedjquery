# You Might Not Need jQuery

![Build Workflow](https://github.com/HubSpot/youmightnotneedjquery/actions/workflows/build.yml/badge.svg)

A resource for doing things _au naturel_.

### [YouMightNotNeedjQuery.com](https://youmightnotneedjquery.com)

## Contributing

To add a new section, just create a folder for it, and add `jquery.js`, and `ie8.js`, `ie9.js`, `ie10.js`, `ie11.js`, and `modern.js` (for Chrome/Safari/Firefox) as needed. For example, if you have `ie8.js` and `ie9.js`, the ie9 version will be shown to people looking for a solution that works in ie9, ie10, ie11, or modern JS.

## Building

Building YMNNJQ requires Node.js

1. In the project directory, run `npm install`
1. To build the project and watch for changes, run `npm run dev`.
1. To build the project without watching for changes, use `npm run build`.
