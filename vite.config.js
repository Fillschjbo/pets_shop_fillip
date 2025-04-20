import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    appType: "mpa",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "auth/login/index.html"),
                register: resolve(__dirname, "auth/register/index.html"),
                listing: resolve(__dirname, "listing/index.html"),
                createListing: resolve(__dirname, "listing/create/index.html"),
                editListing: resolve(__dirname, "listing/edit/index.html"),
            },
        },
    },
});