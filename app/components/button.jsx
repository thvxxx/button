import { GoArrowRight } from "react-icons/go";

export default function Button() {
  return (
    <div className="bg-red-500 rounded-lg font-semibold group sm:px-4 sm:py-2 px-2 py-3 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-white text-base xl:text-h6 2xl:text-h5 max-w-max">
      <span>SyntaxUI</span>
      <div className="relative overflow-hidden">
        <GoArrowRight
          className="group-hover:translate-x-5 transition-all ease-in-out-circ duration-500"
          size={18}
        />
        <GoArrowRight
          className="absolute top-0 -translate-x-5 group-hover:translate-x-0 transition-all duration-500 ease-in-out-circ"
          size={18}
        />
      </div>
    </div>
  );
}
