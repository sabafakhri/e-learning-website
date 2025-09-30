import AllBook from "@/components/AllBook";
import NewArrivedBooks from "@/components/NewArrivedBooks";
import PopularBooks from "@/components/PopularBooks";

export default function Cart() {



     
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8 max-w-7xl mx-auto px-2 md:px-6 py-8">
      
      <div className="flex-1 w-full order-1 md:order-2">
        <AllBook />
      </div>

      <div className="md:w-[320px] w-full flex flex-col gap-4 shrink-0 order-2 md:order-1">
        <PopularBooks />
        <NewArrivedBooks />       
      </div>
    </div>
  );
}
