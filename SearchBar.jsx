function SearchBar({query, setQuery, onSearch}) {
    const handleSearch = () => {
        console.log("Searching for:", query);
    };
    return (
        <div className="search-bar">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Enter product url or name.." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;