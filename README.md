# Nwachukwu Ifeanyi Divine — Cloud & DevOps Portfolio

A professional Cloud and DevOps engineering portfolio showcasing the systems, tools, cloud platforms, automation workflows, and engineering projects I am building across AWS, Microsoft Azure, containers, infrastructure as code, CI/CD, monitoring, and observability.

🌐 **Live Portfolio:** https://ifeanyid.vercel.app  
💻 **GitHub:** https://github.com/Semicrypt  
🔗 **LinkedIn:** https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6

---

## About This Portfolio

This portfolio is designed to represent my work as a **Cloud & DevOps Engineer** through real engineering projects rather than a simple static résumé website.

It combines project case studies, cloud architecture, DevOps workflows, infrastructure automation, monitoring, interactive UI components, and technical demonstrations into one platform.

The site highlights my work with:

- AWS and Microsoft Azure
- Docker and containerized workloads
- Kubernetes and Amazon EKS
- Terraform and Infrastructure as Code
- GitHub Actions and CI/CD
- Linux and systems troubleshooting
- Grafana, CloudWatch, Azure Monitor, metrics, logs, and observability
- Node.js, Express, React, PostgreSQL, and REST APIs
- DevOps automation and natural-language operational tooling

---

## Featured Engineering Projects

### Iceman

**Natural-Language Cloud & DevOps CLI Agent**

Iceman is a safety-focused DevOps agent designed to reduce the gap between engineering intent and operational execution.

Instead of requiring engineers to remember long command sequences, Iceman is being built to understand natural-language requests, inspect the current project and environment, construct a reviewable plan, preview commands, request approval where necessary, execute supported operations, and return useful operational evidence.

Core areas include:

- Natural-language DevOps workflows
- Project and environment inspection
- Stack discovery
- Docker diagnostics
- Health and connectivity checks
- Command previews
- Approval gates
- Operational warnings
- Live execution progress
- Git and infrastructure workflows

**Case Study:**  
`/projects/iceman`

---

### CloudDrop

**AWS-Focused Cloud File Storage Platform**

CloudDrop is a full-stack cloud storage project focused on connecting the user file experience with the AWS infrastructure behind it.

The project demonstrates cloud application delivery, file storage workflows, backend integration, authentication, and AWS-oriented architecture.

Key engineering areas include:

- Cloud file upload and download workflows
- AWS-focused storage architecture
- Secure application workflows
- Backend API integration
- Cloud deployment concepts
- Infrastructure and application integration

**Case Study:**  
`/projects/clouddrop`

---

### AzureDrop

**Microsoft Azure File Platform**

AzureDrop is an Azure-focused file platform supporting authenticated uploads, downloads, and secure file-sharing workflows.

The application connects Azure cloud storage with a Node.js/Express backend and PostgreSQL.

Key technologies include:

- Microsoft Azure
- Azure Blob Storage
- Node.js
- Express
- PostgreSQL
- Authentication
- File uploads and downloads
- Share-link workflows
- Azure-oriented cloud architecture

**Case Study:**  
`/projects/azuredrop`

---

### Minerva Sentinel

**Hybrid-Cloud Monitoring & Observability Platform**

Minerva Sentinel is a hybrid-cloud monitoring platform built to bring infrastructure telemetry, containers, logs, metrics, alerts, incidents, and operational workflows into one interface.

The project combines cloud engineering, application development, DevOps automation, monitoring, and infrastructure troubleshooting.

Engineering areas include:

- Host and infrastructure monitoring
- Metrics and logs
- Incident acknowledgement and resolution workflows
- Docker container monitoring
- AWS account integration
- IAM role-based access
- AWS STS AssumeRole
- PostgreSQL-backed operational data
- GitHub Actions CI/CD
- Amazon ECR
- Amazon EKS
- Amazon RDS
- React-based monitoring dashboard

**Case Study:**  
`/projects/minerva-sentinel`

---

## Additional Engineering Work

The portfolio also highlights practical work involving:

**Docker**
- Containerized Node.js applications
- Docker images
- Docker Compose
- Container networking
- Port exposure
- Docker Hub workflows

**Kubernetes**
- Deployments
- ReplicaSets
- Pods
- Services
- Namespaces
- Minikube
- Amazon EKS
- kubectl troubleshooting

**Terraform**
- Infrastructure as Code
- AWS VPC
- EC2
- RDS
- ALB
- IAM
- ECR
- Secrets Manager
- Cloud networking

---

## Engineering Stack

### Cloud

- AWS
- Microsoft Azure
- EC2
- S3
- RDS
- IAM
- VPC
- ALB
- ECR
- EKS
- CloudFront
- ACM
- STS
- Secrets Manager
- Azure Virtual Machines
- Azure VNet
- Azure Resource Groups
- Azure Storage Accounts
- Azure Blob Storage
- Azure Monitor

### DevOps & Infrastructure

- Docker
- Docker Compose
- Kubernetes
- Minikube
- Terraform
- GitHub Actions
- CI/CD
- OpenID Connect
- Git
- GitHub

### Monitoring & Observability

- Grafana
- AWS CloudWatch
- Azure Monitor
- Metrics
- Logs
- Dashboards
- Alerting
- Incident workflows
- Infrastructure monitoring
- Observability

### Systems & Automation

- Linux
- Ubuntu
- WSL
- Bash
- Python
- SSH
- Networking
- Troubleshooting

### Application & Data

- Node.js
- Express
- React
- Next.js
- PostgreSQL
- SQL
- Socket.IO
- REST APIs

---

## Portfolio Experience

The website includes interactive Cloud and DevOps-inspired UI elements such as:

- Animated CI/CD delivery pipelines
- Terminal-style operational workflows
- Cloud infrastructure topology
- AWS and Azure visual flows
- Kubernetes deployment visualization
- Monitoring and observability indicators
- DevOps-themed micro-interactions
- Responsive mobile navigation
- Floating recruiter contact bot
- Downloadable résumé
- Individual engineering case studies

The motion system also respects `prefers-reduced-motion` for improved accessibility.

---

## Tech Stack

This portfolio is built with:

- **Next.js**
- **React**
- **TypeScript**
- **CSS**
- **Next.js App Router**
- **Next Image**
- **Vercel**

---

## Project Structure

```text
divine-portfolio/
├── app/
│   ├── components/
│   ├── data/
│   ├── projects/
│   │   ├── iceman/
│   │   ├── clouddrop/
│   │   ├── azuredrop/
│   │   └── minerva-sentinel/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
│
├── public/
│   ├── divine-profile.png
│   └── resume.pdf
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md