import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"
import UnpluginAutoImport from 'unplugin-auto-import/vite'



// https://vite.dev/config/
export default defineConfig({
    base: './',
    resolve:
    {
        alias:
        {
            '@': path.resolve(__dirname, "./src"),
        },
    },
    server:
    {
        host: '0.0.0.0',
        port: 8001,
    },
    plugins:
    [
        vue(),
        UnpluginAutoImport({
            dts: true,
            eslintrc: {
                enabled: true,
            },
            imports:
            [
                // presets //
                'vue',
            ],
        }),
    ],
    css:
    {
        preprocessorOptions:
        {
            stylus:
            {
                globals:
                {
                    '_colorset': path.resolve('src/assets/stylesheets/colorset/index.styl'),
                },
            },
        },
    },
})
