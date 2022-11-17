Title: Deploy "The Lounge" on Fly.io
Date: 11/17/22 21:59  
Tags: fly.io, server, irc, howto  
Authors: Do Anh Tu

## What is "The Lounge"?

"The Lounge" is a self-hosted web IRC client. It's a fork of Shout, which is no longer maintained. The Lounge is actively maintained and has a lot of features.

Screen shot:

![The Lounge](https://thelounge.chat/img/thelounge-screenshot.png)

Website:

[https://thelounge.chat/](https://thelounge.chat/)

## Deploy on Fly.io

Follow these steps to deploy "The Lounge" on Fly.io:

**1. Create Dockerfile**

```dockerfile
FROM thelounge/thelounge:latest

EXPOSE 9000
```

**2. Create new Fly.io app**

Run `fly launch` and follow the instruction. You can choose any name and server region you want.

Or you can copy this `fly.toml` file (replace `<app-name>` with your app name):

```toml
# fly.toml file generated for iirc on 2022-11-17T21:46:27+07:00

app = "<app-name>"
kill_signal = "SIGINT"
kill_timeout = 5
processes = []

[env]

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[mounts]
source="ircdata"
destination="/var/opt/thelounge"

[[services]]
  http_checks = []
  internal_port = 9000
  processes = ["app"]
  protocol = "tcp"
  script_checks = []
  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

**3. Create new volume**

You need to create a new volume to store data. The Lounge will store all data in `/var/opt/thelounge` folder.

```bash
fly volumes create ircdata --region sin --size 1
```

I've added `[mount]` section to my `fly.toml` file above.

```toml
[mounts]
source="ircdata"
destination="/var/opt/thelounge"
```

**4. Deploy**

```bash
fly deploy
```

**5. Create new user**

```bash
fly ssh console -C "su -s /bin/sh node"
```

Then run this command to create new user:

```bash
thelounge add <username>
```

**6. Access**

You can access your "The Lounge" at `<app-name>.fly.dev`. Or run `fly open` to open it in your browser.

Good luck and have fun.
