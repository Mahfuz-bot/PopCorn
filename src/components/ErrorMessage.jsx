/* eslint-disable react/prop-types */
export default function ErrorMessage({ message }) {
  return (
    <p className="p-[4.8rem] text-center font-bold">
      <span>⛔️</span> {message}
    </p>
  );
}
