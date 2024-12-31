import { Component, createSignal } from 'solid-js';

const Header: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <header class="bg-[#F17C78] p-2 flex justify-between items-center h-16">
      <div class="flex items-center">
        <img
          src="https://p.misskey.gg/avatar.webp?url=https%3A%2F%2Fsss.misskey.gg%2Fsss%2Fgg%2Ff630154c-693a-4789-9104-1bf79f469692.jpg&avatar=1"
          alt="東雲琥珀"
          class="w-10 h-10 rounded-full"
        />
        <h1 class="text-white text-xl font-cute ml-2">東雲琥珀のサイト</h1>
      </div>

      {/* ハンバーガーメニュー（スマホ向け） */}
      <div class="md:hidden">
        <button onClick={toggleMenu} class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={isMenuOpen() ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* ナビゲーションメニュー */}
      <nav class={`${isMenuOpen() ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:static absolute top-16 right-0 bg-[#F17C78] w-full md:w-auto z-10`}>
        <ul class="flex flex-col md:flex-row md:space-x-4 p-2 md:p-0">
          <li><a href="/" class="block text-white hover:text-gray-200 py-2 px-4">Home</a></li>
          <li><a href="/blog" class="block text-white hover:text-gray-200 py-2 px-4">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;