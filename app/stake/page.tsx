import Link from "next/link";

export default function StakePage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-headline font-medium text-gradient mb-4">
            Stake Your RARE
          </h1>
          <p className="text-text-tertiary text-lg">
            Earn rewards by staking your RARE tokens.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-12 mb-12">
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-gold-light mx-auto mb-6 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3m0 8c.667 0 1.333-.021 1.988-.066L20 15l-2.5 2.5c-.66-.045-1.321-.066-1.657 0-3 .895-3 2s1.343 3 3 3 .895 0 3-.895 3-2-.895 3-3-3-3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-text-primary mb-4">
              Staking Interface Coming Soon
            </h2>
            <p className="text-text-tertiary text-lg max-w-md mx-auto mb-8">
              We're building a new staking system with multiple pools,
              competitive APY, and automatic rewards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border border-glass-subtle rounded-2xl">
                <h3 className="text-lg font-medium text-gold-primary mb-3">
                  Current APY
                </h3>
                <div className="text-4xl font-medium text-white mb-2">
                  --%
                </div>
                <p className="text-sm text-text-tertiary">
                  Calculated based on current pool rewards
                </p>
              </div>
              <div className="p-6 border border-glass-subtle rounded-2xl">
                <h3 className="text-lg font-medium text-gold-primary mb-3">
                  Total Staked
                </h3>
                <div className="text-4xl font-medium text-white mb-2">
                  0 RARE
                </div>
                <p className="text-sm text-text-tertiary">
                  Global staking across all pools
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-pink" />
                <span>Multiple Stake Pools</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Automatic Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-purple" />
                <span>Compound Interest</span>
              </div>
            </div>
            <p className="text-text-secondary mb-8">
              The upgraded staking interface will feature:
            </p>
            <ul className="text-left text-text-tertiary space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Multiple staking pools with different lock periods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Competitive APY based on pool participation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Automatic reward distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Flexible unstaking with optional rewards lock</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Real-time APY tracking and pool statistics</span>
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
