import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Chứa cấu hình Tailwind mặc định

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} antialiased min-h-screen bg-[#F8FAFC] text-[#0f172a] pb-20 md:pb-0`}>
        {children}
      </body>
    </html>
  );
}

