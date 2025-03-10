import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import "./css/card.scss";
import "./css/globals.scss";
import "react-toastify/dist/ReactToastify.css";

// Dynamically import client components with SSR disabled
const ToastContainer = dynamic(() => import('react-toastify').then(mod => mod.ToastContainer), { ssr: false });
const Navbar = dynamic(() => import('./components/navbar'), { ssr: true });
const Footer = dynamic(() => import('./components/footer'), { ssr: true });
const ScrollToTop = dynamic(() => import('./components/helper/scroll-to-top'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Meet Vaghani - Software Developer",
  description:
    "This is the portfolio of Meet Vaghani. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
