export function htmlEntities(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function arrayify<T>(element: T | T[]): T[] {
  if (!element) return [];
  if (element instanceof Array) {
    return element;
  }
  return [element];
}
