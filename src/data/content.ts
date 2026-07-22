// Static content extracted verbatim from the design prototype's script (DICT/SPD/LINKS/etc).

export interface VideoCard {
  t: string;
  f: string;
  v: string;
}
export const VC: VideoCard[] = [
  { t: '3CE Activation Recap', f: 'Reel + TikTok', v: '70K' },
  { t: 'Pop Mart Store Launch', f: 'TikTok', v: '18K' },
  { t: 'THISO Mall Event', f: 'Story', v: '40K' },
  { t: 'Sarene 6.8 Teaser', f: 'TikTok', v: '49K' },
];

export interface WideSlide {
  t: string;
}
export const WS: WideSlide[] = [
  { t: 'Event Trailer' },
  { t: 'Event Recap' },
  { t: 'TVC — THACO Group' },
];

export const MP: string[] = [
  'Internal Newsletter — Cover',
  'Newsletter Feature Spread',
  'Email Marketing Preview',
  'Website Article Preview',
  'Event Recap Pages',
];

export interface DocItem {
  n: string;
  p: string;
  tag: string;
}
export const DOCS: DocItem[] = [
  { n: 'Product Catalogue', p: '32', tag: 'Brand Communication' },
  { n: 'Sales Guide', p: '24', tag: 'Sales Enablement' },
  { n: 'Product Guideline', p: '18', tag: 'Brand System' },
  { n: 'Brochure', p: '12', tag: 'Marketing Collateral' },
  // Presentation Deck hidden until a real asset is provided (see NOI-DUNG.md)
];

export interface CertItem {
  n: string;
  o: string;
}
export const CERTS: CertItem[] = [
  { n: 'Digital Marketing in Action', o: 'CareerPrep' },
  { n: 'Fundamentals of Digital Marketing', o: 'Google Digital Garage' },
  { n: 'AI-Powered Performance Ads', o: 'Google Skillshop' },
  { n: 'Python Beginner', o: 'Xóm Data' },
  { n: 'IELTS 6.0', o: 'English Proficiency' },
];

export const SVC_TITLES: string[] = [
  'Brand Communication',
  'Content Strategy',
  'Social Media Marketing',
  'Event Management',
  'Campaign Planning',
];

export const SKILLS: string[] = [
  'Adobe Suite', 'Figma', 'UX Wireframing', 'Event Logistics', 'Campaign Architecture',
  'Copywriting', 'Content Scheduling', 'CRM Systems', 'Meta Business Suite', 'Canva', 'CapCut', 'AI Workflows',
];

export const MARQUEE_WORDS: string[] = [
  'Creative Direction', 'Brand Activation', 'Experiential Events', 'Short-Form Video', 'UX/UI Audit', 'Content Architecture',
];

export interface SelectedProjectMetric {
  v: string;
  l: string;
}
export interface SelectedProject {
  badge: string;
  title: string;
  time: string;
  role: string;
  org: string;
  bg: string;
  prob: string;
  roleB: string[];
  steps: string[];
  outs: string[];
  mets: SelectedProjectMetric[];
  short: string;
}

