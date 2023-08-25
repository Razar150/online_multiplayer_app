const GameCategories = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              style={{ fontWeight: selectedCategory === category.id ? 'bold' : 'normal' }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default GameCategories