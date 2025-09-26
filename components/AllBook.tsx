
import Image from "next/image";
import BookFilterBar from "./ShopHeader";

const books = [
  { img: "/book1.png", title: "The Three Musketeers", price: "$40.00" },
  { img: "/book2.png", title: "The Three Musketeers", price: "$40.00" },
  { img: "/book3.png", title: "The Three Musketeers", price: "$40.00" },
  { img: "/book4.png", title: "The Three Musketeers", price: "$40.00" },
  { img: "/book5.png", title: "The Three Musketeers", price: "$40.00" },
  { img: "/book2.png", title: "The Three Musketeers", price: "$40.00" },
];

const AllBook = () => (
  <section className="bg-[var(--color-background)] min-h-[1000px] p-4">
    {/* Search & Sort
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      <div className="flex items-center rounded-lg px-3 py-2 shadow-sm">
        <input
          className="flex-1 outline-none bg-transparent text-[var(--color-title)] placeholder-[var(--color-gray-400)] text-base"
          placeholder="Search Class, Course"
        />
        <button className="bg-[var(--color-purple-900)] rounded-lg p-2 ml-2">
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center  border border-t-neutral-600">
        <span className="text-[var(--color-gray-400)] text-base mr-1">
          Sort by:
        </span>
        <select className="text-[var(--color-title)] font-semibold bg-transparent outline-none">
          <option value="latest">Latest</option>
        </select>
      </div>
    </div> */}
    <BookFilterBar/>

    {/* Book List */}
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-4">
      {books.map((book, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-sm dark:bg-[var(--secondary)] bg-white flex flex-col"
        >
          {/* Book Image */}
          <div className="relative w-full h-64">
            <Image
              src={book.img}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="p-4 flex flex-col gap-2">
            <span className="text-[var(--color-title)] font-bold text-base">
              {book.title}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-orange-900)] font-bold text-lg">
                {book.price}
              </span>
              <span className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="var(--color-yellow-500)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="w-8 h-8 rounded-lg bg-[var(--color-purple-900)] text-white flex items-center justify-center font-bold">
        &lt;
      </button>
      <span className="w-8 h-8 rounded-lg  text-[var(--color-title)] flex items-center justify-center font-bold">
        5
      </span>
      <span className="text-[var(--color-gray-400)] text-base">of 80</span>
      <button className="w-8 h-8 rounded-lg bg-[var(--color-purple-900)] text-white flex items-center justify-center font-bold">
        &gt;
      </button>
    </div>
  </section>
);

export default AllBook;

