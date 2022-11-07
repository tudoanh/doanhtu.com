Title: Fly.io - perfect solution for self-hosted services
Date: 11/07/22 09:47
Tags: fly.io, server, review, awesome
Authors: Do Anh Tu

## Fly.io - A review

After a month trying Fly.io, I must say that:

<span class="green-underline">Fly.io is awesome!</span>.

After a year using Hosthatch, I tired of their terrible uptime, sometime the servers is down for 2 days. I'm not sure why, but I'm sure that I'm not going back to them.

Luckily, I've found Fly.io. It's cheap, fast and reliable. I'm moving all my services to Fly.io. And to be honest, it's so easy that make me feel like I'm cheating.

## Guide to migrate

If you have a Dockerfile for your service, you can migrate to Fly.io in 5 minutes.

Here are some examples.

### [Vaultwarden (No Postgres, No Redis)](https://github.com/dani-garcia/vaultwarden)

**Create Dockerfile**

```dockerfile
FROM vaultwarden/server:latest
```

**Launch a new app**

Run `fly launch` and follow the instruction. You can choose any name and server region you want.

After deployed, you can access at `<app-name>.fly.dev`.

**Create new volume**

Just need 1GB for now, you can scale later. Why 1GB? Because they give us 3GB storage for free every month. You can run 3 apps for free.

```bash
fly volumes create <vol-name> --region sin --size 1
```

After created, add `[mount]` section to your `fly.toml` file.

```toml
[mounts]
source="<vol-name>"
destination="/data"
```

**Set ENVs**

There are 3 ways to set ENVs (Secrets) for your app:

- Using `flyctl secrets set` command
- Using `[env]` section in `fly.toml` file
- `cat .env | flyctl secrets import`

**Deploy**

Run `flyctl deploy` to deploy your app.

You can also use `flyctl deploy --no-cache` to skip cached build, or `flyctl deploy --local-only` to deploy using local docker.

Then run `fly open` to open `<app-name>.fly.dev`

**Migrate data**

You can use the Web UI of Vaultwarden to export/import data as JSON format.

7.  **Config subdomain**

First, execute `flyctl certs create <app-name>.<your-domain>.com`. Then add a new CNAME record to your DNS provider, redirect to `<app-name>.fly.dev`.

If the result of `flyctl certs check <app-name>.<your-domain>.com` look like this, you are successfully deployed Vaultwarden.

    The certificate for <app-name>.<your-domain>.com has been issued.
    Hostname                  = <app-name>.<your-domain>.com

    DNS Provider              = cloudflare

    Certificate Authority     = Let's Encrypt

    Issued                    = rsa,ecdsa

    Added to App              = 27 minutes ago

    Source                    = fly
