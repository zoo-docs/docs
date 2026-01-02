import Link from 'next/link';
import { 
  CreditCardIcon, 
  UsersIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  SettingsIcon,
  ArchiveIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  PlusIcon,
  SendIcon,
  PaperclipIcon,
} from 'lucide-react';

// Component showcase cards
function PaymentMethodCard() {
  return (
    <div className="p-6 rounded-xl border border-fd-border bg-fd-card space-y-4">
      <div>
        <h3 className="font-semibold">Payment Method</h3>
        <p className="text-sm text-fd-muted-foreground">All transactions are secure and encrypted</p>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Name on Card</label>
          <div className="mt-1 flex items-center rounded-lg border border-fd-border bg-fd-secondary px-3 py-2">
            <span className="text-sm">John Doe</span>
            <span className="ml-auto text-fd-primary">...</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium">Card Number</label>
            <div className="mt-1 rounded-lg border border-fd-border bg-fd-secondary px-3 py-2">
              <span className="text-sm text-fd-muted-foreground">1234 5678 9012 3456</span>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">CVV</label>
            <div className="mt-1 rounded-lg border border-fd-border bg-fd-secondary px-3 py-2">
              <span className="text-sm text-fd-muted-foreground">123</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-fd-muted-foreground">Enter your 16-digit number.</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium">Month</label>
            <div className="mt-1 flex items-center justify-between rounded-lg border border-fd-border bg-fd-secondary px-3 py-2">
              <span className="text-sm text-fd-muted-foreground">MM</span>
              <ChevronRightIcon className="size-4 rotate-90 text-fd-muted-foreground" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Year</label>
            <div className="mt-1 flex items-center justify-between rounded-lg border border-fd-border bg-fd-secondary px-3 py-2">
              <span className="text-sm text-fd-muted-foreground">YYYY</span>
              <ChevronRightIcon className="size-4 rotate-90 text-fd-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="pt-2 font-semibold">Billing Address</div>
      </div>
    </div>
  );
}

function TeamMembersCard() {
  return (
    <div className="p-6 rounded-xl border border-fd-border bg-fd-card space-y-4">
      <div className="flex justify-center -space-x-2">
        <div className="size-10 rounded-full bg-fd-muted border-2 border-fd-card" />
        <div className="size-10 rounded-full bg-fd-muted border-2 border-fd-card" />
        <div className="size-10 rounded-full bg-fd-primary border-2 border-fd-card flex items-center justify-center">
          <span className="text-xs text-fd-primary-foreground">Y</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold">No Team Members</h3>
        <p className="text-sm text-fd-muted-foreground">Invite your team to collaborate on this project.</p>
      </div>
      <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-fd-border px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors">
        <PlusIcon className="size-4" />
        Invite Members
      </button>
      <div className="flex justify-center gap-2 pt-2">
        <span className="flex items-center gap-1 text-xs text-fd-muted-foreground">
          <span className="size-2 rounded-full bg-green-500" /> Syncing
        </span>
        <span className="flex items-center gap-1 text-xs text-fd-muted-foreground">
          <span className="size-2 rounded-full bg-yellow-500" /> Updating
        </span>
        <span className="flex items-center gap-1 text-xs text-fd-muted-foreground">
          <span className="size-2 rounded-full bg-blue-500" /> Loading
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-fd-border px-3 py-2">
        <PlusIcon className="size-4 text-fd-muted-foreground" />
        <span className="flex-1 text-sm text-fd-muted-foreground">Send a message...</span>
        <SendIcon className="size-4 text-fd-muted-foreground" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <p className="text-xs text-fd-muted-foreground">Set your budget range ($200 - 800).</p>
        <div className="mt-2 h-1 rounded-full bg-fd-muted">
          <div className="h-1 w-1/2 rounded-full bg-fd-primary" />
        </div>
      </div>
    </div>
  );
}

function SecurityCard() {
  return (
    <div className="p-4 rounded-xl border border-fd-border bg-fd-card space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-fd-border px-3 py-2">
        <ShieldCheckIcon className="size-4 text-fd-muted-foreground" />
        <span className="text-sm">https://</span>
        <span className="ml-auto text-fd-muted-foreground">☆</span>
      </div>
      <div className="p-3 rounded-lg border border-fd-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Two-factor authentication</h4>
            <p className="text-xs text-fd-muted-foreground">Verify via email or phone number.</p>
          </div>
          <button className="px-3 py-1 text-sm rounded-md border border-fd-border hover:bg-fd-accent transition-colors">
            Enable
          </button>
        </div>
      </div>
      <div className="p-3 rounded-lg border border-fd-border flex items-center gap-3">
        <CheckCircleIcon className="size-5 text-green-500" />
        <span className="text-sm">Your profile has been verified.</span>
        <ChevronRightIcon className="size-4 ml-auto" />
      </div>
      <div className="pt-2 text-center text-sm text-fd-muted-foreground">Appearance Settings</div>
      <div>
        <h4 className="text-sm font-medium">Compute Environment</h4>
        <p className="text-xs text-fd-muted-foreground">Select the compute environment for your cluster.</p>
        <div className="mt-2 p-3 rounded-lg border border-fd-primary bg-fd-accent">
          <div className="flex items-center justify-between">
            <span className="font-medium">Kubernetes</span>
            <span className="size-2 rounded-full bg-fd-primary" />
          </div>
          <p className="text-xs text-fd-muted-foreground">Run GPU workloads on a K8s configured cluster. This is the default.</p>
        </div>
      </div>
    </div>
  );
}

