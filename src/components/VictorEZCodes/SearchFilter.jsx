import { useState, useMemo } from "react";
import styles from "./SearchFilter.module.css";
import { FaSearch } from "react-icons/fa";
import Author from "../../Author";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const items = [
    { id: 1, name: "React Basics", category: "frontend", difficulty: "beginner" },
    { id: 2, name: "Node.js API", category: "backend", difficulty: "intermediate" },
    { id: 3, name: "CSS Animation", category: "frontend", difficulty: "beginner" },
    { id: 4, name: "Database Design", category: "backend", difficulty: "advanced" },
  ];

  const filteredItems = useMemo(() => {
    return items
      .filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "all" || item.category === category)
      )
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return a.difficulty.localeCompare(b.difficulty);
      });
  }, [searchTerm, category, sortBy]);

  return (
    <section className={styles.section}>
      <h2>Search and Filter Component</h2>
      <p>Search, filter, and sort items with real-time updates</p>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.filters}>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="difficulty">Sort by Difficulty</option>
          </select>
        </div>
      </div>

      <div className={styles.results}>
        {filteredItems.map(item => (
          <div key={item.id} className={styles.item}>
            <h3>{item.name}</h3>
            <span className={styles.badge}>{item.category}</span>
            <span className={styles.badge}>{item.difficulty}</span>
          </div>
        ))}
      </div>

      <Author name="Victor Ezeanyika" githubLink="https://github.com/VictorEZCodes" />
    </section>
  );
}