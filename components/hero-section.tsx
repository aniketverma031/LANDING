import { Button } from '@/components/ui/button';

export interface HeroSectionProps {
  universityName: string;
  description: string;
  heroImage: string;
  onApplyClick: () => void;
  onFeesClick: () => void;
}

export default function HeroSection({
  universityName,
  description,
  heroImage,
  onApplyClick,
  onFeesClick,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${heroImage}')`,
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20 z-1" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {universityName}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onApplyClick}
                className="px-8 py-6 text-lg font-semibold"
              >
                Apply Now
              </Button>
              <Button
                onClick={onFeesClick}
                variant="outline"
                className="px-8 py-6 text-lg font-semibold"
              >
                Check Course-wise Fees
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={heroImage || "/placeholder.svg"}
              alt={universityName}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
