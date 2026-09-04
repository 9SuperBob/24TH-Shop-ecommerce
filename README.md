# 🛒 24TH Shop E-Commerce

เว็บไซต์ E-Commerce สำหรับทดลองพัฒนา Frontend ด้วย **React** โดยจำลองการทำงานของร้านค้าออนไลน์ ตั้งแต่การแสดงสินค้า ดูรายละเอียดสินค้า เพิ่มสินค้าลงตะกร้า จัดการจำนวนสินค้า ไปจนถึงหน้า Checkout

โปรเจกต์นี้เน้นการฝึกพัฒนา **React Component, State Management, API Integration, React Router และ Local Storage** รวมถึงการออกแบบ Responsive User Interface ด้วย Tailwind CSS

---

## 🌐 Live Demo

**Website:**
https://24-th-shop-ecommerce.vercel.app/

**GitHub:**
https://github.com/9SuperBob/24TH-Shop-ecommerce

---

## ✨ Features

### 🛍️ Product Listing

* แสดงรายการสินค้าจาก API
* แสดงรูปภาพ ชื่อสินค้า ราคา และข้อมูลที่เกี่ยวข้อง
* รองรับการเลือกดูรายละเอียดสินค้า

### 🔎 Product Detail

* แสดงรายละเอียดสินค้า
* แสดงรูปภาพสินค้า
* แสดงราคาและจำนวนสินค้าใน Stock
* แสดงคะแนนและ Reviews
* เลือกจำนวนสินค้าที่ต้องการซื้อ
* เพิ่มสินค้าลงตะกร้า
* สามารถกด **Buy Now** เพื่อไปยังหน้า Checkout ได้ทันที
* แสดงสินค้าอื่น ๆ ในหมวดหมู่เดียวกัน
* สามารถเลื่อนไปยังสินค้าก่อนหน้าและถัดไปได้

### 🛒 Shopping Cart

ระบบตะกร้าสินค้าสามารถ

* เพิ่มสินค้า
* เพิ่มจำนวนสินค้า
* ลดจำนวนสินค้า
* ลบสินค้า
* ตรวจสอบว่าสินค้ามีอยู่ในตะกร้าหรือไม่
* คำนวณจำนวนสินค้ารวม
* คำนวณราคาสินค้ารวม
* บันทึกข้อมูลตะกร้าด้วย Local Storage

### 💳 Checkout

หน้า Checkout รองรับ

* กรอกชื่อ
* กรอก Email
* กรอกเบอร์โทรศัพท์
* กรอกที่อยู่
* เลือกช่องทางการชำระเงิน

  * Credit Card
  * PromptPay
  * Cash on Delivery
* แสดงรายการสินค้าในคำสั่งซื้อ
* ปรับจำนวนสินค้า
* ลบสินค้า
* คำนวณจำนวนสินค้าและยอดรวม
* ตรวจสอบข้อมูลก่อนส่งคำสั่งซื้อ
* จำลองการสั่งซื้อสำเร็จ

> หมายเหตุ: ระบบ Checkout และ Payment ในโปรเจกต์นี้เป็น **ระบบจำลองสำหรับการศึกษา** ยังไม่มีการเชื่อมต่อระบบชำระเงินจริงหรือ Backend

---

## 🔌 API

โปรเจกต์ใช้ **DummyJSON API** สำหรับดึงข้อมูลสินค้า

API ที่ใช้:

```text
https://dummyjson.com/products
```

ข้อมูลที่นำมาใช้งาน เช่น

* Product ID
* Product Name
* Price
* Description
* Category
* Stock
* Images
* Rating
* Reviews

การเรียกข้อมูล API ใช้ JavaScript `fetch()` และจัดการข้อมูลด้วย React State

---

## 🛠️ Technologies

### Frontend

* React
* JavaScript
* Tailwind CSS

### Development

* Vite
* Node.js
* npm

### Libraries

* React Router
* Heroicons

### API & Data

* REST API
* DummyJSON API
* Local Storage

### Tools

* Git
* GitHub
* Visual Studio Code

---

## 🧩 React Concepts ที่ใช้

โปรเจกต์นี้นำแนวคิดสำคัญของ React มาใช้งาน เช่น

### Components

แบ่งหน้าเว็บไซต์ออกเป็น Components เพื่อให้สามารถนำกลับมาใช้ซ้ำและดูแลโค้ดได้ง่ายขึ้น

ตัวอย่าง Components:

```text
Navbar
Hero
Pageshop1
ProductDetail
Checkout
Footer
```

### State Management

ใช้ React `useState()` สำหรับจัดการข้อมูล เช่น

* รายการสินค้า
* ตะกร้าสินค้า
* จำนวนสินค้า
* ข้อมูล Checkout
* วิธีการชำระเงิน

### Side Effects

ใช้ `useEffect()` สำหรับ

* เรียกข้อมูลจาก API
* โหลดข้อมูล Cart จาก Local Storage
* บันทึก Cart ลง Local Storage

### Routing

ใช้ **React Router** เพื่อจัดการเส้นทางของเว็บไซต์

```text
/                  → หน้าร้านค้า
/product/:id       → รายละเอียดสินค้า
/checkout          → หน้า Checkout
```

---

## 💾 Local Storage

โปรเจกต์ใช้ Browser Local Storage ในการจัดเก็บข้อมูล Shopping Cart

