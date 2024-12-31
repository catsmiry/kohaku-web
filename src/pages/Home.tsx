import { Component, onMount } from 'solid-js';
import Header from './Header';
import Footer from './Footer';

const Home: Component = () => {
  // フェードインアニメーション用のクラスを追加
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
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#F17C78] to-[#FFD1D1]">
      <Header />
      <main class="flex-grow p-4">
        {/* Home Section */}
        <section id="home" class="mb-8 transition-all duration-1000 ease-in-out text-center">
          <h2 class="text-3xl font-cute text-white">東雲琥珀のサイトへようこそ！！</h2>
        </section>

        {/* About Section */}
        <section id="about" class="mb-8 p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out">
          <h2 class="text-3xl font-cute text-[#F17C78]">About 東雲琥珀</h2>
          <p class="mt-4 text-lg text-gray-700">
            東雲琥珀は ミス廃系アイドルである。<br />
            Reliwave P.S の Fediverse 総括マネージャーもしている。<br />
            普段は <a href="https://misskey.gg/@kohaku_shinonome" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">misskey.gg</a> にいるらしい。
          </p>
        </section>

        {/* Accounts Section */}
        <section id="accounts" class="p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out">
          <h2 class="text-3xl font-cute text-[#F17C78]">Accounts</h2>
          <div class="mt-4">
            <h3 class="text-xl font-cute text-[#F17C78]">メール</h3>
            <p><a href="mailto:me@kohaku.one" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">me@kohaku.one</a></p>
            <h3 class="text-xl font-cute text-[#F17C78] mt-4">Fediverse</h3>
            <ul>
              <li><a href="https://misskey.gg/@kohaku_shinonome" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">Misskey.gg (MAIN)</a></li>
              <li><a href="https://finity.social/@kohaku_shinonome" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">Finity.social</a></li>
            </ul>
            <h3 class="text-xl font-cute text-[#F17C78] mt-4">その他SNSなど</h3>
            <ul>
              <li><a href="https://github.com/kohakuto589" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">GitHub</a></li>
              <li><a href="https://twitter.com/kohaku_sinonome" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">Twitter (現 X)</a></li>
              <li><a href="https://www.instagram.com/kohaku_shinonome.589" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">Instagram</a></li>
              <li><a href="https://www.pixiv.net/users/100343110" class="text-blue-500 hover:text-blue-700 transition-colors duration-300">Pixiv</a></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;