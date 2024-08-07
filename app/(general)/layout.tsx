import { Navbar } from "@/components/navbar";


export default function  GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center p-24">
       { children }
    </main>
    </>
  );
}