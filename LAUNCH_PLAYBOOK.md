# Wyrcan Engineering Roadmap — Launch, Distribution & Backlink Playbook

This playbook contains turnkey, ready-to-execute copy and operational workflows to launch the **Wyrcan Engineering Roadmap** across developer communities, secure authoritative backlinks, and trigger fast indexing on Google and AI search engines.

---

## 1. Google Search Console (GSC) Setup & Indexing Protocol

### Step 1: Add Property in Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **URL Prefix** (do not use Domain property, since GitHub Pages operates under `*.github.io`):
   ```text
   https://wyrcan-io.github.io/roadmap/
   ```
3. Verification methods:
   - **Method A (HTML Tag - Recommended):** GSC provides a meta tag: `<meta name="google-site-verification" content="YOUR_KEY" />`. Paste this into the `<head>` of `index.html`, commit, push to GitHub, and click **Verify**.
   - **Method B (HTML File):** Download the Google verification file (e.g. `google12345.html`), place it in the repository root, commit, push, and click **Verify**.

### Step 2: Submit Sitemap
1. In the left navigation, click **Sitemaps**.
2. Under "Add a new sitemap", enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**. (Google will process `https://wyrcan-io.github.io/roadmap/sitemap.xml`).

### Step 3: Request Instant Indexing (URL Inspection)
1. At the top of GSC, paste the exact canonical URL:
   ```text
   https://wyrcan-io.github.io/roadmap/
   ```
2. Press Enter. GSC will show "URL is not on Google" (if newly published).
3. Click **"Test Live URL"** to verify that Googlebot can fetch and render your HTML and Schema.org markup.
4. Click **"Request Indexing"**. This queues the page for high-priority crawling.

