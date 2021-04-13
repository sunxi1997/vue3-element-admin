/**
 * The type of `import.meta`.
 *
 * If you need to declare that a given property exists on `import.meta`,
 * this type may be augmented via interface merging.
 */
interface ImportMeta {
  env : EnvVariables;
}

/**
 * Vite Env Variables
 * https://vitejs.dev/guide/env-and-mode.html
 */
interface EnvVariables {
  // BASE_URL
  VITE_BASE_URL: string

  // 打印请求信息
  VITE_LOG_REQUEST: boolStr

  // 打印路由信息
  VITE_LOG_ROUTE: boolStr
}

type boolStr = 'true' | 'false'
