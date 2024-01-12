export default function Button({ title, className }) {
  return (
    <button
      className={`${className} basis-1/4 text-xl p-2 font-semibold capitalize text-slate-800 bg-slate-200 rounded-lg border-2 hover:border-slate-100 hover:bg-slate-900 hover:text-slate-200 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]`}
    >
      {title}
    </button>
  );
}
