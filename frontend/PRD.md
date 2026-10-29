# Yumnest Website --- Product Requirements Document (PRD)

**Document version:** 1.0\
**Prepared:** 29 October 2026\
**Project:** Yumnest --- premium food, spice and cooking-products
website\
**Current implementation scope:** Frontend/UI first, delivered in three
phases; Admin Panel comes after the customer-facing UI.\
**Reference:** `demoyumnest-main.zip` supplied by the project owner.
Treat it as a visual and feature reference, not as code to copy
wholesale.\
**Target:** A polished, responsive, maintainable website that can be
extended into a production e-commerce platform serving 10,000+ users.

------------------------------------------------------------------------

## 1. Product vision

Build a premium, trustworthy, easy-to-use Yumnest website for
discovering food products, viewing product details, exploring
recipes/blogs and awards, and preparing a shopping cart. The interface
should feel intentionally designed for a real food brand---not like a
generic AI-generated template.

The existing project opened in Antigravity is a **Next.js + TypeScript**
project. Preserve that framework and its existing folder structure. The
supplied reference ZIP appears to be a separate Vite + React +
TypeScript implementation; use it to understand the design, page content
and interactions, but do not copy its Vite configuration or replace the
Next.js project.

### Product principles

-   Premium, warm, appetising, clean visual design.
-   Mobile-first, responsive and accessible.
-   Fast initial rendering and smooth interactions.
-   Reusable components and consistent design tokens.
-   No fake production claims: prototype data must be clearly separated
    from future API integration.
-   Avoid unnecessary dependencies, heavy animations and large
    client-side bundles.
-   Do not promise "zero bugs"; use testing, error handling and a
    release checklist to reduce defects.

## 2. Goals and success criteria

### Goals

1.  Recreate and improve the reference website's customer-facing
    experience inside the existing Next.js project.
2.  Deliver the customer-facing UI in three controlled phases.
3.  Build Admin Panel UI only after those three phases are reviewed and
    approved.
4.  Keep the codebase ready for future backend, persistent database,
    secure authentication, order management and production deployment.
5.  Make the UI usable on low-to-mid-range mobile devices and slower
    connections.

### Acceptance criteria

-   All approved routes render without runtime errors.
-   Navigation, links, buttons, quantity controls, filters, search UI,
    cart interactions and forms have meaningful behaviour.
-   Layout is verified at mobile, tablet and desktop widths.
-   Loading, empty, success and error states exist wherever data/actions
    are shown.
-   Images have appropriate dimensions, alt text and responsive loading
    behaviour.
-   No avoidable horizontal overflow, broken images, dead buttons or
    console errors in the tested core flows.
-   Existing project conventions and TypeScript checks are respected.
-   The app builds successfully using the repository's documented build
    command.
-   The team documents known limitations, especially anything that still
    uses local/mock data.

## 3. Scope and delivery order

**Important:** Do not start Admin Panel implementation until Phases 1--3
are completed, tested and approved.

### Phase 1 --- Design foundation and Home page

**Purpose:** Establish the visual identity and reusable UI system before
implementing all pages.

Deliver: - Inspect existing Next.js files, `package.json`, `AGENTS.md`,
routing, CSS and installed dependencies before editing. - Define design
tokens: brand colours, typography, spacing, radii, shadows, focus states
and responsive breakpoints. - Build reusable header/navigation, footer,
logo treatment, buttons, links, section containers, product-card base,
badges, image wrappers and toast/notification pattern as needed. - Build
the Home page using the reference as guidance: - Hero section with a
clear headline, primary CTA and high-quality food/product imagery. -
Product/category discovery. - Best sellers or featured products. -
Broast/product promotion where relevant to approved content. - Brand
story / why choose Yumnest. - Recipe/blog preview. - Awards/trust
section. - Testimonials only if real or explicitly labelled as sample
content. - Footer with contact and policy links. - Responsive mobile
navigation and keyboard-accessible interactions. - Use realistic content
and approved brand assets; do not invent certifications, awards, health
claims or customer reviews.

**Phase 1 exit gate:** Owner approves Home page visual direction,
responsive layout, typography, colour palette and shared components
before moving on.

### Phase 2 --- Product discovery and shopping UI

**Purpose:** Build customer-facing product browsing and cart experience.

