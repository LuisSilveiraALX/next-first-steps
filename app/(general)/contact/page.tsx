import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Page de contact',
    keywords: ['Contact Page', 'LS', 'información', '...'],
   };

export default function ContactPage() {
    return (
    
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">Hola Mundo</span>
            <span className="text-7xl">Contact Page</span>
        </main>
    
    )
}