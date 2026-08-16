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
  { t: 'Highlight gameplay', f: 'TikTok', v: '49K' },
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
  { n: 'Product Catalogue', p: '15', tag: 'Brand Communication' },
  { n: 'Sales Guide', p: '8', tag: 'Sales Enablement' },
  { n: 'Product Guideline', p: '5', tag: 'Brand System' },
  { n: 'Brochure', p: '1', tag: 'Marketing Collateral' },
  // Presentation Deck hidden until a real asset is provided (see NOI-DUNG.md)
];

// Number of pre-rendered page images per document (/assets/p3-doc-{i}-p{n}.jpg).
// Must match the files generated from each source PDF — regenerate the images
// when a PDF changes (see NOI-DUNG.md).
export const DOC_PAGE_COUNTS: number[] = [15, 8, 5, 1];

export interface CertItem {
  n: string;
  o: string;
}
export const CERTS: CertItem[] = [
  { n: 'Digital Marketing in Action', o: 'CareerPrep' },
  { n: 'Fundamentals of Digital Marketing', o: 'Google Digital Garage' },
  { n: 'AI-Powered Performance Ads', o: 'Google Skillshop' },
  { n: 'Google Ads Search Professional', o: 'Google Skillshop' },
  { n: 'Python Beginner', o: 'Xóm Data' },
  { n: 'IELTS 6.0', o: 'English Proficiency' },
];

export const SVC_TITLES: string[] = [
  'Brand Communication',
  'Content Strategy',
  'Social Media Marketing',
  'Campaign Planning',
];

export const CORE_TOOLS: string[] = [
  'Canva', 'CapCut', 'Figma', 'Meta Business Suite', 'Adobe Suite', 'AI Tools',
];

export const MARQUEE_WORDS: string[] = [
  'Marketing & Communications', 'Content Creation', 'Social Media', 'Campaign Execution', 'Website & CRM Audit', 'Brand Communication', 'Short-Form Video',
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
  metsLabel?: string;
  metsSub?: string;
  short: string;
}

