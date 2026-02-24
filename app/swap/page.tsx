import Link from "next/link";

export default function SwapPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-headline font-medium text-gradient mb-4">
            Swap
          </h1>
          <p className="text-text-tertiary text-lg">
            Trade RARE for ETH and other tokens on Base Chain.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-12 mb-12">
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-gold-light mx-auto mb-6 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0h3.538l-1.338 2.967c-.15-.358-.477-.717-.896-.93l-2.383-1.895a1.33 1.33 0 1.896 1.937 2.692 3.937l1.895 2.383c.15.358.477.717.896.93.717l2.383 1.895-1.338 2.967c.15.358.477.717.896.937 2.692-3.937 1.937z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-text-primary mb-4">
              Swap Interface Coming Soon
            </h2>
            <p className="text-text-tertiary text-lg max-w-md mx-auto mb-8">
              We're building a new DEX aggregator to swap RARE for ETH, USDC,
              and other Base Chain tokens at the best prices.
            </p>
            <div className="max-w-md mx-auto mb-12">
              {/* Mock Swap Interface */}
              <div className="border border-glass-subtle rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm text-text-tertiary">From</label>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-medium text-white">RARE</span>
                    <div className="text-sm text-text-muted">Balance: 0</div>
                  </div>
                </div>
                <div className="flex justify-center my-6">
                  <svg className="w-8 h-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0-14 14-14 0 7-7 14m0 0h14m0 0v14" />
                  </svg>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-sm text-text-tertiary">To</label>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-medium text-white">ETH</span>
                    <div className="text-sm text-text-muted">Balance: --</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 border border-glass-subtle rounded-xl">
                  <label className="text-xs text-text-muted mb-2 block">Amount</label>
                  <div className="text-2xl font-medium text-white">0</div>
                </div>
                <div className="p-4 border border-glass-subtle rounded-xl">
                  <label className="text-xs text-text-muted mb-2 block">Slippage</label>
                  <div className="text-2xl font-medium text-white">0.5%</div>
                </div>
              </div>
              <div className="text-sm text-text-tertiary space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Exchange Rate</span>
                  <span className="font-medium text-white">1 RARE = 0.00001 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Est.</span>
                  <span className="font-medium text-white">~$0.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Price Impact</span>
                  <span className="font-medium text-white">&lt;0.01%</span>
                </div>
              </div>
              <button className="w-full btn-glass">
                Swap (Coming Soon)
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border border-glass-subtle rounded-2xl text-center">
                <h3 className="text-lg font-medium text-gold-primary mb-3">
                  Base Chain
                </h3>
                <p className="text-sm text-text-tertiary mb-2">
                  Fast, low fees
                </p>
                <div className="text-sm text-text-muted">
                  Primary network for all Rare Coin operations
                </div>
              </div>
              <div className="p-6 border border-glass-subtle rounded-2xl text-center">
                <h3 className="text-lg font-medium text-gold-primary mb-3">
                  Best Rates
                </h3>
                <p className="text-sm text-text-tertiary mb-2">
                  DEX Aggregation
                </p>
                <div className="text-sm text-text-muted">
                  Compare prices across multiple sources
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-purple" />
                <span>Multi-Token Swap</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-pink" />
                <span>Price Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-primary" />
                <span>Low Slippage</span>
              </div>
            </div>
            <p className="text-text-secondary mb-8">
              The upgraded swap interface will feature:
            </p>
            <ul className="text-left text-text-tertiary space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Aggregate multiple DEXes (Uniswap, 1inch, Balancer)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Best price execution across all pools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Custom slippage tolerance settings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Real-time price feeds and gas estimation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-primary font-medium">•</span>
                <span>Support for RARE, ETH, USDC, and more Base tokens</span>
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
