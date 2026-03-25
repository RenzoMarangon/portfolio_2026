import DOMPurify from "isomorphic-dompurify";

export function sanitize(input: string) {
  return DOMPurify.sanitize(input);
}
