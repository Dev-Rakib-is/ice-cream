import { categories } from "../../data/pageData/shop";

const CategoryFilter = ({ selectedCategory, onChange, categoryCounts }) => {
  const totalCount = Object.values(categoryCounts || {}).reduce((sum, val) => sum + val, 0);
  return (
    <div className="">
      <h3 className="text-2xl font-normal text-regularColor">Categories</h3>
      <ul className="py-4 border-b border-[#E3E4E5] space-y-2">
        <li className="flex gap-2 items-center">
          <input
            type="radio"
            value=""
            name="category"
            onChange={() => onChange("")}
            checked={selectedCategory === ""}
          />
          <span className="text-sm font-normal text-pColor">
            All Categories ({totalCount})
          </span>
        </li>
        {categories.map((cat, index) => (
          <li key={index} className="flex gap-2 items-center">
            <input
              type="radio"
              value={cat.name}
              name="category"
              onChange={() => onChange(cat.name)}
              checked={selectedCategory === cat.name}
            />
            <span className="text-sm font-normal text-pColor">
              {cat.name} ({categoryCounts?.[cat.name] || 0})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
