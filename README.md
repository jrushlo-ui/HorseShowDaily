# Horse Show Daily

A focused, mobile-friendly home for The Social Arena.

## Current scope

This initial structure provides:

- a responsive Social Arena shell
- platform and discipline filter controls
- a clear empty state until verified public feeds are connected
- data contracts that preserve original post URLs, authors, timestamps, and verified engagement
- sponsorship labeling hooks
- no fabricated posts or engagement counts

## Local preview

Open `dist/index.html` directly in a browser, or serve the repository root with any static file server.

## Feed integration

Feed adapters should populate the `posts` array in `dist/app.js`. Only verified data should be displayed. Missing metrics must remain labeled as unavailable; they must not be inferred or simulated.

## Hosting

The static hosting manifest is in `.openai/hosting.json`. Production deployment is intentionally separate from this repository initialization.
