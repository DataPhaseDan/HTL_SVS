import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import path from "path";

// Vite configuration options
export default defineConfig({
	plugins: [react()],
	build: {
		// Optimize for production build
	
		sourcemap: false,
		// Create a clean output directory
		outDir: "dist",
		// Configure paths for dependencies
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
			},
	
		},
	},
	// Configure paths for React Router imports
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "node_modules"),
		},
	},
});
