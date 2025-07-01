import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>เกี่ยวกับเรา</h1>
      <p>นี่คือหน้าเกี่ยวกับเรา</p>
      <Link href="/">กลับหน้าแรก</Link>
    </div>
  );
}
