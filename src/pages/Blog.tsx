import { Component, onMount, createSignal, For } from 'solid-js';
import Header from './Header';
import Footer from './Footer';
import { marked } from 'marked';

const Blog: Component = () => {
  const [posts, setPosts] = createSignal<{ title: string; excerpt: string; content: string }[]>([]);
  const [selectedPost, setSelectedPost] = createSignal<{ title: string; content: string } | null>(null);

  // Fetch and parse markdown posts
  onMount(async () => {
    const postFiles = import.meta.glob('./post/*.md', { as: 'raw' }); // 'raw' モードで読み込む
    console.log(postFiles); // デバッグ用

    const loadedPosts = [];
    for (const path in postFiles) {
      console.log(path); // デバッグ用
      const content = await postFiles[path](); // 直接文字列として読み込む
      console.log(content); // デバッグ用

      const parsedContent = await marked.parse(content, {
        gfm: true, // GitHub Flavored Markdown を有効にする
        breaks: true, // 改行を <br> に変換する
      });
      console.log(parsedContent); // デバッグ用

      const title = parsedContent.match(/<h1>(.*?)<\/h1>/)?.[1] || 'Untitled';
      const excerpt = content.substring(0, 10) + '...'; // 最初の10文字を表示

      loadedPosts.push({
        title,
        excerpt,
        content: parsedContent,
      });
    }

    setPosts(loadedPosts);
  });

  const handleExpandPost = (post: { title: string; content: string }) => {
    setSelectedPost(post);
  };

  return (
    <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#F17C78] to-[#FFD1D1]">
      <Header />
      <main class="flex-grow p-4">
        {selectedPost() ? (
          // 詳細表示
          <div class="text-center">
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <h2 class="text-3xl font-cute text-[#F17C78]">{selectedPost()?.title}</h2>
              < div class="mt-4 text-lg text-gray-700 mx-auto max-w-2xl markdown-content" innerHTML={selectedPost()?.content} />
            </div>
          </div>
        ) : (
          // コンパクト表示
          <section id="blog" class="mb-8 transition-all duration-1000 ease-in-out text-center">
            <h2 class="text-3xl font-cute text-white">東雲琥珀のブログ</h2>
          </section>
        )}

        {!selectedPost() && (
          <For each={posts()}>
            {(post, index) => (
              <section class="mb-8 p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out">
                <h2 class="text-3xl font-cute text-[#F17C78]">{post.title}</h2>
                <div class="mt-4 text-lg text-gray-700">
                  {post.excerpt}
                </div>
                <button
                  class="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  onClick={() => handleExpandPost(post)}
                >
                  続きを表示
                </button>
              </section>
            )}
          </For>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;