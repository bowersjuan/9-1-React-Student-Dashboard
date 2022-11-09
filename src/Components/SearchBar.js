export default function SearchBar({ search, saveSearch }) {
  return (
    <form>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => saveSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}