export const SPD: Record<'vi' | 'en', SelectedProject[]> = {
  vi: [
    {
      badge: 'Campaign / Launch Event', title: 'Sarene Residence & Commercial Complex 6.8 — Launch Campaign', time: '01/2026', role: 'Marketing Executive', org: 'Đại Quang Minh · THACO Group',
      bg: 'Chiến dịch ra mắt Sarene Residence & Commercial Complex 6.8, với yêu cầu triển khai truyền thông và sự kiện trong thời gian ngắn.',
      prob: 'Tăng nhận diện và thu hút khách hàng tiềm năng cho sự kiện ra mắt, đồng thời phối hợp triển khai giữa các phòng ban, đơn vị đối tác và agency.',
      roleB: ['Triển khai chiến dịch', 'Sản xuất PR, kịch bản MC, TVC', 'Điều phối sự kiện và agency', 'Phối hợp các bên liên quan'],
      steps: ['Nghiên cứu', 'Lập kế hoạch', 'Sản xuất', 'Triển khai', 'Báo cáo'],
      outs: ['Triển khai sự kiện ra mắt đúng tiến độ, phối hợp với các bên liên quan', 'Sản xuất và triển khai nội dung trên nhiều kênh: PR, mạng xã hội, TVC và sự kiện', 'Tổng hợp và báo cáo kết quả sau chiến dịch'],
      mets: [{ v: '300+', l: 'Khách tham dự' }, { v: '10+', l: 'Hạng mục triển khai' }, { v: '5+', l: 'Nhóm / đơn vị phối hợp' }],
      short: 'Chiến dịch launch tích hợp — từ chiến lược đến sự kiện thực tế.',
    },
    {
      badge: 'Brand / Content Ecosystem', title: 'THACO GROUP — Activation & Hệ sinh thái nội dung', time: '07/2024 – 04/2026', role: 'Marketing Communications Executive', org: 'THISO Retail Corporation · THACO Group',
      bg: 'Vận hành truyền thông cho Khu đô thị Sala và THISO Mall Sala, với các hoạt động nội dung, brand activation và tương tác cộng đồng được triển khai thường xuyên.',
      prob: 'Duy trì nhịp nội dung đa kênh và đồng bộ thông điệp giữa tenant, agency và nội bộ, trong khi đảm bảo tiến độ triển khai theo từng campaign.',
      roleB: ['Lập kế hoạch và điều phối nội dung theo từng campaign', 'Xây dựng content calendar và quản lý timeline triển khai', 'Brief và phối hợp với Designer, Video Editor, Agency', 'Theo dõi hiệu quả nội dung và tổng hợp báo cáo', 'Phát triển creative concept cho các hoạt động cộng đồng và brand activation'],
      steps: ['Insight', 'Content Plan', 'Production', 'Distribution', 'Optimization'],
      outs: ['Triển khai 16+ campaign & hoạt động activation theo kế hoạch', 'Duy trì hệ thống nội dung nhất quán trên social, website, email và các ấn phẩm truyền thông', 'Theo dõi hiệu quả nội dung và phản hồi từ các kênh để điều chỉnh kế hoạch triển khai'],
      mets: [{ v: '1,5M+', l: 'Tổng lượt tiếp cận' }, { v: '2,8M+', l: 'Tổng lượt hiển thị' }, { v: '80K+', l: 'Tổng lượt tương tác' }, { v: '32%', l: 'Tỷ lệ xem hết video trung bình' }],
      metsLabel: 'Kết quả truyền thông xã hội', metsSub: 'Trong 3 tháng triển khai',
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
    {
      badge: 'AI Workflow / Marketing System', title: 'Hệ thống AI chấm điểm & Audit nội dung Social', time: '2026', role: 'Thiết kế hệ thống & Xây dựng Workflow AI', org: 'Freelance Project',
      bg: 'Khối lượng nội dung social ngày càng lớn khiến việc đánh giá chất lượng bằng thủ công trở nên thiếu nhất quán, tốn thời gian và khó mở rộng khi quản lý nhiều chiến dịch.',
      prob: 'Xây dựng một quy trình AI hỗ trợ chấm điểm nội dung theo bộ tiêu chí chuẩn, tự động phân tích chất lượng, phát hiện điểm cần cải thiện và chuẩn hóa quy trình audit cho đội ngũ Marketing.',
      roleB: ['Thiết kế framework đánh giá nội dung', 'Xây dựng workflow chấm điểm hỗ trợ AI', 'Xây dựng dashboard audit HTML', 'Xác định tiêu chí đánh giá & hệ thống prompt'],
      steps: ['Nhập nội dung', 'AI phân tích', 'Chấm điểm', 'Xuất báo cáo', 'Đề xuất tối ưu hóa'],
      outs: ['Chuẩn hóa quy trình đánh giá nội dung Social', 'Dashboard HTML trực quan hỗ trợ Audit', 'Hệ thống AI tự động chấm điểm theo nhiều tiêu chí'],
      mets: [{ v: '50+', l: 'Tiêu chí đánh giá' }, { v: '5', l: 'Chỉ số chấm điểm' }, { v: '80%', l: 'Thời gian tiết kiệm được' }, { v: '100%', l: 'Quy trình chuẩn hóa' }],
      short: 'Thiết kế hệ thống AI hỗ trợ chấm điểm và Audit nội dung Social, giúp chuẩn hóa quy trình đánh giá và tăng tốc độ phân tích.',
    }
  ],
  en: [
    {
      badge: 'Campaign / Launch Event', title: 'Sarene Residence & Commercial Complex 6.8 — Launch Campaign', time: '01/2026', role: 'Marketing Executive', org: 'Dai Quang Minh · THACO Group',
      bg: 'Launch campaign for Sarene Residence & Commercial Complex 6.8, requiring communications and event execution on a tight timeline.',
      prob: 'Increase awareness and attract qualified prospects for the launch event, while coordinating execution across departments, partner units and agencies.',
      roleB: ['Campaign Execution', 'PR, MC Script & TVC Production', 'Event & Agency Coordination', 'Stakeholder Coordination'],
      steps: ['Research', 'Planning', 'Production', 'Launch', 'Reporting'],
      outs: ['On-schedule launch delivery, coordinated with all stakeholders', 'Produced and rolled out content across multiple channels: PR, social media, TVC and event', 'Consolidated and reported campaign results post-launch'],
      mets: [{ v: '300+', l: 'Attendees' }, { v: '10+', l: 'Deliverables executed' }, { v: '5+', l: 'Teams / partners coordinated' }],
      short: 'Integrated launch campaign — from strategy to on-ground event.',
    },
    {
      badge: 'Brand / Content Ecosystem', title: 'THACO GROUP — Activation & Content Ecosystem', time: '07/2024 – 04/2026', role: 'Marketing Communications Executive', org: 'THISO Retail Corporation · THACO Group',
      bg: 'Managed communications for Sala Urban Area and THISO Mall Sala, with regular content, brand activation and community engagement initiatives.',
      prob: 'Sustaining a continuous multi-channel content rhythm and aligning messaging across tenants, agencies and internal teams, while keeping each campaign on schedule.',
      roleB: ['Planning and coordinating content for each campaign', 'Building content calendars and managing rollout timelines', 'Briefing and coordinating with Designers, Video Editors and Agencies', 'Tracking content performance and consolidating reports', 'Developing creative concepts for community activities and brand activations'],
      steps: ['Insight', 'Content Plan', 'Production', 'Distribution', 'Optimization'],
      outs: ['16+ campaigns & activation initiatives executed on schedule', 'Maintained a consistent content system across social, website, email and communication assets', 'Tracked content performance and channel feedback to refine execution plans'],
      mets: [{ v: '1.5M+', l: 'Total reach' }, { v: '2.8M+', l: 'Total impressions' }, { v: '80K+', l: 'Total engagement' }, { v: '32%', l: 'Average video completion rate' }],
      metsLabel: 'Social Media Results', metsSub: 'Over 3 months of execution',
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
    {
      badge: 'AI Workflow / Marketing System', title: 'AI-Powered Social Content Audit Framework', time: '2026', role: 'System Designer & Workflow Developer', org: 'Freelance Project',
      bg: 'A growing volume of social media content made manual quality reviews inconsistent, time-consuming, and difficult to scale across multiple campaigns.',
      prob: 'Design an AI-assisted workflow that standardizes content evaluation, automates scoring, and provides actionable recommendations while maintaining consistent assessment criteria.',
      roleB: ['Designed the content evaluation framework', 'Developed AI-assisted scoring workflow', 'Built HTML audit dashboard', 'Defined evaluation criteria & prompt system'],
      steps: ['Input Content', 'AI Analysis', 'Quality Scoring', 'Insight Report', 'Optimization'],
      outs: ['Standardized content evaluation methodology', 'Interactive HTML dashboard with automated scoring', 'Consistent quality assessment across multiple content formats'],
      mets: [{ v: '50+', l: 'Evaluation Criteria' }, { v: '5', l: 'Scoring Dimensions' }, { v: '80%', l: 'Review Time Saved' }, { v: '100%', l: 'Standardized Workflow' }],
      short: 'Built an AI-assisted content audit system that standardizes evaluation and accelerates social content reviews.',
    }  
  ],
};

export interface CaseStudyLink {
  t: string;
  h: string;
}
export const LINKS: CaseStudyLink[][] = [
  [{ t: 'View Brochure', h: 'https://sareneresidences.vn/' }, { t: 'View Proposal', h: 'https://sarene-sala.vn/' }],
  [{ t: 'View Website', h: 'https://thacogroup.vn/' }, { t: 'View Social Media', h: 'https://www.facebook.com/THISOMall.SaLa' }, { t: 'View Tiktok', h: 'https://www.tiktok.com/@thisomallsala' }],
  [{ t: 'View Social Media', h: 'https://www.facebook.com/Thuctinhtamhon' }],
  [{ t: 'View Content Evaluator', h: '/content-evaluator.html' }],
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
