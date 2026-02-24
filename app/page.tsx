import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Glass Card */}
          <div className="glass-card p-12 md:p-16 animate-fade-in">
            <div className="text-center">
              {/* Logo */}
              <div className="mb-8 animate-float">
                <div className="inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gold-primary to-gold-light flex items-center justify-center shadow-glow">
                    <span className="text-4xl md:text-5xl font-medium text-black">R</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-headline font-medium text-gradient mb-6">
                Rare Coin
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Bot-Proof Claiming. Real Utility. On Base Chain.
              </p>

              {/* Description */}
              <p className="text-base text-text-tertiary mb-12 max-w-lg mx-auto">
                Fair distribution with stake-to-claim, staking rewards, lottery, and AI trading bot.
              </p>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/claim"
                  className="btn-glass inline-block text-center"
                >
                  Start Claiming
                </Link>
                <Link
                  href="/stake"
                  className="btn-ghost inline-block text-center"
                >
                  Stake RARE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent-pink to-accent-cyan opacity-10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gold-primary to-gold-light opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue opacity-10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-gradient mb-4">
            Built for Fairness
          </h2>
          <p className="text-text-tertiary text-center mb-16 max-w-2xl mx-auto">
            Our dual-pool distribution system prevents bot farming and ensures
            every real user gets their fair share.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Claim Card */}
            <Link href="/claim" className="block">
              <div className="glass-card p-8 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-primary to-gold-dark mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0m-6 0l-6 6m6 2a9 9 0 0118 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-text-primary">
                  Claim
                </h3>
                <p className="text-text-tertiary text-base leading-relaxed">
                  Fair distribution with stake-to-claim protection.
                </p>
              </div>
            </Link>

            {/* Stake Card */}
            <Link href="/stake" className="block">
              <div className="glass-card p-8 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-accent-cyan mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3m0 8c.667 0 1.333-.021 1.988-.066L20 15l-2.5 2.5c-.66-.045-1.321-.066-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-text-primary">
                  Stake
                </h3>
                <p className="text-text-tertiary text-base leading-relaxed">
                  Earn rewards by staking your RARE tokens.
                </p>
              </div>
            </Link>

            {/* Lottery Card */}
            <Link href="/lottery" className="block">
              <div className="glass-card p-8 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-text-primary">
                  Lottery
                </h3>
                <p className="text-text-tertiary text-base leading-relaxed">
                  Enter for a chance to win the jackpot.
                </p>
              </div>
            </Link>

            {/* Swap Card */}
            <Link href="/swap" className="block">
              <div className="glass-card p-8 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-primary to-gold-light mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0h3.538l-1.338 2.967c-.15-.358-.477-.717-.896-.93l-2.383-1.895a1.33 1.33 0 1.896 1.937 2.692 3.937l1.895 2.383c.15.358.477.717.896.93.717l2.383 1.895-1.338 2.967c.15.358.477.717.896.937 2.692-3.937 1.937z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-text-primary">
                  Swap
                </h3>
                <p className="text-text-tertiary text-base leading-relaxed">
                  Trade RARE for ETH and other tokens.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-medium text-gold-primary mb-2">
                  Bot-Proof
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Stake-to-Claim System
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-medium text-gold-primary mb-2">
                  100M Supply
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Total RARE Tokens
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-medium text-gold-primary mb-2">
                  Base Chain
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  Fast & Affordable
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-glass-subtle">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-tertiary text-sm">
            © 2026 Rare Coin. Fair distribution on Base Chain.
          </div>
          <div className="flex gap-6">
            <a href="https://rare.fyi" className="text-text-secondary hover:text-gold-primary transition-colors">
              rare.fyi
            </a>
            <a href="https://x.com/RarifyApps" className="text-text-secondary hover:text-gold-primary transition-colors">
              @RarifyApps
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
