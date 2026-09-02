# AI/ML × Cloud × DevOps × MLOps — 12-Month Engineering Roadmap

> **A practitioner-verified, text-first engineering curriculum grounded entirely in official vendor documentation, university courses, foundational textbooks, and working code. Zero video tutorial fluff.**

🌐 **Live Interactive Checklist & Curriculum:** **[https://wyrcan-io.github.io/roadmap/](https://wyrcan-io.github.io/roadmap/)**

---

## 🎯 Why This Roadmap Exists

Most online roadmaps fall into one of two traps:
1. **Tutorial Hell**: A list of 40-hour video playlists where you copy code without building real mental models.
2. **Disconnected Toy Repos**: Building 20 separate "Hello World" projects that don't reflect production engineering.

This roadmap is built on **4 non-negotiable principles**:
1. **70% Building**: Use books and official docs to unblock real implementations. Building is the actual curriculum.
2. **One Evolving System**: Build and evolve a single production-grade AI platform over 12 months.
3. **Break Things**: Deliberately induce failures, trace errors through telemetry, fix them, and write postmortems.
4. **Design First**: Reason methodically about traffic, consistency, latency, cost, and failure modes before writing code.

---

## 🗺️ The 12-Month Curriculum Overview

| Unit | Track | Core Focus | Primary Deliverable |
| :--- | :--- | :--- | :--- |
| **00** | **Foundation Reset** | Python Model, Asyncio, OSTEP OS, MDN HTTP, PostgreSQL | Trace web request from DNS to DB query plan |
| **01** | **Platform** | Linux Internals, CLI Fluency, Networking, systemd | Deploy hardened FastAPI service on Linux VM behind Nginx |
| **02** | **Platform** | Docker Deep Dive, Multi-Stage Builds, OCI, Compose | Production multi-tier compose stack with networking isolation |
| **03** | **Platform** | AWS Architecture, VPC Subnets, IAM, RDS, S3, ALB | Provision AWS multi-tier architecture + System Design Doc |
| **04** | **Platform** | GitHub Actions, CI/CD, 12-Factor App, OWASP Security | Automated CI/CD pipeline with Trivy scans & zero-downtime rollback |
| **05** | **Platform** | Terraform IaC, Remote State S3/DynamoDB, Reusable Modules | Spin up and tear down staging cloud environments via Terraform |
| **06** | **AI / ML** | ML Fundamentals, ISLP Python Labs, scikit-learn MOOC | Classical tabular ML pipeline service exposed via FastAPI |
| **07** | **AI / ML** | PyTorch, Autograd, Custom Training Loops, UDL Book | Train PyTorch model from scratch + GPU inference API |
| **08** | **MLOps** | Rules of ML, MLflow Tracking, Model Registry, Lineage | Reproducible ML training pipeline with versioned artifacts |
| **09** | **MLOps** | Continuous Training (CT), Automated Quality Gates | Automated model promotion with canary deployment routing |
| **10** | **Platform** | Kubernetes (EKS / K3s), Pods, Ingress, Helm Charts | Package and orchestrate application in Helm across Kubernetes |
| **11** | **Production** | OpenTelemetry, Prometheus, Grafana, Drift & SLOs | Telemetry dashboards + induced failure incident postmortem |
| **12** | **Capstone** | Architecture Hardening, C4 Diagrams, Well-Architected Review | Production portfolio platform package & security audit |
| **☵** | **System Design** | DDIA 2nd Edition, Microsoft Cloud Patterns, Builders' Library | Parallel weekly architecture loop (Months 1–12) |

---

## ⚡ The Non-Negotiable 13-Pillar Backbone

If the entire catalog feels vast, these 13 items form your core intellectual spine:

1. **Foundation:** [MIT Missing Semester](https://missing.csail.mit.edu/2026/) + [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/) + [Pro Git](https://git-scm.com/book/en/v2) + [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
2. **Linux & Networking:** [The Linux Command Line](https://linuxcommand.org/tlcl.php) + [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/)
3. **Docker:** [University of Helsinki DevOps with Docker](https://devopswithdocker.com/) + [Docker Build Best Practices](https://docs.docker.com/build/building/best-practices/)
4. **AWS:** [AWS Skill Builder](https://aws.amazon.com/training/digital/) + [Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) + [Amazon Builders' Library](https://aws.amazon.com/builders-library/)
5. **DevOps:** [GitHub Actions](https://docs.github.com/en/actions) + [Google SRE Books](https://sre.google/books/)
6. **Terraform:** [HashiCorp AWS Tutorials](https://developer.hashicorp.com/terraform/tutorials/aws-get-started) + Modular IaC
7. **ML Fundamentals:** [An Introduction to Statistical Learning (ISLP)](https://www.statlearning.com/) + [Google MLCC](https://developers.google.com/machine-learning/crash-course/) + [scikit-learn MOOC](https://inria.github.io/scikit-learn-mooc/)
8. **Deep Learning:** [PyTorch Basics](https://docs.pytorch.org/tutorials/beginner/basics/intro.html) + [Understanding Deep Learning (Prince / MIT Press)](https://udlbook.github.io/udlbook/)
9. **ML Engineering:** [Google's Rules of ML](https://developers.google.com/machine-learning/guides/rules-of-ml) + [Hidden Technical Debt in ML (NeurIPS)](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf) + [MLflow](https://mlflow.org/)
10. **MLOps:** [Google Cloud MLOps Guide](https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning) + [DataTalksClub MLOps Zoomcamp](https://datatalks.club/docs/courses/mlops-zoomcamp/)
11. **Kubernetes:** [Kubernetes Official Tutorials](https://kubernetes.io/docs/tutorials/) + [Helsinki K8s MOOC](https://devopswithkubernetes.com/) + [Amazon EKS Workshop](https://www.eksworkshop.com/)
12. **Observability:** [OpenTelemetry Primer](https://opentelemetry.io/docs/concepts/observability-primer/) + [Prometheus](https://prometheus.io/) + [Evidently AI](https://learn.evidentlyai.com/)
13. **System Design (All Year):** [Designing Data-Intensive Applications (DDIA 2nd Edition)](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/) + [Microsoft Cloud Design Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/) + [Amazon Builders' Library](https://aws.amazon.com/builders-library/) + [C4 Model](https://c4model.com/)

---

## 🛠️ Interactive Features on the Live Site

The [live interactive site](https://wyrcan-io.github.io/roadmap/) includes:
- **Google Docs-style live Outline panel** with scrollspy tracking.
- **110 Granular Checkpoints** saved locally in browser storage.
- **Warm Dark Mode (Espresso)** & **Light Mode (Warm Ivory)** toggle.
- **Export Progress to Markdown** for Notion / Obsidian / personal dev journals.
- **Live Search Filter** across all 59 primary sources and documentation chapters.

---

## 🏛️ Maintained By

Maintained with care by **[Wyrcan](https://github.com/Wyrcan-io)** as a 100% free and open public resource for engineers worldwide.
