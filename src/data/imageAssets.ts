// Maps design-slot id -> asset URL.
//
// Every slot is pre-wired to an expected filename under /public/assets/,
// even ones that don't have a file yet. <ImageSlot> falls back to its
// placeholder if the file 404s, so filling a slot later is just: drop a
// same-named file into public/assets/ — no code changes needed.
//
// The 12 entries marked "(sample)" came bundled with the design handoff
// (.image-slots.state.json) and are safe placeholders — replace them with
// your own assets. See README.md "Filling in the empty image slots" for
// what each slot expects (dimensions, orientation, content).
export const IMAGE_ASSETS: Record<string, string> = {
  portrait: '/assets/portrait.webp', // (sample)

  'p1v-0': '/assets/p1v-0.webp', // (sample)
  'p1v-1': '/assets/p1v-1.jpg',
  'p1v-2': '/assets/p1v-2.jpg',
  'p1v-3': '/assets/p1v-3.jpg',

  'p1w-0': '/assets/p1w-0.webp', // (sample)
  'p1w-1': '/assets/p1w-1.webp', // (sample)
  'p1w-2': '/assets/p1w-2.jpg',
  'p1w-3': '/assets/p1w-3.jpg',

  'p2-cms': '/assets/p2-cms.jpg',
  'p2-plan': '/assets/p2-plan.jpg',
  'p2-email': '/assets/p2-email.webp', // (sample)

  'mag-0': '/assets/mag-0.webp', // (sample)
  'mag-1': '/assets/mag-1.webp', // (sample)
  'mag-2': '/assets/mag-2.webp', // (sample)
  'mag-3': '/assets/mag-3.webp', // (sample)
  'mag-4': '/assets/mag-4.webp', // (sample)

  'p3-thumb-0': '/assets/p3-thumb-0.jpg',
  'p3-thumb-1': '/assets/p3-thumb-1.jpg',
  'p3-thumb-2': '/assets/p3-thumb-2.jpg',
  'p3-thumb-3': '/assets/p3-thumb-3.jpg',
  'p3-thumb-4': '/assets/p3-thumb-4.jpg',
  'p3-show-0': '/assets/p3-show-0.jpg',
  'p3-show-1': '/assets/p3-show-1.webp', // (sample)
  'p3-show-2': '/assets/p3-show-2.jpg',
  'p3-show-3': '/assets/p3-show-3.jpg',
  'p3-show-4': '/assets/p3-show-4.jpg',

  'sp0-hero': '/assets/sp0-hero.jpg',
  'sp0-t0': '/assets/sp0-t0.jpg',
  'sp0-t1': '/assets/sp0-t1.jpg',
  'sp0-t2': '/assets/sp0-t2.jpg',
  'sp1-hero': '/assets/sp1-hero.jpg',
  'sp1-t0': '/assets/sp1-t0.jpg',
  'sp1-t1': '/assets/sp1-t1.jpg',
  'sp1-t2': '/assets/sp1-t2.jpg',
  'sp2-hero': '/assets/sp2-hero.jpg',
  'sp2-t0': '/assets/sp2-t0.jpg',
  'sp2-t1': '/assets/sp2-t1.jpg',
  'sp2-t2': '/assets/sp2-t2.jpg',

  'cert-0': '/assets/cert-0.webp', // (sample)
  'cert-1': '/assets/cert-1.jpg',
  'cert-2': '/assets/cert-2.jpg',
  'cert-3': '/assets/cert-3.jpg',
  'cert-4': '/assets/cert-4.jpg',
};