เมื่อผู้ใช้เพิ่มสินค้าในตะกร้า ระบบจะบันทึกข้อมูล Cart ลงใน Local Storage ทำให้ข้อมูลตะกร้ายังคงอยู่แม้ว่าจะ Refresh หน้าเว็บไซต์

ตัวอย่างข้อมูลที่จัดเก็บ:

```text
cart
```

---

## 📁 Project Structure

```text
24TH-Shop-ecommerce/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── component/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Pageshop1.jsx
│   │
│   ├── function/
│   │   ├── Checkout.jsx
│   │   └── ProductDetail.jsx
│   │
│   ├── pictures/
│   │   ├── beauty1.jpg
│   │   ├── beauty2.jpg
│   │   ├── fragrances1.jpg
│   │   ├── fragrances2.jpg
│   │   ├── furniture1.jpg
│   │   ├── furniture2.jpg
│   │   ├── groceries1.jpg
│   │   ├── groceries2.jpg
│   │   └── shopping-cart.png
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── docs/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── jsrepo.config.ts
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/9SuperBob/24TH-Shop-ecommerce.git
```

### 2. เข้าสู่โฟลเดอร์โปรเจกต์

```bash
cd 24TH-Shop-ecommerce
```

### 3. ติดตั้ง Dependencies

```bash
npm install
```

---

## ▶️ Run Development Server

รันโปรเจกต์ด้วยคำสั่ง

```bash
npm run dev
```

จากนั้นเปิดเว็บไซต์ผ่าน URL ที่ Vite แสดงใน Terminal เช่น

```text
http://localhost:5173
```

---

## 📦 Build สำหรับ Production

สร้าง Production Build ด้วยคำสั่ง

```bash
npm run build
```

หากต้องการ Preview Production Build:

```bash
npm run preview
```

---

## 🛒 User Flow

การใช้งานหลักของเว็บไซต์สามารถทำได้ตามลำดับดังนี้

```text
หน้าแรก
   │
   ▼
แสดงรายการสินค้า
   │
   ▼
เลือกสินค้า
   │
   ▼
Product Detail
   │
   ├── Add to Cart
   │       │
   │       ▼
   │   Shopping Cart
   │
   └── Buy Now
           │
           ▼
       Checkout
           │
           ▼
     กรอกข้อมูล
           │
           ▼
   เลือก Payment Method
           │
           ▼
       Place Order
           │
           ▼
     Order Success
```

---

## 📱 Responsive Design

เว็บไซต์ออกแบบให้รองรับการใช้งานบนหน้าจอหลายขนาด เช่น

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

โดยใช้ Utility Classes ของ **Tailwind CSS** ในการจัด Layout และ Responsive Breakpoints

---

## 🎯 จุดประสงค์ของโปรเจกต์

โปรเจกต์นี้จัดทำขึ้นเพื่อฝึกทักษะด้าน **Frontend Development** และการสร้าง Web Application ด้วย React

โดยมีจุดประสงค์หลัก ได้แก่

1. ฝึกพัฒนาเว็บไซต์ด้วย React
2. ฝึกการสร้างและจัดการ React Components
3. ฝึกการใช้ React Hooks เช่น `useState()` และ `useEffect()`
4. ฝึกการใช้งาน React Router
5. ฝึกการเชื่อมต่อ REST API
6. ฝึกการจัดการข้อมูลจาก API
7. ฝึกสร้างระบบ Shopping Cart
8. ฝึกใช้ Local Storage
9. ฝึกสร้างหน้า Product Detail
10. ฝึกสร้างหน้า Checkout
11. ฝึกออกแบบ Responsive User Interface
12. ฝึกการจัดโครงสร้างโปรเจกต์ Frontend

---

## 💡 สิ่งที่ได้เรียนรู้จากโปรเจกต์

จากการพัฒนาโปรเจกต์นี้ ได้ฝึกการทำงานของ Web Application ตั้งแต่การรับข้อมูลจาก API ไปจนถึงการนำข้อมูลมาแสดงผลและจัดการข้อมูลภายในฝั่ง Frontend

โดยเฉพาะการจัดการ State ของสินค้าและ Shopping Cart รวมถึงการทำงานร่วมกันระหว่างหลาย Components ผ่าน Props และ React State

นอกจากนี้ยังได้ฝึกการใช้ React Router เพื่อสร้างหลายหน้าใน Single Page Application และใช้ Local Storage เพื่อเก็บข้อมูลของผู้ใช้ภายใน Browser

---

## ⚠️ ข้อจำกัดของโปรเจกต์

โปรเจกต์นี้เป็น **Frontend E-Commerce สำหรับการศึกษา** จึงมีข้อจำกัดบางประการ เช่น

* ไม่มี Backend จริง
* ไม่มีฐานข้อมูลของระบบเอง
* ระบบ Login / Register ยังไม่มี
* ระบบ Payment เป็นเพียงการจำลอง
* Order ไม่ได้ถูกบันทึกลง Server
* ข้อมูลสินค้าถูกดึงจาก DummyJSON API
* ไม่มีระบบจัดการสินค้าแบบ Admin

---

## 👨‍💻 Developer

## 👨‍💻 Developer

Developed by **SIRAWIT NOKAUM**

🎓 Information Technology Student
🏫 Sripatum University

---

## 📌 License

This project was created for **educational and portfolio purposes**.

