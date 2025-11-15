import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          University Landing Pages
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Explore two premium university landing pages with complete enrollment management system
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/university-a">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Elite Institute of Technology
            </Button>
          </Link>
          <Link href="/university-b">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
              Horizon Global University
            </Button>
          </Link>
        </div>

        <div className="mt-16 p-8 bg-secondary rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Features Included</h2>
          <ul className="text-left space-y-3 text-muted-foreground">
            <li>✓ Hero sections with university branding</li>
            <li>✓ Comprehensive course information</li>
            <li>✓ Interactive fees modal with dynamic API data</li>
            <li>✓ Full validation lead capture form</li>
            <li>✓ Campus facilities showcase</li>
            <li>✓ Mobile-responsive design</li>
            <li>✓ Ready for Pipedream integration</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