function AIContextCard() {
  return (
    <div className="p-4 rounded-xl border border-fd-border bg-fd-card space-y-3">
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-fd-border text-sm hover:bg-fd-accent transition-colors">
        <PlusIcon className="size-4" />
        Add context
      </button>
      <div className="rounded-lg border border-fd-border p-3">
        <span className="text-sm text-fd-muted-foreground">Ask, search, or make anything...</span>
        <div className="flex items-center gap-2 mt-4">
          <PaperclipIcon className="size-4 text-fd-muted-foreground" />
          <span className="text-xs text-fd-muted-foreground">Auto</span>
          <SettingsIcon className="size-4 text-fd-muted-foreground" />
          <span className="text-xs text-fd-muted-foreground">All Sources</span>
          <span className="ml-auto size-6 rounded-full bg-fd-primary flex items-center justify-center">
            <ChevronRightIcon className="size-3 text-fd-primary-foreground -rotate-90" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 text-xs rounded-md border border-fd-border hover:bg-fd-accent transition-colors">
          <ChevronRightIcon className="size-3 rotate-180 inline" />
        </button>
        <button className="px-3 py-1 text-xs rounded-md bg-fd-secondary">Archive</button>
        <button className="px-3 py-1 text-xs rounded-md bg-fd-secondary">Report</button>
        <button className="px-3 py-1 text-xs rounded-md bg-fd-secondary">Snooze</button>
        <button className="px-2 py-1 text-xs rounded-md border border-fd-border">...</button>
      </div>
      <div className="p-3 rounded-lg bg-fd-primary text-fd-primary-foreground flex items-center gap-2">
        <CheckCircleIcon className="size-4" />
        <span className="text-sm">I agree to the terms and conditions</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-3 py-1 rounded-md border border-fd-border">1</button>
        <button className="px-3 py-1 rounded-md border border-fd-border">2</button>
        <button className="px-3 py-1 rounded-md border border-fd-border">3</button>
        <button className="px-2 py-1 rounded-md border border-fd-border"><ChevronRightIcon className="size-3 rotate-180" /></button>
        <button className="px-2 py-1 rounded-md border border-fd-border"><ChevronRightIcon className="size-3" /></button>
        <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded-md border border-fd-border">
          <SparklesIcon className="size-3" /> Copilot
          <ChevronRightIcon className="size-3 rotate-90" />
        </button>
      </div>
      <div className="pt-2">
        <h4 className="text-sm font-medium">How did you hear about us?</h4>
        <p className="text-xs text-fd-muted-foreground">Select the option that best describes how you...</p>
        <div className="flex gap-2 mt-2">
          <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-fd-primary text-fd-primary-foreground">
            <CheckCircleIcon className="size-3" /> Social Media
          </button>
          <button className="px-3 py-1 text-xs rounded-full border border-fd-border">
            Search Engine
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <div className="border-b border-fd-border">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground">
            <span className="size-2 rounded-full bg-blue-500" />
            npx zoo create <ChevronRightIcon className="size-3 inline" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Foundation for your Design System
          </h1>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            A set of beautifully designed components that you can customize, extend,
            and build on. Start here then make it your own. Open Source. Open Code.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-fd-primary text-fd-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-fd-primary/90"
            >
              <PlusIcon className="size-4" />
              New Project
            </Link>
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center rounded-md border border-fd-border bg-fd-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-fd-accent"
            >
              View Components
            </Link>
          </div>
        </div>
      </div>

      {/* Component Showcase */}
      <div className="max-w-6xl mx-auto w-full px-4 py-12">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-6 text-sm">
            <button className="font-medium text-fd-foreground border-b-2 border-fd-primary pb-2">Examples</button>
            <button className="text-fd-muted-foreground hover:text-fd-foreground pb-2">Dashboard</button>
            <button className="text-fd-muted-foreground hover:text-fd-foreground pb-2">Tasks</button>
            <button className="text-fd-muted-foreground hover:text-fd-foreground pb-2">Playground</button>
            <button className="text-fd-muted-foreground hover:text-fd-foreground pb-2">Authentication</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-fd-muted-foreground">Theme:</span>
            <button className="px-3 py-1 text-sm rounded-md border border-fd-border">
              Neutral <ChevronRightIcon className="size-3 inline rotate-90" />
            </button>
            <button className="p-2 rounded-md border border-fd-border">
              <ArchiveIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PaymentMethodCard />
          <TeamMembersCard />
          <SecurityCard />
          <AIContextCard />
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-t border-fd-border">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="https://zoo.network"
              className="group p-6 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-fd-primary transition-colors">Zoo Network</h3>
              <p className="text-sm text-fd-muted-foreground">
                Main website and network information
              </p>
            </Link>
            <Link
              href="https://gym.zoo.ngo"
              className="group p-6 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-fd-primary transition-colors">Gym</h3>
              <p className="text-sm text-fd-muted-foreground">
                Decentralized AI training platform
              </p>
            </Link>
            <Link
              href="https://zoo.vote"
              className="group p-6 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-fd-primary transition-colors">Vote</h3>
              <p className="text-sm text-fd-muted-foreground">
                Participate in governance decisions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