Deliver: - Products listing page. - Category/filter UI and sorting UI
appropriate to the reference. - Search UI with empty/no-results state. -
Product cards with image, title, price, variant/weight where applicable,
availability label and clear action. - Product detail page with image
gallery, description, variants/weight selection, price, stock display
and quantity controls. - Quick-view modal only if it can be implemented
accessibly and reliably. - Cart page with line items, quantity changes,
remove action, subtotal and empty-cart state. - Cart state persistence
for the frontend prototype only if appropriate; clearly isolate this
from future server-backed cart/order data. - Clear notice that
checkout/payment is not production-enabled during this phase. -
Accessible modal behaviour, focus management and visible validation
feedback.

**Phase 2 exit gate:** Product browsing and cart core flows pass manual
tests at mobile and desktop widths. No payment processing or real order
placement is implied.

### Phase 3 --- Brand content, information pages and polish

**Purpose:** Complete the customer-facing UI before Admin Panel work.

Deliver: - About / brand story page. - Recipes/blog listing and
recipe/article detail page if included in the agreed route scope. -
Awards page using verified supplied awards only. - Contact page with
validated frontend form UI and clear success/error feedback. Do not
claim messages are delivered until a backend/service is connected. -
FAQ, shipping/returns/privacy/terms pages or sections if approved and
content is supplied. - 404/not-found page and sensible empty states. -
SEO metadata for each public route, page titles/descriptions, canonical
strategy where applicable, social sharing metadata and appropriate
heading hierarchy. - Final responsive polish, keyboard navigation,
contrast review, image optimisation and route review. - A UI handoff
note documenting mock data, non-working production integrations and
future API needs.

**Phase 3 exit gate:** All customer-facing routes are reviewed, build
passes, and core UI regression checklist is complete.

### Phase 4 --- Admin Panel (later, not in the current UI-first implementation)

Only start after Phases 1--3 are approved.

Potential future Admin Panel UI: - Admin sign-in screen (visual only
until secure backend auth exists). - Dashboard summary cards and recent
activity. - Product/category management UI. - Product variants, price
and stock editing UI. - Orders list and order detail UI. - Recipes/blog
management. - Awards management. - Contact/message review. - Site
settings and admin profile.

**Security note:** Hiding an admin route in the frontend is not
security. Production admin operations must be authorised on the server.
Never ship a hardcoded admin password or rely on localStorage as
authentication.

------------------------------------------------------------------------

## 4. Routes and page requirements

Final routes must follow the existing Next.js routing convention
discovered during audit. Do not create duplicate routes or switch
routing systems without approval.

Suggested route map: - `/` --- Home - `/products` --- Product listing -
`/products/[slug]` or existing agreed detail route --- Product details -
`/cart` --- Cart - `/recipes` --- Recipes/blog listing -
`/recipes/[slug]` --- Recipe/article detail, if approved - `/about` ---
About - `/awards` --- Awards - `/contact` --- Contact - `/privacy` and
`/terms` --- only when approved content is available - `/admin/*` ---
Phase 4 only

The final route names should be reconciled with the existing project
before implementation.

## 5. UX and visual design requirements

-   Use a warm, premium food-brand palette. Prefer natural
    cream/off-white backgrounds, restrained brand colours, dark readable
    text and appetising photography. Do not make the whole UI overly
    dark or rely on a bright red theme unless the owner approves it.
-   Use consistent typography, line lengths, spacing and button styles.
-   Avoid generic gradients, excessive glassmorphism, over-rounded
    cards, unnecessary floating widgets and animations that slow down
    the experience.
-   Use real product/food imagery from approved reference assets where
    licensing and ownership allow. Optimise large images and provide
    fallbacks.
-   Every interactive element must have hover, focus, disabled and
    appropriate active states.
-   Use semantic HTML and accessible names. Forms must have labels and
    helpful error messages.
-   Respect reduced-motion preferences.
-   Do not use fabricated testimonials, certifications, awards, product
    benefits or food/health claims.
-   Preserve useful reference features but improve clarity and
    consistency where necessary.

## 6. Technical requirements for the current frontend

### Framework

-   Keep the existing Next.js + TypeScript project.
-   Follow its current App Router or Pages Router setup as discovered;
    do not assume.
-   Reuse existing dependencies if suitable. Ask before adding major
    dependencies.
-   Use the framework's appropriate image and metadata features.
-   Keep components small, reusable and easy to test.
-   Keep TypeScript strictness and avoid `any` unless justified and
    documented.

### State and data

-   Do not introduce Redux Toolkit and TanStack Query merely because
    they are familiar tools.
-   Use local component state for simple UI interactions.
-   Use a shared cart/context/store only if multiple routes need it.
-   TanStack Query is most useful once real APIs are introduced; do not
    pretend mock data is server data.
-   Redux Toolkit is optional and should be used only if the project's
    actual state requirements justify it.
