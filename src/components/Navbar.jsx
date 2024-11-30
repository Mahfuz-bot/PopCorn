/* eslint-disable react/prop-types */
export default function Navbar({ children }) {
  return (
    <header className="flex items-center justify-between p-2 m-2 text-2xl bg-purple-900  rounded-xl">
      {children}
    </header>
  );
}
