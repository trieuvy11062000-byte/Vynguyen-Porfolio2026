// Every media slot in the site is pre-wired to a list of candidate file
// paths under /public/assets/ — <MediaSlot> tries them in order and shows
// whichever one actually exists (photo or video), falling back to a
// placeholder if none of them do. This means filling or swapping a slot is
// always just "drop a correctly-named file in public/assets/", no code
// edits required. See README.md for the full table of slot ids.
//
// PDFs are rendered to images ahead of time (see scratchpad/import_assets.py
// during handoff) rather than embedded live via <iframe> — inline PDF
// rendering was inconsistent across browsers, so every "document" slot
// gets a pre-rendered cover image instead, with a plain link to the
// original PDF for readers who want the full document.

const IMAGE_EXTS = ['webp', 'jpg', 'jpeg', 'png'];
const VIDEO_EXTS = ['mp4', 'webm', 'mov'];

// Project 01's clip carousels are meant to hold real video — try video
// extensions first, but a plain photo still works as a static thumbnail.
const VIDEO_SLOTS = new Set(['p1v-0', 'p1v-1', 'p1v-2', 'p1v-3', 'p1w-0', 'p1w-1', 'p1w-2']);

export function getMediaCandidates(id: string): string[] {
  const list: string[] = [];
  if (VIDEO_SLOTS.has(id)) VIDEO_EXTS.forEach((ext) => list.push(`/assets/${id}.${ext}`));
  IMAGE_EXTS.forEach((ext) => list.push(`/assets/${id}.${ext}`));
  return list;
}

export function mediaKind(url: string): 'video' | 'image' {
  return /\.(mp4|webm|mov)$/i.test(url) ? 'video' : 'image';
}

/** Direct-download assets that aren't part of a design slot. */
export const DOWNLOADS = {
  cv: '/assets/cv.pdf',
  /** Full source PDFs behind the Project 03 rendered cover images (p3-show-N). */
  p3Doc: (i: number) => `/assets/p3-doc-${i}.pdf`,
};
