import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        remix({
            serverBuildPath: "./dist/index.js",
        }),
        tsconfigPath(),
    ],
});
