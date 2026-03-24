import packageJson from "./package.json" with { type: "json" };
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.ts",
  external: [...Object.keys(packageJson.peerDependencies)],
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.mjs",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [nodeResolve(), typescript(), terser()],
};
