# Hướng dẫn tự sửa nội dung (không cần biết code)

File này giúp bạn biết **sửa cái gì thì mở file nào**. Sau khi sửa, lưu file lại và tải lại trang (`npm run dev` đang chạy sẵn thì tự cập nhật, không cần restart).

## 0. Quy trình tự sửa & chạy thử (không cần Claude)

**Bước 1 — Mở project bằng VS Code** (máy bạn đã cài sẵn):
Mở VS Code → File → Open Folder → chọn `D:\vy-portfolio`. Cây thư mục bên trái, bấm vào file cần sửa (xem mục 1 bên dưới để biết file nào), sửa chữ, nhấn `Ctrl+S` để lưu.

**Bước 2 — Chạy thử trên máy:**
Trong VS Code, menu Terminal → New Terminal, gõ:
```
npm run dev
```
Rồi mở trình duyệt vào `http://localhost:5173`. Từ đây, mỗi lần bạn sửa file và nhấn Lưu, trang **tự cập nhật ngay lập tức** — không cần chạy lại lệnh, không cần build. Muốn tắt thì bấm `Ctrl+C` trong terminal.

**Bước 3 — Đưa thay đổi lên web thật (sau khi đã deploy Vercel):**
Trong terminal, gõ lần lượt 3 lệnh:
```
git add -A
git commit -m "Cap nhat noi dung"
git push
```
Vercel sẽ tự phát hiện và deploy bản mới sau ~1 phút — bạn không cần làm gì thêm.

**Cách thay thế không cần mở máy tính có project:** sau khi code đã nằm trên GitHub, bạn có thể sửa chữ **trực tiếp trên trang github.com** — mở repo → bấm vào file (vd `src/data/content.ts`) → bấm biểu tượng bút chì ✏️ → sửa → bấm "Commit changes". Vercel cũng tự deploy như trên. Cách này tiện khi chỉ sửa vài câu chữ.

**Nếu lỡ sửa sai làm trang lỗi:** đừng lo — gõ `git checkout -- .` trong terminal để quay về bản đang chạy tốt gần nhất (bỏ mọi sửa đổi chưa commit).

Nếu bạn không quen sửa code, cách nhanh nhất vẫn là **nhờ tôi (Claude Code) sửa hộ**: chỉ cần mô tả bằng lời bạn muốn đổi gì ("đổi tiêu đề dự án 01 thành...", "thêm câu này vào phần giới thiệu"...), tôi sẽ tìm đúng chỗ và sửa chính xác — xem mục cuối file.

## 1. Sửa văn bản (chữ trên trang)

- **Câu chữ xuất hiện cả VI lẫn EN** (tiêu đề hero, mô tả dịch vụ, nhãn nút, ...) → mở `src/i18n/dict.ts`. File chia làm 2 khối `vi: {...}` và `en: {...}`, mỗi dòng dạng `key: 'nội dung'`. Sửa đúng phần chữ trong dấu nháy `'...'`, giữ nguyên `key:` phía trước.
- **Nội dung các dự án, chứng chỉ, case study, kỹ năng...** (những phần lặp lại theo danh sách) → mở `src/data/content.ts`. Mỗi mục là một khối `{ ... }` với các trường như `title`, `badge`, `bg`, `outs`, `mets`... sửa trực tiếp phần chữ trong dấu nháy.
- **Email, số điện thoại, link LinkedIn/Facebook** → tìm trong `src/components/ContactFooter.tsx` (mục liên hệ) và `src/components/AboutJourney.tsx` (link THỔ House).

⚠️ Lưu ý: chữ `"` hoặc `'` bên trong câu cần escape bằng `\'` hoặc đổi sang dấu ngoặc kép khác, nếu không chắc thì nhờ tôi sửa cho an toàn.

## 2. Thêm / thay hình ảnh, video, file PDF

**Không cần sửa code.** Chỉ cần thả file đúng tên vào thư mục `public/assets/` — trang tự nhận diện. Xem bảng đầy đủ tên file cần thiết trong [README.md](README.md) (mục "Filling in the empty media slots").

Ví dụ nhanh:
- Ảnh đại diện (hero) → `public/assets/portrait.jpg`
- Video clip cho carousel dự án 01 → `public/assets/p1v-1.mp4` (up video thật, nút play sẽ phát được)
- CV để mọi người tải về → `public/assets/cv.pdf` (nút "Tải CV" ở đầu trang sẽ tự hiện ra khi có file này)

Định dạng được chấp nhận theo từng loại ô: `.webp/.jpg/.jpeg/.png` cho ảnh, `.mp4/.webm/.mov` cho video (dự án 01). Không cần biết trước — cứ up đúng tên, sai định dạng thì hệ thống tự bỏ qua và vẫn hiện ô trống đẹp (không bị vỡ giao diện).

**Riêng tài liệu PDF ở mục 03 (Sales Enablement):** phần "Xem PDF đầy đủ" hiển thị bằng bộ ảnh từng trang đã render sẵn (`p3-doc-{số}-p{trang}.jpg`) chứ không đọc file PDF trực tiếp (PDF nhúng không chạy ổn định trên mọi trình duyệt). Vì vậy **khi thay/thêm PDF mới, hãy nhờ Claude render lại bộ ảnh trang** — chỉ cần nói "tôi vừa thay PDF mục 03, render lại giúp tôi".

### Vì sao vài ảnh mẫu bị mờ/vỡ nét?

12 ảnh có sẵn hiện tại là ảnh xem trước độ phân giải thấp lấy từ file thiết kế gốc (có ảnh chỉ rộng 248px), không phải ảnh chất lượng cao. Khi hiển thị phóng to trên màn hình sẽ bị mờ — đây **không phải lỗi code**, mà do ảnh mẫu quá nhỏ. Khi bạn thay bằng ảnh/video thật, nét sẽ đẹp ngay, miễn ảnh đủ lớn:
- Ảnh đại diện: tối thiểu 960×960px
- Ảnh 16:9 (banner, video frame): tối thiểu 1600px chiều ngang
- Ảnh case study, chứng chỉ: tối thiểu 1400px chiều ngang
- Video: xuất ở độ phân giải 1080p trở lên

## 3. Sửa màu sắc / gradient

Toàn bộ màu chủ đạo (tím `#B600A8`, hồng `#E45CFF`, gradient nút CTA...) nằm trong `src/context/ThemeLangContext.tsx`. Phần này ảnh hưởng đồng loạt nhiều chỗ nên **nên nhờ tôi sửa** thay vì tự chỉnh, để tránh lệch màu ở những nơi dùng chung.

## 4. Khi nào nên nhờ Claude Code sửa hộ

Cứ mô tả bằng lời bình thường, ví dụ:
- "Đổi số điện thoại thành 09xx xxx xxx"
- "Thêm 1 chứng chỉ mới tên ABC, đơn vị cấp XYZ"
- "Case study THISO Retail, đổi mục Kết quả thành..."
- "Nút CTA hero muốn đổi màu sang xanh dương"

Tôi sẽ tìm đúng file/dòng và sửa, không cần bạn biết code nằm ở đâu.
