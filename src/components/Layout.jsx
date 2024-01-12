export default function Layout({ children, className }) {
  return (
    <section className={`${className} w-full min-h-screen p-32`}>
      {children}
    </section>
  );
}
