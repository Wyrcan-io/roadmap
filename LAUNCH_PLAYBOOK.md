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

| # | Repository | Stars | Target Section | Recommended Entry Format |
| :-: | :--- | :-: | :--- | :--- |
| 1 | [ashishps1/awesome-system-design-resources](https://github.com/ashishps1/awesome-system-design-resources) | 41.3k | Courses / Roadmaps | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Text-first 12-stage curriculum covering systems, DevOps, and MLOps.` |
| 2 | [veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker) | 36.8k | Resources / Tutorials | `* [Wyrcan Roadmap: Docker & Containers](https://github.com/Wyrcan-io/roadmap) - Production multi-stage OCI builds & networking isolation.` |
| 3 | [awesome-foss/awesome-sysadmin](https://github.com/awesome-foss/awesome-sysadmin) | 35.1k | Learning Resources | `* [Wyrcan Roadmap](https://github.com/Wyrcan-io/roadmap) - Linux internals, systemd, networking, and production infrastructure.` |
| 4 | [ramitsurana/awesome-kubernetes](https://github.com/ramitsurana/awesome-kubernetes) | 16.0k | Tutorials / Guides | `* [Wyrcan Roadmap: Kubernetes & Helm](https://github.com/Wyrcan-io/roadmap) - Production Kubernetes orchestration, Ingress, and Helm.` |
| 5 | [visenger/awesome-mlops](https://github.com/visenger/awesome-mlops) | 14.1k | MLOps Courses | `1. [Wyrcan Engineering Roadmap: 12-Stage Curriculum](https://github.com/Wyrcan-io/roadmap) - Free, text-first curriculum covering systems, DevOps, and MLOps.` |
| 6 | [dastergon/awesome-sre](https://github.com/dastergon/awesome-sre) | 13.4k | Education | `* [Wyrcan Roadmap: Observability & Failure Testing](https://github.com/Wyrcan-io/roadmap) - OpenTelemetry, Prometheus, SLOs, and incident postmortems.` |
| 7 | [madd86/awesome-system-design](https://github.com/madd86/awesome-system-design) | 12.4k | Learning Resources | `* [Wyrcan Roadmap](https://github.com/Wyrcan-io/roadmap) - 12-stage engineering curriculum grounded in DDIA, OSTEP, and ISLP.` |
| 8 | [mehdihadeli/awesome-software-architecture](https://github.com/mehdihadeli/awesome-software-architecture) | 11.6k | Roadmaps | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Text-first engineering curriculum for systems, cloud, and distributed architectures.` |
| 9 | [liuchong/awesome-roadmaps](https://github.com/liuchong/awesome-roadmaps) | 7.3k | Infrastructure / Operations | `- [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Text-first 12-stage curriculum for systems, DevOps, MLOps, and production AI platforms. <img alt="Year 2026" src="https://img.shields.io/badge/Year-2026-brightgreen"> <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-Repo-181717?logo=github">` |
| 10 | [lauragift21/awesome-learning-resources](https://github.com/lauragift21/awesome-learning-resources) | 5.7k | Roadmaps | `* [Wyrcan Roadmap](https://github.com/Wyrcan-io/roadmap) - Practitioner-verified engineering curriculum with 110 checkpoints.` |
| 11 | [kelvins/awesome-mlops](https://github.com/kelvins/awesome-mlops) | 5.2k | Websites | `* [Wyrcan Engineering Roadmap](https://wyrcan-io.github.io/roadmap/) - Practitioner-verified 12-stage curriculum and roadmap covering systems, DevOps, and MLOps.` |
| 12 | [wmariuss/awesome-devops](https://github.com/wmariuss/awesome-devops) | 4.3k | DevOps Roadmap | `- [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap): A practitioner-verified, text-first 12-stage curriculum covering systems, Linux internals, Docker, AWS, Terraform, CI/CD, Kubernetes, and Observability.` |
| 13 | [simonaronsson/awesome-software-architecture](https://github.com/simonaronsson/awesome-software-architecture) | 2.8k | Curricula & Guides | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Systems fundamentals, cloud architectures, and DDIA design patterns.` |
| 14 | [rootsongjc/awesome-cloud-native](https://github.com/rootsongjc/awesome-cloud-native) | 2.4k | Tutorials | `* [Wyrcan Roadmap: Cloud Native Platform](https://github.com/Wyrcan-io/roadmap) - Hands-on cloud-native engineering curriculum from Linux to K8s.` |
| 15 | [joseadanof/awesome-cloudnative-trainings](https://github.com/joseadanof/awesome-cloudnative-trainings) | 2.4k | Courses / Roadmaps | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Text-first, 12-stage engineering curriculum covering cloud native & DevOps.` |
| 16 | [orsanawwad/awesome-roadmaps](https://github.com/orsanawwad/awesome-roadmaps) | 1.9k | Engineering Roadmaps | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Practical engineering roadmap from systems fundamentals to production AI.` |
| 17 | [SquadcastHub/awesome-sre-tools](https://github.com/SquadcastHub/awesome-sre-tools) | 1.5k | Learning Resources | `* [Wyrcan Roadmap: SRE & Observability](https://github.com/Wyrcan-io/roadmap) - Telemetry, incident postmortems, and failure testing track.` |
| 18 | [joubertredrat/awesome-devops](https://github.com/joubertredrat/awesome-devops) | 840+ | Roadmaps & Docs | `* [Wyrcan Roadmap](https://github.com/Wyrcan-io/roadmap) - Open-source, text-first DevOps and systems roadmap.` |
| 19 | [fuzzylabs/awesome-open-mlops](https://github.com/fuzzylabs/awesome-open-mlops) | 480+ | Guides | `* [Wyrcan Roadmap: Open MLOps](https://github.com/Wyrcan-io/roadmap) - MLOps lifecycle from MLflow to continuous automated training.` |
| 20 | [Pythondeveloper6/Awesome-MLOPS](https://github.com/Pythondeveloper6/Awesome-MLOPS) | 380+ | Roadmaps / Master | `* [Wyrcan Engineering Roadmap](https://github.com/Wyrcan-io/roadmap) - Complete hands-on MLOps and systems engineering path.` |

---

## 6. Social Card Preview Verification

Before posting to social channels, verify that your Open Graph images render with zero cropping:
- **Twitter/X:** [Card Validator / Tweet Preview](https://cards-dev.twitter.com/validator)
- **LinkedIn:** [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- **Facebook / Meta:** [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Discord:** Paste `https://wyrcan-io.github.io/roadmap/` into any private Discord channel to confirm the rich embed displays the title, description, and preview image.
