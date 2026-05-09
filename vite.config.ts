import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const jalvin = require("@jalvin/vite-plugin").default;
const uiCompatId = "virtual:jalvin-ui-compat";
const uiCompatResolvedId = "\0virtual:jalvin-ui-compat";

function jalvinUiCompatPlugin() {
  return {
    name: "jalvin-ui-compat",
    resolveId(id: string) {
      if (id === "@jalvin/ui" || id === uiCompatId) return uiCompatResolvedId;
      return null;
    },
    load(id: string) {
      if (id !== uiCompatResolvedId) return null;
      return `
import * as Raw from ${JSON.stringify(resolve(__dirname, "node_modules/@jalvin/ui/dist/index.js"))};

function toChildArray(children) {
  if (children === undefined || children === null) return undefined;
  return Array.isArray(children) ? children : [children];
}

function withChildren(fn) {
  return (props) => fn(props, toChildArray(props.children));
}

export * from ${JSON.stringify(resolve(__dirname, "node_modules/@jalvin/ui/dist/index.js"))};
export const Scaffold = withChildren(Raw.Scaffold);
export const Column = withChildren(Raw.Column);
export const Row = withChildren(Raw.Row);
export const Box = withChildren(Raw.Box);
export const Card = withChildren(Raw.Card);
export const Button = withChildren(Raw.Button);
export const IconButton = withChildren(Raw.IconButton);
export const TopBar = withChildren(Raw.TopBar);
`;
    },
  };
}

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@jalvin/ui": uiCompatId,
      src: resolve(__dirname, "src"),
    },
    extensions: [".jalvin", ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    target: "esnext",
    commonjsOptions: {
      include: [/node_modules/, /packages\/runtime\/dist/],
    },
  },
  plugins: [
    jalvinUiCompatPlugin(),
    jalvin({
      entry: {
        file: "./src/main.jalvin",
        component: "WeddingApp",
        title: "Wedding",
      },
    }),
    react(),
  ],
});