export const SPD: Record<'vi' | 'en', SelectedProject[]> = {
  vi: [
    {
      badge: 'Campaign / Launch Event', title: 'Sarene Residence & Commercial Complex 6.8 — Launch Campaign', time: '01/2026', role: 'Marketing Executive', org: 'Đại Quang Minh · THACO Group',
      bg: 'Chiến dịch ra mắt tổ hợp Sarene Residence & Commercial Complex 6.8 — dự án trọng điểm cần độ phủ truyền thông lớn trong thời gian ngắn.',
      prob: 'Tạo nhận diện và thu hút khách hàng tiềm năng cho sự kiện launch, trong khi phải đồng bộ nhiều phòng ban, agency và đội Sales cùng lúc.',
      roleB: ['Campaign Planning', 'Sản xuất PR / MC script / TVC', 'Điều phối sự kiện & agency', 'Stakeholder Management'],
      steps: ['Research', 'Planning', 'Production', 'Launch', 'Reporting'],
      outs: ['Launch đúng tiến độ với điều phối liên phòng ban trơn tru', 'Triển khai đa kênh: PR, social, TVC, ấn phẩm sự kiện', 'Báo cáo hiệu quả hậu chiến dịch cho ban lãnh đạo'],
      mets: [{ v: '300+', l: 'Khách tham dự' }, { v: '+20–30%', l: 'Engagement' }, { v: '30+', l: 'Ấn phẩm truyền thông' }, { v: '5+', l: 'Đội nhóm phối hợp' }],
      short: 'Chiến dịch launch tích hợp — từ chiến lược đến sự kiện thực tế.',
    },
    {
      badge: 'Brand / Content Ecosystem', title: 'THISO Retail — Activation & Hệ sinh thái nội dung', time: '07/2024 – 04/2026', role: 'Marketing Communications Executive', org: 'THISO Retail Corporation · THACO Group',
      bg: 'Vận hành truyền thông cho trung tâm thương mại với nhiều brand activation lớn: 3CE, Pop Mart store launch tại THISO Mall Sala.',
      prob: 'Giữ nhịp nội dung đa kênh liên tục và đồng bộ thông điệp giữa tenant, agency và nội bộ — với nguồn lực giới hạn.',
      roleB: ['Content Strategy đa nền tảng', 'Điều phối activation với tenant/agency', 'Quản lý ấn phẩm & timeline', 'Theo dõi & tối ưu hiệu quả'],
      steps: ['Insight', 'Content Plan', 'Production', 'Distribution', 'Optimization'],
      outs: ['16+ chiến dịch & sự kiện activation được thực thi', 'Hệ nội dung nhất quán trên social, website, email, ấn phẩm', 'Thúc đẩy nhận diện thương hiệu & lượng foot-traffic cho TTM'],
      mets: [{ v: '16+', l: 'Campaign thực hiện' }, { v: '5M+', l: 'Lượt tiếp cận trên Social (Reach)' }, { v: '80K+', l: 'Lượt tương tác nội dung (Engagement)' }, { v: '1.5M+', l: 'Lượt tiếp cận (Total Social Reach)' }],
      short: 'Vận hành nội dung & activation đa kênh cho retail — 3CE, Pop Mart.',
    },
    {
      badge: 'Community / Content Growth', title: 'THỔ House — Tăng trưởng cộng đồng Tarot & Nghệ thuật', time: '06/2019 – 01/2022', role: 'Content Creator & Community Manager', org: 'THỔ House',
      bg: 'Cộng đồng niche về tarot & nghệ thuật cần tăng trưởng organic bền vững mà không có ngân sách quảng cáo lớn.',
      prob: 'Xây dựng nội dung khác biệt và chuyển người theo dõi thành khách hàng thực trong một thị trường ngách.',
      roleB: ['Content series & storytelling', 'Community moderation', 'Hợp tác micro-influencer', 'Đo lường & nurturing lead'],
      steps: ['Niche Research', 'Content Series', 'Community', 'Partnership', 'Conversion'],
      outs: ['Tăng trưởng organic thuần bằng nội dung & cộng đồng', 'Chuỗi hoạt động cộng đồng và hợp tác micro-creator', 'Quy trình nurturing chuyển follower thành khách hàng'],
      mets: [{ v: '+40%', l: 'Follower / 3 tháng' }, { v: '4k→6k', l: 'Quy mô cộng đồng' }, { v: '10–15%', l: 'Lead conversion' }, { v: '100%', l: 'Organic growth' }],
      short: 'Tăng trưởng cộng đồng niche +40% trong 3 tháng, chuyển đổi 10–15%.',
    },
  ],
  en: [
    {
      badge: 'Campaign / Launch Event', title: 'Sarene Residence & Commercial Complex 6.8 — Launch Campaign', time: '01/2026', role: 'Marketing Executive', org: 'Dai Quang Minh · THACO Group',
      bg: 'Launch campaign for the Sarene Residence & Commercial Complex 6.8 — a flagship project requiring broad communication coverage on a tight timeline.',
      prob: 'Build awareness and attract qualified prospects for the launch event while aligning multiple departments, agencies and the Sales team simultaneously.',
      roleB: ['Campaign Planning', 'PR / MC script / TVC production', 'Event & agency coordination', 'Stakeholder Management'],
      steps: ['Research', 'Planning', 'Production', 'Launch', 'Reporting'],
      outs: ['On-schedule launch with smooth cross-functional coordination', 'Multi-channel rollout: PR, social, TVC, event collateral', 'Post-campaign performance reporting to leadership'],
      mets: [{ v: '300+', l: 'Attendees' }, { v: '+20–30%', l: 'Engagement' }, { v: '30+', l: 'Communication assets' }, { v: '5+', l: 'Teams coordinated' }],
      short: 'Integrated launch campaign — from strategy to on-ground event.',
    },
    {
      badge: 'Brand / Content Ecosystem', title: 'THISO Retail — Activation & Content Ecosystem', time: '07/2024 – 04/2026', role: 'Marketing Communications Executive', org: 'THISO Retail Corporation · THACO Group',
      bg: 'Ran communications for a retail mall with major brand activations: 3CE campaigns and the Pop Mart store launch at THISO Mall Sala.',
      prob: 'Sustain a continuous multi-channel content rhythm and keep messaging aligned across tenants, agencies and internal teams — with limited resources.',
      roleB: ['Multi-platform content strategy', 'Activation coordination with tenants/agencies', 'Asset & timeline management', 'Performance monitoring & optimization'],
      steps: ['Insight', 'Content Plan', 'Production', 'Distribution', 'Optimization'],
      outs: ['16+ campaigns & activation events executed', 'Consistent content system across social, web, email, print', 'Boosted brand recognition & foot traffic for THISO Mall'],
      mets: [{ v: '16+', l: 'Campaigns executed' }, { v: '5M+', l: 'Social Reach' }, { v: '80K+', l: 'Content Engagement' }, { v: '1.5M+', l: 'Total Social Reach' }],
      short: 'Multi-channel retail content & activation ops — 3CE, Pop Mart.',
    },
    {
      badge: 'Community / Content Growth', title: 'THỔ House — Tarot & Art Community Growth', time: '06/2019 – 01/2022', role: 'Content Creator & Community Manager', org: 'THỔ House',
      bg: 'A niche tarot & art community needing sustainable organic growth without a significant ad budget.',
      prob: 'Create differentiated content and convert followers into real customers within a narrow niche market.',
      roleB: ['Content series & storytelling', 'Community moderation', 'Micro-influencer partnerships', 'Lead measurement & nurturing'],
      steps: ['Niche Research', 'Content Series', 'Community', 'Partnership', 'Conversion'],
      outs: ['Purely organic growth through content & community', 'Community activities and micro-creator collaborations', 'A nurturing flow converting followers into customers'],
      mets: [{ v: '+40%', l: 'Followers / 3 months' }, { v: '4k→6k', l: 'Community size' }, { v: '10–15%', l: 'Lead conversion' }, { v: '100%', l: 'Organic growth' }],
      short: 'Niche community growth +40% in 3 months, 10–15% conversion.',
    },
  ],
};

export interface CaseStudyLink {
  t: string;
  h: string;
}
export const LINKS: CaseStudyLink[][] = [
  [{ t: 'View Brochure', h: 'https://sareneresidences.vn/' }, { t: 'View Proposal', h: 'https://sarene-sala.vn/' }],
  [{ t: 'View Website', h: 'https://thisoretail.com/' }, { t: 'View Social Media', h: 'https://www.facebook.com/THISOMall.SaLa' }],
  [{ t: 'View Social Media', h: 'https://www.facebook.com/Thuctinhtamhon' }],
];

export interface GalleryItem {
  id: string;
  ph: string;
}
export const GAL: GalleryItem[] = [
  { id: 'hero', ph: 'key visual / hero image' },
  { id: 't0', ph: 'photo / screenshot' },
  { id: 't1', ph: 'photo / screenshot' },
  { id: 't2', ph: 'photo / screenshot' },
  { id: 't3', ph: 'photo / screenshot' },
  { id: 't4', ph: 'photo / screenshot' },
];
