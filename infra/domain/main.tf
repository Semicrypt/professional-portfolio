terraform {
  required_version = ">= 1.6.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }

    vercel = {
      source  = "vercel/vercel"
      version = "~> 5.0"
    }
  }
}

provider "cloudflare" {}

provider "vercel" {
  team = "pippin2"
}

locals {
  domain     = "ifeanyi.work"
  www_domain = format("www.%s", "ifeanyi.work")
}

# ----------------------------------------------------------
# EXISTING VERCEL PROJECT
# ----------------------------------------------------------

data "vercel_project" "portfolio" {
  name = "professional-portfolio"
}

# ----------------------------------------------------------
# CLOUDFLARE ZONE
# ----------------------------------------------------------

data "cloudflare_zones" "portfolio" {
  name      = local.domain
  max_items = 1
}

locals {
  cloudflare_zone_id = data.cloudflare_zones.portfolio.result[0].id
}

# ----------------------------------------------------------
# VERCEL PROJECT DOMAINS
# ----------------------------------------------------------

resource "vercel_project_domain" "apex" {
  project_id = data.vercel_project.portfolio.id
  domain     = local.domain
}

resource "vercel_project_domain" "www" {
  project_id = data.vercel_project.portfolio.id
  domain     = local.www_domain

  redirect             = vercel_project_domain.apex.domain
  redirect_status_code = 308
}

# ----------------------------------------------------------
# CLOUDFLARE DNS
# ----------------------------------------------------------

resource "cloudflare_dns_record" "apex" {
  zone_id = local.cloudflare_zone_id

  name    = local.domain
  type    = "A"
  content = "76.76.21.21"

  ttl     = 1
  proxied = false

  comment = "Portfolio apex to Vercel - Terraform managed"
}

resource "cloudflare_dns_record" "www" {
  zone_id = local.cloudflare_zone_id

  name    = local.www_domain
  type    = "CNAME"
  content = "cname.vercel-dns-0.com"

  ttl     = 1
  proxied = false

  comment = "Portfolio www to Vercel - Terraform managed"
}

output "vercel_project_id" {
  value = data.vercel_project.portfolio.id
}

output "cloudflare_zone_id" {
  value = local.cloudflare_zone_id
}

output "domain" {
  value = local.domain
}
