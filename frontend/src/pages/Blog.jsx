import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../api/client.js";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    let active = true;
    client
      .get("/blogs")
      .then(({ data }) => {
        if (active) {
          setBlogs(data.data || []);
          setStatus("success");
        }
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <section className="border-b border-border bg-white py-14">
        <div className="container-content">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Resources</p>
          <h1 className="mt-1.5 text-3xl font-800 sm:text-4xl">Guides &amp; updates</h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
            Practical guidance on vehicle scrapping, documentation, and what actually determines
            your scrap value.
          </p>
        </div>
      </section>

      <section className="bg-bg py-12">
        <div className="container-content">
          {status === "loading" && <p className="text-sm text-ink-muted">Loading articles…</p>}

          {status === "error" && (
            <p className="rounded-md border border-border bg-white p-6 text-sm text-ink-muted">
              Couldn't load articles right now. Make sure the backend API is running, or check
              back shortly.
            </p>
          )}

          {status === "success" && blogs.length === 0 && (
            <p className="rounded-md border border-border bg-white p-6 text-sm text-ink-muted">
              No articles published yet — check back soon.
            </p>
          )}

          {status === "success" && blogs.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-md border border-border bg-white transition-shadow hover:shadow-md"
                >
                  <div className="h-2" style={{ backgroundColor: post.coverColor || "#0F4D34" }} />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {post.category}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-700 leading-snug text-ink group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-ink-muted">{post.readTimeMinutes} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
