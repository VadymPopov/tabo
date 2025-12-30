export default function Footer() {
  return (
    <footer className=" bg-black py-10 text-center text-gray-500 border-t border-gray-800 space-y-8">
      <div className="text-white"></div>
      <p>
        © {new Date().getFullYear()} Toronto Association of Basketball
        Officials.
      </p>
    </footer>
  );
}
