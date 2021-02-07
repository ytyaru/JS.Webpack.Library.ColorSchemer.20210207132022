#!/bin/bash
npm init -y
npm install @babel/runtime
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-private-methods @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime chroma-js
npx webpack
npx webpack serve
