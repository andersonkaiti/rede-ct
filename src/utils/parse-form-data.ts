export function parseFormData<T extends object>(params: T): FormData {
  const formData = new FormData()

  for (const key of Object.keys(params) as Array<keyof T>) {
    const value = params[key]

    if (
      value !== undefined &&
      value !== null &&
      value !== '' &&
      value !== false
    ) {
      if (
        (typeof File !== 'undefined' && value instanceof File) ||
        (typeof Blob !== 'undefined' && value instanceof Blob)
      ) {
        formData.append(key as string, value)
      } else if (typeof value === 'boolean') {
        formData.append(key as string, value ? 'true' : 'false')
      } else {
        formData.append(key as string, String(value))
      }
    }
  }

  return formData
}
