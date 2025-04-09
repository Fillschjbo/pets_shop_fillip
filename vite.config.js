import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    appType: "mpa",
    base: "/",
    build: {
        target: "esnext",
        outDir: "build",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
});