export default function ClaimPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-headline font-medium text-gradient mb-4">
            Claim Your Share
          </h1>
          <p className="text-text-tertiary text-lg">
            Stake to claim. Bot-proof distribution on Base Chain.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-12 mb-12">
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-gold-light mx-auto mb-6 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 0h6m0 0v6h6m0 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-text-primary mb-4">
              Claim Interface Coming Soon
            </h2>
            <p className="text-text-tertiary text-lg max-w-md mx-auto mb-8">
              We're upgrading Rare Coin with a new luxury glass theme and implementing
              bot-proof claiming with stake-to-claim protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-primary" />
                <span>Stake-to-Claim System</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Cloudflare Turnstile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-purple" />
                <span>Dual Pool Distribution</span>
              </div>
            </div>
            <p className="text-text-secondary mb-8">
              The upgraded claiming interface will feature:
            </p>
            <ul className="text-left text-text-tertiary space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Stake-to-Claim protection against bot farming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Cloudflare Turnstile CAPTCHA verification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Dual pool system for fair distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>24-hour rate limiting on registrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Stake returned after successful claim</span>
              </li>
            </ul>
            <div className="mt-12 p-6 border border-glass-subtle rounded-2xl">
              <p className="text-sm text-text-tertiary mb-4">
                <strong>Status:</strong> Contract upgrades in progress by DevOps Agent (GLM5)
              </p>
              <p className="text-sm text-text-tertiary">
                <strong>Next Steps:</strong>
              </p>
              <ol className="text-sm text-text-secondary space-y-2 mt-2 list-decimal">
                <li>1. Contract security fixes (reentrancy, rate limiting)</li>
                <li>2. Stake-to-Claim implementation</li>
                <li>3. Deployment to Base Chain testnet</li>
                <li>4. Security audit</li>
                <li>5. Mainnet deployment</li>
              </ol>
            </div>
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
