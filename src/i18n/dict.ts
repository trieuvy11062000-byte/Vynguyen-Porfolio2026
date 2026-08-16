export type Lang = 'vi' | 'en';

export interface DictShape {
  about: string; services: string; projects: string; certs: string; contact: string;
  heroH: string; heroRole: string; heroTag: string; cta: string;
  c1: string; c2: string; c3: string; c4: string;
  aboutP: string; edu: string;
  tl1t: string; tl1d1: string; tl1d2: string; tl1d3: string;
  tl2t: string; tl2d1: string; tl2d2: string; tl2d3: string;
  s1: string; s2: string; s3: string; s4: string;
  p1goal: string; p2goal: string; p3goal: string;
  p1OutT: string; p1V1: string; p1L1: string; p1V2: string; p1L2: string; p1Note: string; p1DelivT: string;
  fName: string; fMail: string; fMsg: string; fSend: string;
  copy: string; copied: string; certHint: string; views: string;
  spH1: string; spH2: string; spSub: string; spBg: string; spProb: string; spRole: string; spProc: string; spOut: string; spView: string;
}

export const DICT: Record<Lang, DictShape> = {
  vi: {
    about: 'Giới thiệu', services: 'Dịch vụ', projects: 'Dự án', certs: 'Chứng chỉ', contact: 'Liên hệ',
    heroH: 'Hi, Vỹ Nguyễn đây',
    heroRole: 'Chuyên viên Marketing & Truyền thông',
    heroTag: 'Biến ý tưởng thành nội dung, chiến dịch và những trải nghiệm thực tế.',
    cta: 'Khám phá dự án',
    c1: 'Ấn phẩm chiến dịch đã sản xuất', c2: 'Lượt xem mới', c3: 'Người theo dõi mới', c4: 'Tăng trưởng người theo dõi',
    aboutP: 'Tôi là người làm Marketing và Truyền thông với kinh nghiệm trong Branding, Social Media, Event và Content Strategy. Tôi thích biến ý tưởng phức tạp thành câu chuyện dễ hiểu và tạo ra chiến dịch mang giá trị thực tế. Điểm mạnh của tôi là kết nối tư duy chiến lược với khả năng thực thi — từ truyền thông nội bộ, quản lý nội dung đến điều phối dự án đa phòng ban.',
    edu: 'Đại học Quốc tế, ĐHQG-HCM — Cử nhân QTKD · GPA 3.6/4.0 · 2018–2023',
    tl1t: 'Content Creator & Community Management', tl1d1: 'Sáng tạo nội dung, phát triển cộng đồng trong lĩnh vực tarot & nghệ thuật.', tl1d2: 'Hợp tác micro-influencer, tổ chức hoạt động cộng đồng.', tl1d3: 'Tăng trưởng cộng đồng +40% follower (4k→6k) trong 3 tháng.',
    tl2t: 'Marketing Truyền thông & Digital Executive', tl2d1: 'Lên ý tưởng và sản xuất nội dung cho TikTok, Facebook, website và các kênh truyền thông của thương hiệu.', tl2d2: 'Xây dựng content calendar và định hướng nội dung theo từng kênh, nhóm nội dung và mục tiêu truyền thông.', tl2d3: 'Brief và phối hợp với Designer, Video Editor và agency để triển khai visual, video và các hạng mục nội dung theo campaign.',
    s1: 'Phát triển nội dung và triển khai các hoạt động truyền thông theo định hướng thương hiệu.', s2: 'Xây dựng content pillar, content calendar và định hướng nội dung theo mục tiêu truyền thông.', s3: 'Vận hành TikTok, Facebook và triển khai short-form content, content scheduling và social performance tracking.', s4: 'Phối hợp triển khai campaign từ concept, creative brief đến execution cùng agency và các đối tác.',
    p1goal: 'Phát triển nội dung và phối hợp triển khai truyền thông cho các hoạt động launch & activation tại Thiso Mall Sala.',
    p2goal: 'Triển khai nội dung và quản lý các điểm chạm truyền thông, bao gồm ấn phẩm nội bộ, website, email marketing và các kênh phân phối nội dung, đảm bảo thông điệp và hình ảnh thương hiệu nhất quán.',
    p3goal: 'Biến thông tin phức tạp thành tài liệu truyền thông thuyết phục — hỗ trợ khách hàng thấu hiểu sản phẩm, đồng bộ stakeholder và thúc đẩy chuyển đổi bán hàng.',
    p1OutT: 'Kết quả', p1V1: '7,9M+', p1L1: 'Lượt xem', p1V2: '13K+', p1L2: 'Lượt theo dõi mới', p1Note: 'Đạt được trong 3 tháng thông qua nội dung video ngắn trên TikTok & Facebook Reels.', p1DelivT: 'Hạng mục triển khai',
    fName: 'Tên của bạn', fMail: 'Email', fMsg: 'Bạn đang cần xây dựng điều gì?', fSend: 'Gửi lời nhắn',
    copy: 'Copy', copied: 'Đã copy!', certHint: 'bấm để xem', views: 'lượt xem',
    spH1: 'Góc nhìn sâu hơn về các dự án,', spH2: 'hệ thống tôi từng triển khai.', spSub: 'Các case study tiêu biểu về content, communication, campaign execution và phối hợp triển khai.', spBg: 'Bối cảnh', spProb: 'Vấn đề / Mục tiêu', spRole: 'Vai trò của tôi', spProc: 'Cách triển khai', spOut: 'Kết quả / Tác động', spView: 'Xem case study'
  },
  en: {
    about: 'About', services: 'Services', projects: 'Projects', certs: 'Certificates', contact: 'Contact',
    heroH: "Hi, I'm Vỹ Nguyễn",
    heroRole: 'Marketing & Communications Executive',
    heroTag: 'Turning ideas into content, campaigns, and real-world experiences.',
    cta: 'Explore the work',
    c1: 'Campaign assets produced', c2: 'Views', c3: 'New followers', c4: 'Follower growth',
    aboutP: 'I am a Marketing & Communications professional with experience in Branding, Social Media, Events and Content Strategy. I love turning complex ideas into stories people understand, and building campaigns that create real value. My strength is connecting strategic thinking with execution — from internal communications and content operations to cross-functional project coordination.',
    edu: 'International University, VNU-HCM — BBA · GPA 3.6/4.0 · 2018–2023',
    tl1t: 'Content Creator & Community Management', tl1d1: 'Created content and grew a community in the tarot & art niche.', tl1d2: 'Built micro-influencer partnerships and organized community activities.', tl1d3: 'Grew the community +40% followers (4k→6k) in 3 months.',
    tl2t: 'Marketing Communications & Digital Marketing Executive', tl2d1: 'Ideated and produced content for TikTok, Facebook, website and the brand’s communication channels.', tl2d2: 'Built content calendars and set content direction by channel, content pillar and communication goals.', tl2d3: 'Briefed and coordinated with Designers, Video Editors and agencies to deliver visuals, video and content for each campaign.',
    s1: 'Developing content and delivering communication activities aligned with brand direction.', s2: 'Building content pillars, content calendars, and content direction aligned with communication goals.', s3: 'Managing TikTok and Facebook, producing short-form content, scheduling posts, and tracking social performance.', s4: 'Coordinating campaign execution from concept and creative briefing through delivery with agencies and partners.',
    p1goal: 'Developed content and coordinated communications execution for launch & activation activities at Thiso Mall Sala.',
    p2goal: 'Delivered content and managed communication touchpoints — internal publications, website, email marketing and content distribution channels — keeping messaging and brand imagery consistent.',
    p3goal: 'Transforming complex information into persuasive communication materials that support customer understanding, stakeholder alignment, and sales conversion.',
    p1OutT: 'Outcome', p1V1: '7.9M+', p1L1: 'Views', p1V2: '13K+', p1L2: 'New followers', p1Note: 'Achieved within 3 months through short-form content on TikTok & Facebook Reels.', p1DelivT: 'Deliverables',
    fName: 'Your name', fMail: 'Email', fMsg: 'What are you looking to build?', fSend: 'Send message',
    copy: 'Copy', copied: 'Copied!', certHint: 'click to view', views: 'views',
    spH1: 'A closer look at the projects,', spH2: "systems I've delivered.", spSub: 'Selected case studies in content, communication, campaign execution, and cross-functional delivery.', spBg: 'Background', spProb: 'Problem / Objective', spRole: 'My Role', spProc: 'Execution Approach', spOut: 'Outcome / Impact', spView: 'View case study'
  }
};
