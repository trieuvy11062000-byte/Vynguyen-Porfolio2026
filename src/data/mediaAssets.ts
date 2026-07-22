// Every media slot in the site is pre-wired to a list of candidate file
// paths under /public/assets/ — <MediaSlot> tries them in order and shows
// whichever one actually exists (photo, video, or PDF), falling back to a
// placeholder if none of them do. This means filling or swapping a slot is
// always just "drop a correctly-named file in public/assets/", no code
// edits required. See README.md for the full table of slot ids.

const IMAGE_EXTS = ['webp', 'jpg', 'jpeg', 'png'];
const VIDEO_EXTS = ['mp4', 'webm', 'mov'];

// Project 01's clip carousels are meant to hold real video — try video
// extensions first, but a plain photo still works as a static thumbnail.
const VIDEO_SLOTS = new Set(['p1v-0', 'p1v-1', 'p1v-2', 'p1v-3', 'p1w-0', 'p1w-1', 'p1w-2', 'p1w-3']);

// Project 03's main showcase viewer and Project 02's email preview accept a
// PDF (rendered inline) in addition to a spread-preview image.
const PDF_SLOTS = new Set(['p3-show-0', 'p3-show-1', 'p3-show-2', 'p3-show-3', 'p3-show-4', 'p2-email']);

export function getMediaCandidates(id: string): string[] {
  const list: string[] = [];
  if (PDF_SLOTS.has(id)) list.push(`/assets/${id}.pdf`);
  if (VIDEO_SLOTS.has(id)) VIDEO_EXTS.forEach((ext) => list.push(`/assets/${id}.${ext}`));
  IMAGE_EXTS.forEach((ext) => list.push(`/assets/${id}.${ext}`));
  return list;
}

export function mediaKind(url: string): 'video' | 'pdf' | 'image' {
  if (/\.pdf$/i.test(url)) return 'pdf';
  if (/\.(mp4|webm|mov)$/i.test(url)) return 'video';
  return 'image';
}

/** Direct-download assets that aren't part of a design slot (e.g. the CV). */
export const DOWNLOADS = {
  cv: '/assets/cv.pdf',
};
