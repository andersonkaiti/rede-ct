export function parseSearchParams<T extends object>(
  params: T,
): URLSearchParams {
  const searchParams = new URLSearchParams()

  for (const key of Object.keys(params) as Array<keyof T>) {
    const value = params[key]

    if (
      value !== undefined &&
      value !== null &&
      value !== '' &&
      value !== false
    ) {
      searchParams.set(key as string, String(value))
    }
  }

  return searchParams
}
