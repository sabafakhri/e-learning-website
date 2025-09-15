import Image from "next/image";

const books = [
  {
    img: "/book1.png",
    title: "The Three Musketeers, by Alexandre Dumas",
    price: "$39.00",
  },
  {
    img: "/book2.png",
    title: "The Three Musketeers, by Alexandre Dumas",
    price: "$39.00",
  },
  {
    img: "/book3.png",
    title: "The Three Musketeers, by Alexandre Dumas",
    price: "$39.00",
  },
];

const PopularBooks = () => (
  <section className="bg-[var(--color-background)] rounded-xl p-4 md:w-[320px] w-full">
    <h2 className="text-2xl font-bold text-[var(--color-title)] mb-4">Popular Books</h2>
    <div className="flex flex-col gap-4">
      {books.map((book, idx) => (
        <div key={idx} className="flex items-center bg-white rounded-lg p-4 gap-4 shadow-sm">
          <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-[var(--color-gray-100)] flex items-center justify-center">
            <Image src={book.img} alt={book.title} width={64} height={64} className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[var(--color-yellow-500)] text-lg">★</span>
              ))}
            </div>
            <div className="text-[var(--color-title)] font-semibold text-base leading-tight break-words overflow-hidden">{book.title}</div>
            <div className="text-[var(--color-orange-900)] font-bold text-lg mt-1">{book.price}</div>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="block text-[var(--color-purple-900)] text-base mt-4 font-medium">See More</a>
  </section>
);

export default PopularBooks;