### Step 4: Validate Structured Data (Rich Results)
1. Test your live URL using the [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Confirm that both **Course** and **FAQPage** structured data entities pass with zero errors.

---

## 2. Hacker News ("Show HN") Launch

- **Optimal Timing:** Tuesday or Wednesday between 13:00–14:30 UTC (8:00–9:30 AM EST).
- **Submission URL:** Leave URL blank and use text post, OR submit link `https://wyrcan-io.github.io/roadmap/` and immediately post the top comment. (Text submissions with URL in body often drive deeper engineering discussion on HN).

### Title:
```text
Show HN: An engineering roadmap focused on systems fundamentals, not frameworks
```

### Post Body:
```text
Hi HN,

Over the past few months, we put together an opinionated, text-first engineering roadmap (12–24 months) designed for developers who want to understand the systems underneath modern software engineering rather than just chasing UI frameworks.

Live Roadmap: https://wyrcan-io.github.io/roadmap/
GitHub: https://github.com/Wyrcan-io/roadmap
LLM/Agent Manifest: https://wyrcan-io.github.io/roadmap/llms.txt

Why We Built This:
Most online roadmaps fall into one of two traps:
1. Video tutorial hell: 40-hour video playlists where people copy code without building mental models.
2. Disconnected toy repos: 20 independent "Hello World" apps that don't reflect production engineering.

Our 4 Principles:
1. 70% Building: Real implementations unblocked by canonical books and official docs. Building is the actual curriculum.
2. One Evolving System: Evolve a single production-grade AI platform across 12 cumulative milestones instead of hoarding disconnected toy projects.
3. Break Things: Deliberately induce failures, trace errors via OpenTelemetry/logs, fix them, and write postmortems.
4. Design First: Reason about traffic, consistency, latency, cost, and failure modes before writing code.

Curriculum Highlights:
- Grounded in 4 canonical texts: OSTEP (Operating Systems), ISLP (Machine Learning), UDL (Deep Learning), and DDIA 2nd Edition (System Design).
- Dual-track pacing: Working Practitioner (24 months, 8–10 hrs/wk) vs Accelerated Sprint (12 months, 20–25 hrs/wk).
- Interactive checklist: 110 checkpoints saved locally in browser storage with Markdown export for Notion/Obsidian.

Zero ads, zero paywalls, 100% open source. We'd love your feedback on the curriculum sequencing, the failure-testing milestones, and recommended texts.
```

---

## 3. Reddit Launch Kit

Post to the following subreddits on separate days (avoid mass cross-posting on the same hour).

### Subreddit 1: r/learnprogramming
- **Title:** `I spent months building a text-first engineering roadmap focused on systems fundamentals instead of video tutorials (100% free/open)`
- **Body:**
```text
Hey everyone,

A common pattern I've seen (and fallen into myself) is "tutorial hell"—watching dozens of hours of video courses, feeling like you understand concepts, but getting completely stuck when staring at an empty terminal or editor.

I wanted to put together a curriculum grounded in how senior engineers actually learn and work:
1. Text-first: Official vendor docs, RFCs, and canonical university textbooks (OSTEP for OS, ISLP for ML, DDIA for distributed systems).
2. One evolving project: Rather than 15 random "ToDo apps", you build and evolve a single production-grade AI service across 12 stages (from basic Linux processes up to Kubernetes, Terraform, and OpenTelemetry).
3. 70% Building: Use the texts to unblock actual implementation.

Interactive Site: https://wyrcan-io.github.io/roadmap/
GitHub: https://github.com/Wyrcan-io/roadmap

Features on the site:
- Dual-track switcher: Toggle between Working Practitioner (24 months @ 8-10 hrs/wk) and Accelerated Sprint (12 months @ 20-25 hrs/wk).
- 110 granular checkboxes that save locally in your browser.
- "Export to Markdown" button to paste your progress into Notion or Obsidian.
- Warm dark/light mode and quick search across all 59 primary sources.

Zero ads, zero email signups, completely open source. Would love your honest feedback on how to make it even more practical!
```

### Subreddit 2: r/devops
- **Title:** `A practitioner roadmap combining Linux internals, Terraform, K8s, and MLOps with deliberate failure testing`
- **Body:** Focus on the platform milestones (Stages 01–05, 10–11): Docker OCI isolation, Terraform remote state locking, Trivy scanning in GitHub Actions, and OpenTelemetry instrumentation with incident postmortems. Link: `https://wyrcan-io.github.io/roadmap/`.

### Subreddit 3: r/MachineLearning or r/learnmachinelearning
- **Title:** `A 12-stage MLOps and Deep Learning curriculum grounded in ISLP, UDL, Rules of ML, and continuous training pipelines`
- **Body:** Highlight the ML/MLOps milestones (Stages 06–09): transition from classical scikit-learn models to PyTorch autograd from scratch, MLflow lineage tracking, automated model promotion gates, and drift detection with Evidently AI.

---

## 4. LinkedIn Post

### Post Copy:
```text
Most developer roadmaps:

HTML
↓
CSS
↓
JavaScript
↓
React
↓
Next.js
↓
"Senior Full Stack Engineer"

The reality of engineering production systems:

Processes & Sockets (OSTEP)
↓
Linux Internals & Networking (systemd, TCP/IP, Nginx)
↓
Container Isolation (OCI, Docker, Compose)
↓
Cloud Architecture (AWS VPC, IAM, Subnets, ALB)
↓
Infrastructure as Code (Terraform)
↓
CI/CD & Security (GitHub Actions, Trivy)
↓
Machine Learning & PyTorch (ISLP, UDL)
↓
MLOps & Continuous Training (MLflow, Canary Promotes)
↓
Container Orchestration (Kubernetes, EKS, Helm)
↓
Observability & Incident Response (OpenTelemetry, Prometheus)
↓
Distributed Systems & Data (DDIA)

We spent the past few months building a text-first, 12-stage engineering curriculum grounded entirely in canonical books and official vendor documentation.

No video tutorial fluff. 70% hands-on building. One evolving production platform across all 12 stages.

Interactive Roadmap: https://wyrcan-io.github.io/roadmap/
Open Source Repository: https://github.com/Wyrcan-io/roadmap

Includes an interactive 110-checkpoint tracker, dual-track pacing (12 vs 24 months), and exportable progress for Notion/Obsidian.

100% free and open public resource.

#softwareengineering #devops #mlops #cloud #systemdesign #linux #kubernetes #python #programming
```

---

## 5. GitHub Repository Optimization & Backlink Targets

### Repository Configuration:
- **Repo URL:** `https://github.com/Wyrcan-io/roadmap`
- **Description:** `A practitioner-verified, text-first 12-stage engineering curriculum (12–24 Months) grounded in canonical textbooks, vendor docs, and production deliverables. Zero video tutorial fluff.`
- **Website URL:** `https://wyrcan-io.github.io/roadmap/`
- **GitHub Topics to add:**
  `engineering-roadmap`, `software-engineering`, `systems-engineering`, `devops-roadmap`, `mlops`, `cloud-architecture`, `system-design`, `curriculum`, `learning-resources`, `kubernetes`, `terraform`, `pytorch`

### Curated Top 20 `awesome-*` PR Targets (High-Authority Backlinks):
Submit Pull Requests to list Wyrcan under the appropriate sections. **Crucial Note:** Do *not* delete your fork while the PR is open, or GitHub will automatically close the PR. Keep the forks until merged.

| # | Repository | Stars | Target Section | Live Pull Request / Status |
| :-: | :--- | :-: | :--- | :--- |
| 1 | [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | 41.3k | Courses | [PR #60](https://github.com/ashishps1/awesome-system-design-resources/pull/60) (OPEN) |
| 2 | [veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker) | 36.8k | Books & Tutorials | [PR #1552](https://github.com/veggiemonk/awesome-docker/pull/1552) (OPEN) |
| 3 | [visenger/awesome-mlops](https://github.com/visenger/awesome-mlops) | 14.1k | MLOps Courses | [PR #195](https://github.com/visenger/awesome-mlops/pull/195) (OPEN) |
| 4 | [dastergon/awesome-sre](https://github.com/dastergon/awesome-sre) | 13.4k | Education | [PR #322](https://github.com/dastergon/awesome-sre/pull/322) (OPEN) |
| 5 | [madd86/awesome-system-design](https://github.com/madd86/awesome-system-design) | 12.4k | Introduction / Interviews | [PR #41](https://github.com/madd86/awesome-system-design/pull/41) (OPEN) |
| 6 | [theanalyst/awesome-distributed-systems](https://github.com/theanalyst/awesome-distributed-systems) | 12.3k | Courses | [PR #70](https://github.com/theanalyst/awesome-distributed-systems/pull/70) (OPEN) |
| 7 | [liuchong/awesome-roadmaps](https://github.com/liuchong/awesome-roadmaps) | 7.3k | Infrastructure / Operations | [PR #34](https://github.com/liuchong/awesome-roadmaps/pull/34) (OPEN) |
| 8 | [lauragift21/awesome-learning-resources](https://github.com/lauragift21/awesome-learning-resources) | 5.7k | DevOps | [PR #239](https://github.com/lauragift21/awesome-learning-resources/pull/239) (OPEN) |
| 9 | [kelvins/awesome-mlops](https://github.com/kelvins/awesome-mlops) | 5.2k | Websites | [PR #256](https://github.com/kelvins/awesome-mlops/pull/256) (OPEN) |
| 10 | [wmariuss/awesome-devops](https://github.com/wmariuss/awesome-devops) | 4.3k | DevOps Roadmap | [PR #548](https://github.com/wmariuss/awesome-devops/pull/548) (OPEN) |
| 11 | [simonaronsson/awesome-software-architecture](https://github.com/simonaronsson/awesome-software-architecture) | 2.8k | Bonus Roadmaps | [PR #25](https://github.com/simonaronsson/awesome-software-architecture/pull/25) (OPEN) |
| 12 | [rootsongjc/awesome-cloud-native](https://github.com/rootsongjc/awesome-cloud-native) | 2.4k | Tutorials & Learning | [PR #160](https://github.com/rootsongjc/awesome-cloud-native/pull/160) (OPEN) |
| 13 | [orsanawwad/awesome-roadmaps](https://github.com/orsanawwad/awesome-roadmaps) | 1.9k | Roadmaps | [PR #19](https://github.com/orsanawwad/awesome-roadmaps/pull/19) (OPEN) |
| 14 | [rShetty/awesome-distributed-systems](https://github.com/rShetty/awesome-distributed-systems) | 1.6k | Courses | [PR #12](https://github.com/rShetty/awesome-distributed-systems/pull/12) (OPEN) |
| 15 | [SquadcastHub/awesome-sre-tools](https://github.com/SquadcastHub/awesome-sre-tools) | 1.5k | Related Lists | [PR #179](https://github.com/SquadcastHub/awesome-sre-tools/pull/179) (OPEN) |
| 16 | [Alliedium/awesome-software-engineering](https://github.com/Alliedium/awesome-software-engineering) | 630+ | DevOps | [PR #27](https://github.com/Alliedium/awesome-software-engineering/pull/27) (OPEN) |
| 17 | [shospodarets/awesome-platform-engineering](https://github.com/shospodarets/awesome-platform-engineering) | 520+ | Miscellaneous and Related | [PR #66](https://github.com/shospodarets/awesome-platform-engineering/pull/66) (OPEN) |
| 18 | [fuzzylabs/awesome-open-mlops](https://github.com/fuzzylabs/awesome-open-mlops) | 480+ | More resources | [PR #36](https://github.com/fuzzylabs/awesome-open-mlops/pull/36) (OPEN) |
| 19 | [Pythondeveloper6/Awesome-MLOPS](https://github.com/Pythondeveloper6/Awesome-MLOPS) | 380+ | Roadmaps | [PR #10](https://github.com/Pythondeveloper6/Awesome-MLOPS/pull/10) (OPEN) |
| 20 | [linnykoleh/awesome-system-design](https://github.com/linnykoleh/awesome-system-design) | 290+ | Courses | [PR #3](https://github.com/linnykoleh/awesome-system-design/pull/3) (OPEN) |

---

## 6. Social Card Preview Verification

Before posting to social channels, verify that your Open Graph images render with zero cropping:
- **Twitter/X:** [Card Validator / Tweet Preview](https://cards-dev.twitter.com/validator)
- **LinkedIn:** [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- **Facebook / Meta:** [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Discord:** Paste `https://wyrcan-io.github.io/roadmap/` into any private Discord channel to confirm the rich embed displays the title, description, and preview image.
