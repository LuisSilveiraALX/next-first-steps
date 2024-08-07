import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Precios servicios',
    keywords: ['Pricing Page', 'LS', 'información', '...'],
   };

export default function PricingPage() {
    return (
        <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        <span className="text-7xl">Pricing Page</span>
    </main>
    )
}