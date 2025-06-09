# Kế hoạch chi tiết từng bước thực hiện Portfolio (Vite + React + Tailwind)

Chúng ta sẽ tiến hành theo 6 bước nhỏ, mỗi bước bạn sẽ hoàn thành một phần và kiểm tra trước khi chuyển sang bước tiếp theo.

---

## Bước 1: Khởi tạo & cấu hình cơ bản

**Mục tiêu**: Tạo project Vite + React, cài Tailwind CSS và thiết lập cấu trúc file.

### Công việc:
1. Mở terminal chạy:
   ```bash
   npm create vite@latest my-portfolio --template react
   cd my-portfolio
   npm install
   ```
2. Cài Tailwind CSS, PostCSS, Autoprefixer:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. Cập nhật `tailwind.config.js`:
   ```js
   export default {
     content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
     theme: { extend: {} },
     plugins: [],
   }
   ```
4. Tạo file `src/index.css` với:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Chạy thử dev server:
   ```bash
   npm run dev
   ```

> **Xong bước 1** khi bạn có ứng dụng React trống chạy trên http://localhost:3000 và Tailwind đã hoạt động (thêm class Tailwind vào `App.jsx` thấy hiệu ứng thay đổi).

---

## Bước 2: Cấu trúc thư mục & Router

**Mục tiêu**: Tạo cấu trúc code sạch, chuẩn công ty, cài đặt React Router.

### Công việc:
1. Tạo thư mục:
   ```
   src/
   ├── assets/
   ├── components/
   ├── layouts/
   ├── pages/
   └── index.css
   ```
2. Cài React Router:
   ```bash
   npm install react-router-dom@6
   ```
3. Trong `src/main.jsx`, bọc App bằng `<BrowserRouter>`.
4. Trong `src/App.jsx`, tạo các route cơ bản:
   ```jsx
   import { Routes, Route } from 'react-router-dom';
   import Home from './pages/Home';
   // ... Projects, Skills, Contact

   export default function App() {
     return (
       <Routes>
         <Route path="/" element={<Home />} />
         {/* ... */}
       </Routes>
     );
   }
   ```

> **Xong bước 2** khi bạn có thể truy cập `/`, `/projects`, `/skills`, `/contact` (tạm hiển thị tiêu đề trang đơn giản).

---

## Bước 3: Tạo Layout & Navbar

**Mục tiêu**: Xây dựng `MainLayout` chứa Navbar và Footer, Navbar có hiệu ứng scroll.

### Công việc:
1. Tạo file `src/layouts/MainLayout.jsx`:
   ```jsx
   import Navbar from '../components/Navbar';
   import Footer from '../components/Footer';

   export default function MainLayout({ children }) {
     return (
       <div className="min-h-screen flex flex-col">
         <Navbar />
         <main className="flex-grow">{children}</main>
         <Footer />
       </div>
     );
   }
   ```
2. Xây dựng `Navbar.jsx` với state scroll (ẩn hiện background).
3. Tạo `Footer.jsx` đơn giản.
4. Bọc routes trong `MainLayout` (di chuyển Routes vào trong layout).

> **Xong bước 3** khi Navbar hiển thị cố định, footer luôn nằm cuối trang.

---

## Bước 4: Xây dựng các Page chính

**Mục tiêu**: Viết giao diện cho Home, Projects, Skills, Contact.

### Công việc:
- **Home**: Avatar, tên, mô tả, button scroll tới Projects.
- **Projects**: Tạo `ProjectCard` component, map mảng `projects`.
- **Skills**: Hiển thị grid kỹ năng với badges.
- **Contact**: Icon links (email, GitHub, LinkedIn).

> **Xong bước 4** khi mỗi trang đã có nội dung tĩnh, responsive cơ bản.

---

## Bước 5: Hiệu ứng & Tối ưu UX

**Mục tiêu**: Thêm animation (Framer Motion), smooth scroll, hover effects.

### Công việc:
1. Cài Framer Motion: `npm install framer-motion`
2. Thêm animation cho tiêu đề, card, nút bấm.
3. Smooth scroll giữa các section: CSS `scroll-behavior: smooth`.
4. Kiểm tra responsive, cross-browser.

> **Xong bước 5** khi trải nghiệm người dùng mượt mà, có animation vừa phải.

---

## Bước 6: Triển khai & Hoàn thiện

**Mục tiêu**: SEO cơ bản, deploy, đóng gói.

### Công việc:
1. Thêm meta tags (title, description) trong `index.html`.
2. Build: `npm run build`.
3. Deploy lên Vercel/Netlify.
4. Kiểm tra link live, cập nhật README với hướng dẫn chạy.

> **Xong bước 6** khi bạn có link portfolio trực tuyến, sẵn sàng chia sẻ.

---

**Chúng ta hãy bắt đầu với Bước 1!**

> Bạn đã hoàn thành bước 1 chưa? Nếu có, báo mình để chuyển sang Bước 2.
