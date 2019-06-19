import output from "rollup-plugin-output";
import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript";
import rust from "rollup-plugin-rust";

const manifest = {
    input: "src/manifest.ts",
    output: {
        file: "dist/manifest.json",
        format: "json"
    },
    plugins: [json(), output()]
};

const background = {
    input: "src/background.ts",
    output: {
        file: "dist/background.js",
        format: "cjs"
    },
    plugins: [rust()]
};

const main = {
    input: "src/main.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs"
    },
    plugins: [rust(), typescript()]
};

export default [manifest, background, main];