import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Paradise Construction Estimating Blog",
    "description": "Expert insights, tips, and industry news for construction professionals"
  };

  const posts = [
    {
      title: "5 Ways Accurate Estimates Can Save Your Construction Project",
      excerpt: "Discover how precise cost estimating can prevent budget overruns and keep your projects on track.",
      date: "January 15, 2024",
      author: "Paradise Team",
      category: "Best Practices",
    },
    {
      title: "Understanding Material Take-Offs: A Complete Guide",
      excerpt: "Learn the fundamentals of material take-offs and why they're critical for construction success.",
      date: "January 10, 2024",
      author: "Paradise Team",
      category: "Education",
    },
    {
      title: "How Technology is Revolutionizing Construction Estimating",
      excerpt: "Explore the latest tools and technologies transforming the estimating process in 2024.",
      date: "January 5, 2024",
      author: "Paradise Team",
      category: "Technology",
    },
    {
      title: "Commercial vs Residential Estimating: Key Differences",
      excerpt: "Understanding the unique challenges and considerations for different project types.",
      date: "December 28, 2023",
      author: "Paradise Team",
      category: "Industry Insights",
    },
    {
      title: "Top 10 Estimating Mistakes and How to Avoid Them",
      excerpt: "Common pitfalls in construction estimating and proven strategies to prevent them.",
      date: "December 20, 2023",
      author: "Paradise Team",
      category: "Best Practices",
    },
    {
      title: "The Role of Preliminary Estimates in Project Planning",
      excerpt: "Why preliminary estimates are crucial for project feasibility and budget planning.",
      date: "December 15, 2023",
      author: "Paradise Team",
      category: "Planning",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Construction Estimating Blog | Tips, Insights & Industry News"
        description="Expert construction estimating insights, best practices, and industry news. Learn from professionals with 15+ years of experience."
        canonical="https://paradiseestimating.com/blog"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[350px] lg:min-h-[350px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: "url('/assets/services.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          {/* Content Overlay */}
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 text-black">
                BLOGS
              </h1>

              <h2 className="text-xl lg:text-2xl font-bold tracking-wider text-black mb-6">
                PARADISE ESTIMATING COMPANY
              </h2>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-background rounded-lg shadow-card hover:shadow-hover transition-shadow overflow-hidden border border-border"
                >
                  {/* Post image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>

                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
