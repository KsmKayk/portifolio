import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="py-10 mb-12 flex justify-between ">
      <h1 className="text-xl">Kayk Mascarenhas</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-md ml-8"
            href="#"
          >
            Resumo
          </a>
        </li>
      </ul>
    </nav>
  );
}
