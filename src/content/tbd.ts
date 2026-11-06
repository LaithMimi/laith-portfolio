/**
 * Placeholder for content Laith has not supplied yet (constitution V).
 * Renders as a visible "TBD: …" marker; the launch gate fails while any remain.
 */
export type Tbd = { readonly __tbd: true; readonly note: string }

export const TBD = (note: string): Tbd => ({ __tbd: true, note })

export type Text = string | Tbd

export const isTbd = (t: unknown): t is Tbd =>
  typeof t === 'object' && t !== null && (t as Tbd).__tbd === true

/** Plain-string form for attributes and structured data (TBD becomes an empty string). */
export const plain = (t: Text): string => (isTbd(t) ? '' : t)
