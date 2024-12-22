import NewsCard from "../components/NewsCard";

export default function Home() {
  const mockNews = [
    {
      title: "Breaking News: Exciting Development!",
      summary:
        "A brief summary of the news article goes here. It's concise and to the point.",
      url: "https://example.com/article1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Another News Story",
      summary: "This is a quick summary of the second news article.",
      url: "https://example.com/article2",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">This Week's Top News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            summary={news.summary}
            url={news.url}
            imageUrl={news.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
