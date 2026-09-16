import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../api/client.js";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    let active = true;
    setStatus("loading");
    client
      .get(`/blogs/${slug}`)
      .then(({ data }) => {
        if (active) {
          setBlog(data.data);
          setStatus("success");
        }
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="container-content py-16">
        <p className="text-sm text-ink-muted">Loading article…</p>
      </div>
    );
  }

  if (status === "error" || !blog) {
    return (
      <div className="container-content py-16">
        <h1 className="text-2xl font-700">Article not found</h1>
        <p className="mt-2 text-sm text-ink-muted">
          This article may have been moved, or the backend API isn't reachable right now.
        </p>
        <Link to="/blog" className="btn-outline mt-6 inline-flex">
          Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <article>
      <div className="h-2" style={{ backgroundColor: blog.coverColor || "#0F4D34" }} />
      <div className="container-content max-w-2xl py-12">
        <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
          ← All articles
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">{blog.category}</p>
        <h1 className="mt-2 text-3xl font-800 leading-tight sm:text-4xl">{blog.title}</h1>
        <p className="mt-3 text-xs text-ink-muted">{blog.readTimeMinutes} min read</p>

        <div className="prose-content mt-8 space-y-5">
          {blog.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
