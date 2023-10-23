import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//静态资源服务的文件夹
  publicDir: "public",
  base: './',
  //静态资源处理
  assetsInclude: "",
  //控制台输出的级别 info 、warn、error、silent
  logLevel: "info",
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  resolve: {
    alias: [//配置别名
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, 'src/assets') },
    ],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']
  },
  build: {

    //指定输出路径
    outDir: "dist",
    //启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    //构建后是否生成 source map 文件
    sourcemap: false,
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
    },
    //@rollup/plugin-commonjs 插件的选项
    commonjsOptions: {
    },
    //当设置为 true，构建后将会生成 manifest.json 文件
    manifest: false,
    // 设置为 false 可以禁用最小化混淆，
    // 或是用来指定使用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: "terser", //terser 构建后文件体积更小
    //传递给 Terser 的更多 minify 选项。
    terserOptions: {
    },
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500

  }

})
