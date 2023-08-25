import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import basicSsl from "@vitejs/plugin-basic-ssl";
import ts from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [react(), ts(), svgr(), basicSsl()],
  assetsInclude: ["**/*.xlsx"],
});
