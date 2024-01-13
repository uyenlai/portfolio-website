export default function Button({ title, className }) {
  return (
    <button
      className={`${className} dark:text-black dark:bg-white dark:border-2 dark:border-solid dark:border-black dark:hover:bg-black dark:hover:text-white basis-1/4 text-xl p-2 font-semibold capitalize bg-black text-white rounded-lg border-2 hover:border-black hover:text-black hover:bg-white shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]`}
    >
      {title}
    </button>
  );
}
