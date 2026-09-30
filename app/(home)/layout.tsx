import Navbar from "../components/navbar";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <section className="min-h-screen relative">
      <Navbar />
      {children}
    </section>
  );
}
