import { useState, useRef, useCallback, useEffect } from "react";
import { CommonHero } from "../../shareComponents/CommonHero";
import { List, Grid, Search } from "lucide-react";
import { IoCaretDownSharp } from "react-icons/io5";
import useClickDetect from "../../shareComponents/outsideClick";
import {
  sortingData,
  products,
  featuredProducts,
} from "../../../data/pageData/shop";
import CategoryFilter from "../../shareComponents/CategoryFilter";
import ProductCard from "../../ui/ProductCard";
import Pagination from "../../ui/Pagination";
import { useNavigate, useOutletContext, useLocation } from "react-router-dom";

const Shop = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sort, setSort] = useState("Default Sorting");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { cartItem, handleAddToCart } = useOutletContext();

  const location = useLocation();
  const navigate = useNavigate();

  // Query param initial search value
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("search") || "";

  // Category & Search state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  // Sorted product list
  const sortedProduct = [...products]
    .filter((item) =>
      sort === "New Arrivals" ? item.badge?.trim() === "New" : true
    )
    .sort((a, b) => {
      if (sort === "Most Popular") return b.rating - a.rating;
      if (sort === "A to Z") return a.name.localeCompare(b.name);
      if (sort === "Z to A") return b.name.localeCompare(a.name);
      return 0;
    });

  // Filter by category and search
  const filterProduct = sortedProduct.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculation
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProducts = filterProduct.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPage = Math.ceil(filterProduct.length / itemPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Dropdown toggle
  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  useClickDetect(dropdownRef, () => setOpenDropdown(false));

  // Dynamic category count
  const categoryCounts = sortedProduct.reduce((acc, product) => {
    if (product.category) {
      acc[product.category] = (acc[product.category] || 0) + 1;
    }
    return acc;
  }, {});

  const handleSelect = useCallback((option) => {
    setSort(option);
    setOpenDropdown(false);
  }, []);

  // Live search & URL update
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    navigate(`/shop?search=${encodeURIComponent(value)}`);
  };

  // Update searchQuery on URL change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchQuery(search);
  }, [location.search]);

  return (
    <>
      <CommonHero title="Shop" description="Shop" />
      <section className="bg-white py-[80px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  className="w-full h-[44px] pl-4 pr-12 border border-pColor rounded-full outline-none text-sm"
                />
                <button className="absolute top-1/2 right-0 -translate-y-1/2 border w-12 h-11 rounded-r-full flex items-center justify-center bg-white cursor-pointer outline-none border-pColor">
                  <Search className="text-pColor w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="hidden lg:block">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onChange={(category) => setSelectedCategory(category)}
                  categoryCounts={categoryCounts}
                />
              </div>

              {/* Featured Products */}
              <h5 className="text-2xl text-regularColor font-normal">
                {featuredProducts.heading}
              </h5>
              <div>
                {featuredProducts.colums.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-5 flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-[62px] h-[62px] rounded-xl"
                    />
                    <div>
                      <p className="text-regularColor text-base font-bold">
                        {item.name}
                      </p>
                      <p className="flex gap-2 text-pink font-bold">
                        <span className="text-base line-through text-pColor font-normal">
                          {item.oldPrice}
                        </span>
                        {item.newPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Grid & Controls */}
            <div className="col-span-1 lg:col-span-9 space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                {/* View Modes */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`${
                      viewMode === "grid" ? "text-pink" : "text-pColor"
                    } w-11 h-11 rounded-md bg-gray-100 flex items-center justify-center`}
                  >
                    <Grid />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`${
                      viewMode === "list" ? "text-pink" : "text-pColor"
                    } w-11 h-11 rounded-md bg-gray-100 flex items-center justify-center`}
                  >
                    <List />
                  </button>
                </div>

                {/* Sorting Dropdown */}
                <div
                  className="relative border border-pColor rounded-full w-full md:w-[180px] h-[45px] flex justify-center items-center mx-auto md:mx-0"
                  ref={dropdownRef}
                >
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    {sort}
                    <IoCaretDownSharp
                      className={`transition duration-300 ease-in-out ${
                        openDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {openDropdown && (
                    <ul className="absolute top-12 left-0 w-full backdrop-blur-md rounded-lg shadow-lg overflow-hidden z-10 border border-pColor">
                      {sortingData.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(item)}
                          className="py-3 px-4 cursor-pointer hover:bg-pink text-black/90 text-center text-sm hover:text-white transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Product Cards */}
              <div
                className={`${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }`}
              >
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                      sort={sort}
                      categoryCounts={categoryCounts}
                      handleAddToCart={handleAddToCart}
                    />
                  ))
                ) : (
                  <p className="col-span-full text-center text-lg text-pColor font-medium py-10">
                    No Products Found
                  </p>
                )}
              </div>

              {/* Pagination */}
              {currentProducts.length > 0 && (
                <Pagination
                  totalPage={totalPage}
                  currentPage={currentPage}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
