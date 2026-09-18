import './globals.css';
import Navbar from './components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Navbar yahan load hoga */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}