-   Keep sample data in a clearly named module and avoid mixing it into
    page markup.
-   Create a future-facing API/service boundary only if it helps without
    overengineering the prototype.

### Code quality

-   No giant page components when smaller components improve clarity.
-   No duplicate shared UI implementations.
-   Avoid unsafe type assertions and silent error swallowing.
-   Use stable list keys.
-   Avoid unnecessary client components; keep server-rendered/static UI
    where appropriate.
-   Do not disable lint/type checks to hide issues.
-   Never overwrite or delete existing work without inspecting it and
    obtaining approval.

## 7. Performance and 10,000+ user target

"10,000+ users" is not a complete capacity definition. It could mean
10,000 registered users, monthly visitors, daily visitors or 10,000
concurrent users. This PRD targets a frontend architecture that can grow
to serve 10,000+ users, but **the UI prototype alone cannot guarantee
production capacity**. Real capacity depends on backend design,
database, hosting, traffic shape, caching, images, third-party services
and load testing.

### Frontend performance requirements

-   Prefer server rendering/static generation for public content when
    suitable.
-   Use Next.js image optimisation or an equivalent controlled image
    pipeline.
-   Set image dimensions/aspect ratios to reduce layout shift.
-   Lazy-load below-the-fold images and defer non-critical work.
-   Avoid large dependencies and unnecessary client-side JavaScript.
-   Keep animations subtle and performant.
-   Prevent avoidable re-renders; memoise only when measurement
    justifies it.
-   Use pagination or bounded rendering for long lists; do not render
    thousands of products at once.
-   Use loading skeletons only where they improve perceived performance.
-   Handle network errors and prevent duplicate form submissions.
-   Avoid storing sensitive data in localStorage.
-   Test production builds, not just the development server.

### Suggested frontend quality targets

Targets are goals to measure, not guarantees: - Core Web Vitals,
measured on representative production pages: - LCP: ≤ 2.5 seconds - INP:
≤ 200 milliseconds - CLS: ≤ 0.1 - Lighthouse mobile performance target:
aim for 85+ initially, then improve using measured bottlenecks. Scores
vary by device and network and are not a substitute for real-user
metrics. - No uncaught runtime errors during the defined core user
journeys. - No severe accessibility or broken-link issues in the release
checklist.

### Future backend capacity requirements

Before production launch, define expected requests/second, peak
concurrent users, product count, image volume and checkout traffic.
Then: - Use a managed database with appropriate indexes and connection
pooling. - Add pagination, input validation, rate limits and server-side
authorization. - Cache suitable public catalogue/content responses. -
Store product images in object storage/CDN rather than in database
rows. - Use secure session/token handling and proper password hashing. -
Make order creation and stock updates transactional/idempotent where
appropriate. - Add monitoring, error reporting, backups and restore
procedures. - Run load tests against a staging environment with a
defined traffic model. - Confirm the actual hosting/database plan
supports the target load and budget.

## 8. Two-developer collaboration

The project is maintained by two developers. Use Git branches and review
changes rather than both editing the same files simultaneously.

Suggested initial split: - **Developer A:** design system, shared
layout, Home, product listing/detail UI and responsive styling. -
**Developer B:** inspect existing project and reference assets; prepare
product/content sample data and build approved non-overlapping
content-page components after agreeing on component contracts. -
**Shared:** agree route names, shared component props, design tokens and
file ownership before parallel implementation. - **Later:** one
developer can handle backend/API while the other integrates the
frontend, once the owner authorises the backend phase.

Rules: - Pull the latest approved changes before starting work. - Use
descriptive branches and small commits. - Open pull requests and review
diffs before merging. - Do not commit `.env` files, secrets, credentials
or customer data. - Avoid simultaneous edits to the same shared layout
or package files. - Keep a short integration checklist for each merge.

## 9. Testing plan

### Every phase

-   Run the project's actual lint, type-check and build commands from
    `package.json`.
-   Fix new errors rather than suppressing them.
-   Check browser console and network errors.
-   Verify every visible button, link and form action.
-   Check mobile, tablet and desktop breakpoints.
-   Test keyboard navigation, focus visibility and basic screen-reader
    semantics.
-   Verify image loading, fallback states, text overflow and long
    content.

### Core customer journeys

1.  Open Home and navigate to Products.
2.  Search/filter/sort products, where available.
3.  Open a product and change variant/quantity.
4.  Add to cart, update quantity, remove item and empty the cart.
5.  Navigate between routes and refresh without a broken page.
6.  Open About, Recipes, Awards and Contact.
7.  Submit invalid and valid contact form inputs; verify truthful
    feedback.
