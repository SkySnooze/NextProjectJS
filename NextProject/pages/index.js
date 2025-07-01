import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ยินดีต้อนรับสู่เว็บไซต์ของฉัน!</h1>
      <p>นี่คือหน้าแรกของ Next.js</p>
      <Link href="/about">ไปหน้าข้อมูล</Link>
    </div>
  );
}