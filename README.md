# IT-FE

Đây là dự án ReactJS đã được dựng khung sẵn để người sau có thể tiếp tục code theo đúng cấu trúc hiện tại.

## Mục tiêu của dự án

- Giữ giao diện mặc định bằng tiếng Việt.
- Dùng chung bộ màu và font trong `global.css`.
- Tách code theo từng nhóm rõ ràng để dễ mở rộng màn hình mới.

## Cách chạy dự án

```bash
npm install
npm run dev
```

Nếu cần build production:

```bash
npm run build
```

## Cấu trúc thư mục

- `src/index.js`: điểm khởi động React.
- `src/App.js`: component gốc của ứng dụng, hiện đang render màn hình tuyển dụng.
- `src/pages/Dangtintuyendung/Dangtintuyendung.jsx`: màn hình mặc định của dự án.
- `src/components`: chứa component dùng lại nhiều nơi.
- `src/context`: chứa context và provider dùng chung.
- `src/data`: chứa dữ liệu mẫu hoặc dữ liệu tĩnh.
- `src/services`: chứa lớp gọi API.
- `src/utils`: chứa hàm tiện ích.
- `src/App.css`: style riêng cho khung trang.
- `src/index.css`: style nền tảng cho toàn bộ app.
- `global.css`: nơi đặt biến màu, font và các style chung.
- `public`: chứa tài nguyên tĩnh.
- `screenshots`: chứa ảnh chụp màn hình hoặc ảnh tham khảo.

## Quy ước khi code tiếp

- Màn hình mới nên đặt trong `src/pages/<TenManHinh>/`.
- Component dùng chung nên đặt trong `src/components`.
- Nếu cần dữ liệu mẫu, đặt vào `src/data` thay vì viết trực tiếp trong component.
- Nếu cần gọi API, tách hàm vào `src/services`.
- Nếu muốn đổi màu hoặc font, ưu tiên sửa `global.css` trước, không sửa rải rác trong từng file.

## Luồng chỉnh sửa đề xuất

1. Tạo màn hình hoặc component mới đúng thư mục.
2. Import màn hình đó vào `src/App.js` nếu nó là màn hình chính.
3. Chỉnh style trong `src/App.css` hoặc file style riêng của màn hình.
4. Kiểm tra lại giao diện bằng `npm run dev`.

## Lưu ý cho người sau code

- Màn hình hiện tại đang là màn hình mặc định của dự án và được render từ `src/App.js`.
- Nội dung giao diện giữ tiếng Việt để thống nhất với thiết kế gốc.
- Cấu trúc thư mục đã được chuẩn bị sẵn để có thể tách thêm nhiều màn hình sau này mà không phải sửa lại nền tảng.