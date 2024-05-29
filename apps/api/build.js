import esbuild from "esbuild";
import { esbuildPluginNodeExternals } from "esbuild-plugin-node-externals";

esbuild
  .build({
    entryPoints: ["./src/server/index.ts"],
    bundle: true,
    minify: true,
    logLevel: "info",
    platform: "node",
    outfile: "./dist/index.js",
    plugins: [
      esbuildPluginNodeExternals({
        include: ["entities", "business-logic", "data-sources", "constants-definitions"],
      }),
    ],
  })
  .catch(() => process.exit(1));
