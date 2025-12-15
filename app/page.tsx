import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Zoo Labs Foundation
          </h1>
          <p className="text-xl text-fd-muted-foreground">
            Democratizing AI through decentralized training and open source frontier models
          </p>
        </div>
        
        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
          Build and train AI models collaboratively with our decentralized infrastructure,
          DSO protocol, and the Zen model family.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/zooai"
            className="inline-flex items-center justify-center rounded-md border border-fd-border bg-fd-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            View on GitHub
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Learn</h3>
            <p className="text-sm text-fd-muted-foreground">
              Understand DSO, Proof of AI, and decentralized training.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Build</h3>
            <p className="text-sm text-fd-muted-foreground">
              Train models with Gym SDK and integrate with our APIs.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Research</h3>
            <p className="text-sm text-fd-muted-foreground">
              Explore Zen models, ZIPs, and academic papers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