8.  Use the site with a narrow mobile viewport and keyboard only.

### Release blockers

-   Broken build or TypeScript errors.
-   A core route crashes.
-   Dead primary CTA or broken navigation.
-   Major layout overflow on supported mobile widths.
-   Missing/incorrect price or product information.
-   Fake claims presented as real.
-   Secrets committed to the repository.
-   Admin UI accidentally presented as secure before backend
    authorisation exists.

------------------------------------------------------------------------

## 10. Implementation workflow for Antigravity

Use the following prompts sequentially. Review the agent's plan and diff
after each prompt. Do not ask the agent to implement all phases in one
uncontrolled change.

### Prompt A --- Audit only

> You are a senior Next.js + TypeScript frontend engineer working on the
> existing Yumnest repository. Inspect the repository structure,
> `package.json`, `AGENTS.md`, routing, styles, assets and current
> pages. The separate Yumnest reference ZIP is for design/feature
> reference only. Do not modify files, install packages, change
> frameworks or delete code. Report the current architecture, existing
> features, missing routes, reusable components, build commands and
> risks. Propose a Phase 1--3 implementation plan followed by a later
> Admin Panel phase. Wait for approval.

### Prompt B --- Phase 1: Design system and Home

> Implement only Phase 1 of the approved Yumnest PRD in the existing
> Next.js + TypeScript project. Preserve the existing framework and
> working code. Establish design tokens and reusable shared components,
> then implement the Home page based on the supplied reference. Use
> responsive, accessible, premium food-brand styling and approved
> assets. Do not implement backend, database, payment, production
> authentication or Admin Panel. Do not add major dependencies without
> asking. Run the available lint/type-check/build commands and report
> files changed, tests run and remaining issues. Stop for review.

### Prompt C --- Phase 2: Products and cart

> Implement only Phase 2 of the approved Yumnest PRD. First inspect the
> current implementation and reuse the approved design system. Build the
> product listing, product detail and cart UI with appropriate sample
> data, variant/quantity interactions, search/filter/sort where agreed,
> empty/loading/error states and responsive layouts. Clearly keep mock
> data separate from future API integration. Do not implement real
> checkout, payment, backend, database or Admin Panel. Test the core
> browsing and cart journeys, run project checks and report all changes
> and known limitations. Stop for review.

### Prompt D --- Phase 3: Content pages and polish

> Implement only Phase 3 of the approved Yumnest PRD. Build or polish
> About, Recipes/blog, Awards and Contact pages, plus approved
> policy/FAQ and not-found pages. Use only supplied/verified brand
> content; do not invent awards, reviews, certifications or health
> claims. Add suitable page metadata, accessibility and responsive
> polish. Do not implement backend, real message delivery, payment or
> Admin Panel. Run route checks, lint/type-check/build and the core
> regression checklist. Report any mock data or non-functional
> integrations honestly. Stop for owner approval.

### Prompt E --- Admin Panel (only after Phases 1--3 approval)

> Do not begin unless the owner explicitly approves the Admin Panel
> phase. Inspect the completed customer-facing UI and implement the
> agreed Admin Panel interface using the same design system. Until a
> secure backend is implemented, treat it as a UI prototype only. Do not
> add hardcoded admin credentials or claim frontend route protection is
> secure. Keep product, order, recipe, award and settings screens
> modular. Add clear loading, empty, validation and error states, and
> test the UI. Stop before implementing real privileged operations
> unless separately authorised.

------------------------------------------------------------------------

## 11. Out of scope for the current phases

-   Express backend and persistent database.
-   Real customer registration/login and secure admin authentication.
-   Payment gateway and real checkout/order creation.
-   Real email/SMS delivery or WhatsApp automation.
-   Production inventory synchronisation.
-   Admin Panel implementation until Phase 4 is approved.
-   Production load/capacity guarantee before a deployed system and
    load-test plan exist.

These should be planned separately so the frontend prototype does not
accidentally suggest that non-existent production features are live.

## 12. Definition of done

A phase is complete only when: - Its approved scope is implemented. -
The existing framework and project structure are preserved. - Main user
journeys work. - Responsive and accessibility checks have been
completed. - Lint/type-check/build commands have been run and results
reported. - No unresolved release-blocking issue remains. - Mock data
and limitations are documented. - The owner has reviewed and approved
the phase.

**Final instruction to the coding agent:** Work in small, reviewable
steps. Inspect before editing. Do not overbuild. Do not silently change
the framework, delete existing work, add major dependencies, or claim
that a feature or test works without verifying it.
