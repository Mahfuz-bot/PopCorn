/* eslint-disable react/prop-types */
export default function BodyCard({ children, className }) {
  return (
    <section
      className={`w-1/2 h-[560px] p-4 mt-4  bg-slate-900 lg:w-1/3 rounded-xl ${className}`}
    >
      {children}
    </section>
  );
}
