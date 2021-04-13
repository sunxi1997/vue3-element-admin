
export const USE_CONSOLE = process.env.VUE_APP_USE_CONSOLE === 'true'

export const LIGHT = {
  green: 'background: #67C23A;color: #fff; border-radius: 2px;padding: 2px 6px;',
  red: 'background: #F56C6C;color: #fff; border-radius: 2px;padding: 2px 6px;'
}

export const INFO = {
  red: 'color: #F56C6C; font-weight: bold;'
}

export function useStyle(text) {
  return `%c${ text }`
}
