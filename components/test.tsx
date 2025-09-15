import * as React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SortBy from "./SortBy";
import type { Product } from "../models/types";

interface PaginationProps {
  products: Product[];
}

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = React.useState(8); // default for SSR (mobile)

  React.useEffect(() => {
    const checkScreen = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setItemsPerPage(9); // md and up
      } else {
        setItemsPerPage(8); // mobile
      }
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return itemsPerPage;
}

export default function ProductPagination({products,}: PaginationProps): React.ReactElement {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = useItemsPerPage();
  const [sortBy, setSortBy] = React.useState<"Name" | "Price" | "Brand">(
    "Name"
  );

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // ✅ Sort products before paginating
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Name") return a.name.localeCompare(b.name);
    if (sortBy === "Price") return a.price - b.price;
    if (sortBy === "Brand") return a.description!.localeCompare(b.description!); // assuming "Brand" is inside desc for now
    return 0;
  });

  // Slice products for current page
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  // ⬆️ Scroll to top whenever page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, sortBy]);

  return (
    <div className="md:w-full">
      <div className="mb-1 flex items-center justify-end gap-2 text-xs sm:text-sm">
        <p className="-mt-20 md:mt-0">Sort by:</p>
        {/* ✅ Use SortBy component */}
        <SortBy value={sortBy} onChange={setSortBy} />
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-10 md:grid-cols-3 md:gap-x-7.5">
        {currentItems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="mt-10 flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <ChevronLeft />
        </Button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`size-9 ${
              currentPage === index + 1
                ? "bg-warmBlack text-background dark:text-foreground"
                : "bg-background hover:ring"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <Button
          variant="ghost"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
