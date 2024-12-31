import { Component } from 'solid-js';

const Footer: Component<{ class?: string }> = (props) => {
  return (
    <footer class={`bg-[#F17C78] p-4 text-center mt-auto ${props.class || ''}`}>
      <p class="text-white">© 2024 東雲 琥珀 (Kohaku Shinonome) All rights reserved.</p>
    </footer>
  );
};

export default Footer;
