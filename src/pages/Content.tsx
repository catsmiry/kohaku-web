import { Component, onMount } from 'solid-js';
import Header from './Header';
import Footer from './Footer';

const Home: Component = () => {
  onMount(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0', 'translate-y-10');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    });
  });

  return (
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#F17C78] to-[#FFD1D1] overflow-x-hidden">
      <Header />
      <main class="flex-grow p-4 w-full max-w-screen mx-auto">

{/* About Section */}
        <section id="about" class="mb-8 p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out">
          <h2 class="text-3xl font-cute text-[#F17C78]">Content</h2>
          <p class="mt-4 text-lg text-gray-700">
            東雲琥珀は ミス廃系アイドルである。<br />
            Reliwave P.S の Fediverse 総括マネージャーもしている。<br />
            普段は <a href="https://misskey.gg/@kohaku_shinonome" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">misskey.gg</a> にいるらしい。
          </p>
        </section>
// マジでよくわかってないけど頑張って開発してます
        // 応援してね
