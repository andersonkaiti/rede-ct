import '@tanstack/react-table'

import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface TableMeta {
    handleRemove?: (item: string) => void
    handlePromote?: (item: string) => void
    handleDemote?: (item: string) => void
  }
}
