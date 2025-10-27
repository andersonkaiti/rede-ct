export const ROLE_MAPPING = {
  ADMIN: 'Administrador',
  USER: 'Usuário',
} as const

export type Role = keyof typeof ROLE_MAPPING
