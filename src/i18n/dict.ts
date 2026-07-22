export type Lang = 'vi' | 'en';

export interface DictShape {
  about: string; services: string; projects: string; certs: string; contact: string;
  heroH: string; heroSub: string; cta: string; cvBtn: string;
  c1: string; c2: string; c3: string;
  aboutP: string; edu: string;
  tl1t: string; tl1d1: string; tl1d2: string; tl1m: string;
  tl2t: string; tl2d1: string; tl2d2: string;
  s1: string; s2: string; s3: string; s4: string; s5: string;
  p1goal: string; p2goal: string; p3goal: string;
  impactT: string; delivT: string; i1: string; i2: string; i3: string; i4: string;
  fName: string; fMail: string; fMsg: string; fSend: string;
  copy: string; copied: string; certHint: string; views: string;
  spH1: string; spH2: string; spSub: string; spBg: string; spProb: string; spRole: string; spProc: string; spOut: string; spView: string;
}

export const DICT: Record<Lang, DictShape> = {
  vi: {
    about: 'Giới thiệu', services: 'Dịch vụ', projects: 'Dự án', certs: 'Chứng chỉ', contact: 'Liên hệ',
    heroH: 'Hi, Vỹ Nguyễn đây',
    heroSub: 'CREATIVE STRATEGIST & BRAND ARCHITECT — KẾT NỐI NARRATIVE STORYTELLING, EXPERIENTIAL EVENTS & DIGITAL UX ĐA NGÀNH.',
    cta: 'Khám phá dự án', cvBtn: 'Tải CV',
    c1: 'Ấn phẩm chiến dịch đã sản xuất', c2: 'Lượt xem video social', c3: 'Sự kiện activation offline',
    aboutP: 'Tôi là người làm Marketing và Truyền thông với kinh nghiệm trong Branding, Social Media, Event và Content Strategy. Tôi thích biến ý tưởng phức tạp thành câu chuyện dễ hiểu và tạo ra chiến dịch mang giá trị thực tế. Điểm mạnh của tôi là kết nối tư duy chiến lược với khả năng thực thi — từ truyền thông nội bộ, quản lý nội dung đến điều phối dự án đa phòng ban.',
    edu: 'Đại học Quốc tế, ĐHQG-HCM — Cử nhân QTKD · GPA 3.6/4.0 · 2018–2023',
    tl1t: 'Content Creator & Community Management', tl1d1: 'Sáng tạo nội dung, phát triển cộng đồng trong lĩnh vực tarot & nghệ thuật.', tl1d2: 'Hợp tác micro-influencer, tổ chức hoạt động cộng đồng.', tl1m: '+40% follower (4k→6k) trong 3 tháng',
    tl2t: 'Marketing Truyền thông & Digital Executive', tl2d1: 'Điều phối dự án marketing & truyền thông liên phòng ban, agency và đối tác ngoài.', tl2d2: 'Quản lý ấn phẩm truyền thông, timeline triển khai, hỗ trợ 2.000+ nhân sự & stakeholder.',
    s1: 'Xây dựng và duy trì hình ảnh thương hiệu nhất quán trên mọi điểm chạm truyền thông.', s2: 'Lên kế hoạch nội dung đa nền tảng — PR, social, website, brochure, kịch bản sự kiện.', s3: 'Vận hành fanpage, quản trị cộng đồng, tối ưu tương tác và tăng trưởng follower.', s4: 'Điều phối sự kiện launch, activation từ ý tưởng đến thực thi cùng agency và đối tác.', s5: 'Lập kế hoạch, theo dõi hiệu quả và tối ưu chiến dịch marketing tích hợp.',
    p1goal: 'Sản xuất PR article, MC script, social content, TVC, ấn phẩm launch; điều phối Sales, agency và stakeholder cho sự kiện launch & activation.',
    p2goal: 'Xây dựng một hệ nhận diện nội dung thống nhất trên ấn phẩm nội bộ, cổng biên tập website, email marketing và các kênh phân phối đa nền tảng.',
    p3goal: 'Biến thông tin phức tạp thành tài liệu truyền thông thuyết phục — hỗ trợ khách hàng thấu hiểu sản phẩm, đồng bộ stakeholder và thúc đẩy chuyển đổi bán hàng.',
    impactT: 'Hiệu quả dự án', delivT: 'Hạng mục bàn giao', i1: 'Sự kiện thực hiện', i2: 'Stakeholder điều phối', i3: 'Định dạng nội dung', i4: 'Nhân sự tiếp cận',
    fName: 'Tên của bạn', fMail: 'Email', fMsg: 'Bạn đang cần xây dựng điều gì?', fSend: 'Gửi lời nhắn',
    copy: 'Copy', copied: 'Đã copy!', certHint: 'bấm để xem', views: 'lượt xem',
    spH1: 'Góc nhìn sâu hơn về các dự án, hệ thống', spH2: 'và bài toán kinh doanh tôi từng xử lý.', spSub: 'Các case study tiêu biểu về tư duy chiến lược, khả năng thực thi, systems thinking và phối hợp liên phòng ban.', spBg: 'Bối cảnh', spProb: 'Vấn đề / Mục tiêu', spRole: 'Vai trò của tôi', spProc: 'Cách tiếp cận', spOut: 'Kết quả / Tác động', spView: 'Xem case study'
  },
  en: {
    about: 'About', services: 'Services', projects: 'Projects', certs: 'Certificates', contact: 'Contact',
    heroH: "Hi, I'm Vỹ Nguyễn",
    heroSub: 'CREATIVE STRATEGIST & BRAND ARCHITECT — BRIDGING NARRATIVE STORYTELLING, EXPERIENTIAL EVENTS & DIGITAL UX ACROSS INDUSTRIES.',
    cta: 'Explore the work', cvBtn: 'Download CV',
    c1: 'Campaign assets produced', c2: 'Social video views generated', c3: 'Offline activation events',
    aboutP: 'I am a Marketing & Communications professional with experience in Branding, Social Media, Events and Content Strategy. I love turning complex ideas into stories people understand, and building campaigns that create real value. My strength is connecting strategic thinking with execution — from internal communications and content operations to cross-functional project coordination.',
    edu: 'International University, VNU-HCM — BBA · GPA 3.6/4.0 · 2018–2023',
    tl1t: 'Content Creator & Community Management', tl1d1: 'Created content and grew a community in the tarot & art niche.', tl1d2: 'Built micro-influencer partnerships and organized community activities.', tl1m: '+40% followers (4k→6k) in 3 months',
    tl2t: 'Marketing Communications & Digital Marketing Executive', tl2d1: 'Coordinated cross-functional marketing & comms projects with agencies and external partners.', tl2d2: 'Managed communication assets and rollout timelines, supporting 2,000+ staff & stakeholders.',
    s1: 'Building and maintaining a consistent brand image across every communication touchpoint.', s2: 'Planning multi-platform content — PR, social, website, brochures, event scripts.', s3: 'Running fanpages, managing communities, optimizing engagement and follower growth.', s4: 'Coordinating launch events and activations from idea to execution with agencies and partners.', s5: 'Planning, tracking and optimizing integrated marketing campaigns.',
    p1goal: 'Produced PR articles, MC scripts, social content, TVC and launch collateral; coordinated Sales, agencies and stakeholders for launch & activation events.',
    p2goal: 'Establishing a unified brand narrative across internal publications, website editorial portals, email communications, and multi-channel content engines.',
    p3goal: 'Transforming complex information into persuasive communication materials that support customer understanding, stakeholder alignment, and sales conversion.',
    impactT: 'Project impact', delivT: 'Key deliverables', i1: 'Events executed', i2: 'Stakeholders coordinated', i3: 'Content formats produced', i4: 'Stakeholders reached',
    fName: 'Your name', fMail: 'Email', fMsg: 'What are you looking to build?', fSend: 'Send message',
    copy: 'Copy', copied: 'Copied!', certHint: 'click to view', views: 'views',
    spH1: 'A closer look at projects, systems,', spH2: "and business challenges I've worked on.", spSub: 'Selected works highlighting strategy, execution, systems thinking, and cross-functional collaboration.', spBg: 'Background', spProb: 'Problem / Objective', spRole: 'My Role', spProc: 'Approach / Process', spOut: 'Outcome / Impact', spView: 'View case study'
  }
};
