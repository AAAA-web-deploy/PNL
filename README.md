# PEPE NEEDS LIQUIDITY — $PNL

A responsive, static, single-page Ethereum meme-token website inspired by the general design language of BabyPepe (bright teal, oversized outlined bubble typography, floating stickers, thick cartoon borders and a chapter-by-chapter story).

## Launch / preview

- Open `index.html` in any modern browser, or serve the folder from a local HTTP server: `python -m http.server 8000` and visit `http://localhost:8000`.
- No build step, NPM modules, API keys, or wallet extensions are required.
- Deploy the contents of this folder as the root of any GitHub Pages repository (Settings → Pages → Deploy from a branch → root), or upload as static files to Netlify.
- Paths are relative, so `username.github.io/your-repo/` works without a basePath rewrite.

## Update after launch

1. `script.js`: replace `PNL.contractAddress: 'Coming Soon..'` with the verified contract address. The hero address updates automatically from `script.js`. Also update other prelaunch mentions in the chart/status sections after launch.
2. `script.js`: put the official `https://x.com/...` and `https://t.me/...` URLs in `PNL.socials.x` and `PNL.socials.telegram`.
3. Only after an actual verified Ethereum launch, replace prelaunch-only copy with accurate pair addresses and link to the genuine Uniswap/Etherscan/DEX Screener pages.
4. Only claim LP is **locked** after verifying the actual Uniswap V3 position, its locking contract/provider, the percentage and duration using on-chain evidence. Until then keep **LP Lock Planned**.
5. Change/remove prelaunch notes and the chart placeholder only once real, non-fabricated data is available.

## Files

- `index.html` — website content and accessible page structure
- `styles.css` — responsive styling, colors, animations
- `script.js` — CA copying, menu interactions, social-link state, on-scroll reveals
- `assets/` — optimized production WebP artwork + favicon
- `source-artwork/` — 12 original-quality PNG images to support further design edits

## Implemented behaviors

- Working nav anchors and sticky navigation
- Mobile menu (open/close, ESC, automatic close when tapping section link)
- Working copy button for literal `Coming Soon..` with clipboard permission fallback
- X/Telegram social actions show accurate "coming soon" feedback until official links are supplied
- Back-to-top anchor
- Scroll-reveal/marquee/cartoon floating motion, with reduced-motion support
- No Connect Wallet button or wallet-connect implementation
- No invented live price, market cap, holders, transaction counts, LP lock evidence, or DEX pair URL

## Artwork note

All 12 $PNL illustrations are included; the reference site's brand logos and image files are not reused. Art depicting fictional large gains or liquidity-related signs is *story artwork*, not live-market data. `09-how-to-buy` is explanatory artwork; never treat screenshot amounts in that illustration as swap quotes.
