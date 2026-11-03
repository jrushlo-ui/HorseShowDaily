# Social Arena post contract

Each adapter should normalize an authorized, publicly accessible source into:

- platform: Instagram, Facebook, TikTok, X, or Reddit
- discipline: a controlled discipline label when known
- title and excerpt: source-derived display text
- permalink: original post URL; never replace with an internal redirect
- author: source author/handle
- publishedAt: original timestamp in ISO 8601 format
- engagement: only counts returned by the source; omit total when unavailable
- sponsored: explicit sponsorship/paid-partnership signal when supplied by the source or editorial workflow

Adapters must preserve source attribution and expose coverage limitations when a platform cannot provide a field. Bluesky is intentionally excluded from this project scope.
