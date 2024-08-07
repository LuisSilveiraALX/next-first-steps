import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'LS', 'información', '...'],
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hola Mundo</span>
            <span className="text-7xl">About Page</span>
        </main>
    )
}