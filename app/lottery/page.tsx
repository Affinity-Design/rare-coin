import Link from "next/link";

export default function LotteryPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-headline font-medium text-gradient mb-4">
            Lottery
          </h1>
          <p className="text-text-tertiary text-lg">
            Enter for a chance to win the RARE jackpot.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-12 mb-12">
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue mx-auto mb-6 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0 0v6h6m0 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-text-primary mb-4">
              Lottery System Coming Soon
            </h2>
            <p className="text-text-tertiary text-lg max-w-md mx-auto mb-8">
              We're building a new lottery system with fair draws, transparent results,
              and bigger jackpots from unclaimed tokens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 border border-glass-subtle rounded-2xl text-center">
                <div className="text-4xl font-medium text-gold-primary mb-2">
                  Current Jackpot
                </div>
                <div className="text-2xl text-white">
                  0 RARE
                </div>
              </div>
              <div className="p-6 border border-glass-subtle rounded-2xl text-center">
                <h3 className="text-lg font-medium text-gold-primary mb-2">
                  Next Draw
                </h3>
                <div className="text-3xl font-medium text-white mb-1">
                  --:--:--
                </div>
                <p className="text-sm text-text-tertiary">
                  Scheduled draw time
                </p>
              </div>
              <div className="p-6 border border-glass-subtle rounded-2xl text-center">
                <h3 className="text-lg font-medium text-gold-primary mb-2">
                  Total Entries
                </h3>
                <div className="text-3xl font-medium text-white mb-1">
                  0
                </div>
                <p className="text-sm text-text-tertiary">
                  Active tickets in pool
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-primary" />
                <span>Fair Draws</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-pink" />
                <span>Transparent Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Automatic Entry</span>
              </div>
            </div>
            <p className="text-text-secondary mb-8">
              The upgraded lottery system will feature:
            </p>
            <ul className="text-left text-text-tertiary space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Automatic entry from claim pool participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Fair random draws with verifiable randomness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Transparent winner announcements on-chain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Jackpot grows with unclaimed distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Multiple ticket tiers with different odds</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <a href="/" className="text-text-secondary hover:text-gold-primary transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
