# Webpack React Starter

This is a starter app configured with the following:

- Webpack 4
- Babel 7
- React (16.8)
  - React-loadable
- Styled Components
- Styleguidist
- ESlint
- Jest (enzyme)

## Webpack 4

Configuration in `webpack.config.js`.

## Babel 7

Configuration in `.babelrc`.

Setup with presets: `["@babel/preset-env", "@babel/preset-react"]`.

And plugins: `["babel-plugin-styled-components", { "fileName": false }], ["react-hot-loader/babel"]`.

## React

Current version 16.8. Includes Redux (with thunk) and React Router.

### React-loadable

https://github.com/jamiebuilds/react-loadable

## Styled Components

https://www.styled-components.com/

Configured with a default theme.

## Styleguidist

Configuration in `styleguide.config.js`.

Builds an style guide from your components using markdown. To start, run `npm run styleguide` and it will be available at `localhost:6060`.

Documents are in `/doc` and each component gets its own `componentname.md` to load automatically into the styleguide.

## ESlint

Configuration in `.eslintrc`.

Rules default to `["eslint:recommended", "plugin:react/recommended"]`.

## Jest (enzyme)

Test configuration file in `/tests/setupTests.js` and Jest configuration in `jest.config.js`.

Jest is set up to use Enzyme and serializes automatically for snapshots using `'enzyme-to-json/serializer'`.
