"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-4 font-semibold text-gray-900">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm transition hover:text-blue-600 ${
                  activeId === item.id
                    ? "font-semibold text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;