export default function Footer() {
  return (
    <footer className=" bg-black py-10 text-center text-gray-500 border-t border-gray-800 space-y-8">
      <div className="text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <p className="text-white">
              Proudly serving basketball across Toronto for schools, colleges,
              and adult leagues since 1957*
            </p>
          </div>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} Toronto Association of Basketball
        Officials.
      </p>
    </footer>
  );
}
