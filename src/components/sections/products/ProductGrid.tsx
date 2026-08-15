import { useMemo, useState } from "react";
import {
  Search,
  X,
  ChevronDown,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  image?: string;
  category?: string;
  subcategory?: string;
  type?: string;
  href?: string;
}

interface ProductGridProps {
  title: string;
  products: readonly Product[];
}

/* =========================================================
   URL TYPE → PRODUCT SUBCATEGORY
========================================================= */

const TYPE_TO_SUBCATEGORY: Record<string, string> = {
  /* Pipes & Fittings */
  pvc: "PVC Pipes",
  cpvc: "CPVC Pipes",
  upvc: "UPVC Pipes",
  fittings: "Pipe Fittings",

  /* Hoses & Fittings */
  garden: "Garden Hoses",
  industrial: "Industrial Hoses",
  agricultural: "Agricultural Hoses",
  flexible: "Flexible Hoses",
  accessories: "Hose Accessories",

  /* Valves & Cocks */
  ball: "Ball Valves",
  gate: "Gate Valves",
  control: "Control Valves",
  check: "Check Valves",
  bib: "Bib Cocks",

  /* Allied Products */
  sealants: "Sealants",
  solvent: "Solvent Cement",
  adhesives: "Adhesives",
  plumbing: "Plumbing Accessories",

  /* Bath & Sanitary */
  bath: "Bath Fittings",
  sanitary: "Sanitary Ware",
  faucets: "Faucets & Taps",
};

/* =========================================================
   PRODUCT GRID
========================================================= */

