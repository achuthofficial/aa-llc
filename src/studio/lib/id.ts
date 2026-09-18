/** Short, collision-safe enough for a single-browser dataset. */
export function createId(prefix: string) {
  const random = Math.random().toString(36).slice(2, 8)
  return `${prefix}_${Date.now().toString(36)}${random}`
}