export function ProductGrid({
  title,
  products,
}: ProductGridProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [subcategory, setSubcategory] = useState("All");
  const [sort, setSort] = useState("default");

  /* =========================================================
     URL TYPE
  ========================================================= */

  const urlType = searchParams.get("type") || "";

  const urlSubcategory =
    TYPE_TO_SUBCATEGORY[urlType] || "";

  /* =========================================================
     CURRENT CATEGORY
  ========================================================= */

  const currentCategory = products[0]?.category;

  /* =========================================================
     SUBCATEGORIES
  ========================================================= */

  const currentSubcategories = useMemo(() => {
    const categories = products
      .map((product) => product.subcategory)
      .filter(
        (value): value is string =>
          Boolean(value)
      );

    return [...new Set(categories)];
  }, [products]);

  /* =========================================================
     ACTIVE SUBCATEGORY
  ========================================================= */

  const activeSubcategory =
    urlSubcategory || subcategory;

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* URL FILTER */

    if (urlSubcategory) {
      result = result.filter(
        (product) =>
          product.subcategory ===
          urlSubcategory
      );
    }

    /* LOCAL FILTER */

    if (
      !urlSubcategory &&
      subcategory !== "All"
    ) {
      result = result.filter(
        (product) =>
          product.subcategory ===
          subcategory
      );
    }

    /* SEARCH */

    const query = search
      .trim()
      .toLowerCase();

    if (query) {
      result = result.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(query) ||
          product.category
            ?.toLowerCase()
            .includes(query) ||
          product.subcategory
            ?.toLowerCase()
            .includes(query)
        );
      });
    }

    /* SORT */

    if (sort === "az") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "za") {
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return result;
  }, [
    products,
    search,
    subcategory,
    sort,
    urlSubcategory,
  ]);

  /* =========================================================
     CHANGE SUBCATEGORY
  ========================================================= */

  const handleSubcategoryChange = (
    value: string
  ) => {
    setSubcategory(value);

    const params = new URLSearchParams(
      searchParams
    );

    params.delete("type");

    setSearchParams(params);
  };

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearch("");
    setSubcategory("All");
    setSort("default");

    const params = new URLSearchParams(
      searchParams
    );

    params.delete("type");

    setSearchParams(params);
  };

  /* =========================================================
     HAS FILTERS
  ========================================================= */

  const hasFilters =
    search.trim() !== "" ||
    subcategory !== "All" ||
    Boolean(urlType) ||
    sort !== "default";

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="container-px">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-6 sm:mb-7">
          <h2
            className="
              text-xl
              font-bold
              leading-tight
              text-slate-900
              sm:text-2xl
              lg:text-3xl
            "
          >
            {urlSubcategory
              ? urlSubcategory
              : title}
          </h2>

          <p
            className="
              mt-1.5
              text-sm
              leading-6
              text-slate-500
              sm:text-[15px]
            "
          >
            {urlSubcategory
              ? `Browse all ${urlSubcategory.toLowerCase()} products.`
              : `Browse our complete range of ${
                  currentCategory?.toLowerCase() ||
                  "products"
                }.`}
          </p>
        </div>

        {/* ===================================================
            CATEGORY / SUBCATEGORY
        =================================================== */}

        {currentCategory && (
          <div className="mb-5">

            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-brand-600
                  "
                >
                  Category
                </p>

                <h3
                  className="
                    mt-0.5
                    text-base
                    font-semibold
                    text-slate-900
                    sm:text-lg
                  "
                >
                  {currentCategory}
                </h3>
              </div>

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-slate-500
                "
              >
                {products.length} Products
              </span>
            </div>

            <div
              className="
                overflow-x-auto
                pb-2
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              <div className="flex min-w-max gap-2">

                {/* ALL */}

                <button
                  type="button"
                  onClick={() =>
                    handleSubcategoryChange(
                      "All"
                    )
                  }
                  className={`
                    whitespace-nowrap
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-200
                    sm:text-sm
                    ${
                      !urlSubcategory &&
                      subcategory === "All"
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
                    }
                  `}
                >
                  All
                </button>

                {/* SUBCATEGORIES */}

                {currentSubcategories.map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        handleSubcategoryChange(
                          item
                        )
                      }
                      className={`
                        whitespace-nowrap
                        rounded-full
                        border
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        transition-all
                        duration-200
                        sm:text-sm
                        ${
                          activeSubcategory ===
                          item
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
                        }
                      `}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            SEARCH / SORT
        =================================================== */}

        <div
          className="
            mb-6
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-3
            sm:p-4
          "
        >
          <div
            className="
              grid
              gap-3
              md:grid-cols-[1fr_auto_auto]
              md:items-center
            "
          >

            {/* SEARCH */}

            <div className="relative">
              <Search
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  size-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search products..."
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  pl-9
                  pr-3
                  text-sm
                  outline-none
                  focus:border-brand-500
                  focus:ring-2
                  focus:ring-brand-500/10
                "
              />
            </div>

            {/* SORT */}

            <div className="relative">
              <select
                value={sort}
                onChange={(event) =>
                  setSort(
                    event.target.value
                  )
                }
                className="
                  h-10
                  w-full
                  appearance-none
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  pr-9
                  text-sm
                  text-slate-700
                  outline-none
                  focus:border-brand-500
                  md:w-[160px]
                "
              >
                <option value="default">
                  Sort: Default
                </option>

                <option value="az">
                  Name: A–Z
                </option>

                <option value="za">
                  Name: Z–A
                </option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  size-4
                  -translate-y-1/2
                  text-slate-400
                "
              />
            </div>

            {/* CLEAR */}

            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasFilters}
              className={`
                inline-flex
                h-10
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                px-4
                text-sm
                font-medium
                ${
                  hasFilters
                    ? "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                }
              `}
            >
              <X className="size-4" />
              Clear
            </button>
          </div>

          {/* RESULT COUNT */}

          <div
            className="
              mt-3
              border-t
              border-slate-200
              pt-3
              text-xs
              text-slate-500
            "
          >
            Showing{" "}
            <strong className="text-slate-900">
              {filteredProducts.length}
            </strong>{" "}
            of{" "}
            <strong className="text-slate-900">
              {products.length}
            </strong>{" "}
            products

            {(urlSubcategory ||
              subcategory !== "All") && (
              <>
                {" · "}
                Filter:{" "}
                <strong className="text-brand-600">
                  {activeSubcategory}
                </strong>
              </>
            )}
          </div>
        </div>

        {/* ===================================================
            PRODUCT GRID
        =================================================== */}

        {filteredProducts.length > 0 ? (
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              sm:gap-4
              lg:grid-cols-4
              lg:gap-5
              xl:grid-cols-5
            "
          >
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  href={product.href}
                  subcategory={
                    product.subcategory
                  }
                />
              )
            )}
          </div>
        ) : (
          <div
            className="
              flex
              min-h-[220px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-slate-300
              bg-slate-50
              px-6
              text-center
            "
          >
            <Search className="mb-3 size-6 text-slate-400" />

            <h3 className="font-semibold text-slate-900">
              No products found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try another product name or filter.
            </p>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-4
                  text-sm
                  font-semibold
                  text-brand-600
                  hover:text-brand-700
                "
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}