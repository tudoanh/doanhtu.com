Title: Move Docker volumes to other server
Date: 06/02/22 18:43
Tags: docker, server, volume
Authors: Do Anh Tu

### New home

I've been self-hosted a few services for my daily needs, and I choosed Hetzner because of their's pricing.

But now after I know Contabo, I will move my services to Contabo, because it's cheaper and more powerful.

<img src="{static}/static/images/contabo.png" />

<img src="{static}/static/images/hetzner.png" />

I can reduce the server cost for about 30%. Neet.

But I don't want to lose my data. And I don't want to spent a lot of time migrate things either.

Luckily, all of my projects was deployed using Docker. If you don't know Docker, now is good time to start because it's awesome.

### Moving data

Let's say I want to move from server A (Hetzner) to server B (Contabo)

And my jobs now are:

1. Generate ssh key (`ssh-keygen -t ed25519`) and add public key to server B `~/.ssh/authorized_keys` file.
2. `rsync -av` my projects from A to B
3. Find the right directory where Docker bind volumes with `docker inspect <container_name> | grep "Source"`
   <img src="{static}/static/images/inspect_docker.png" style="padding-top: 10px;" />

4. `tar cvf` everything inside `.../_data`
5. `rsync` tar files to new server
6. `tar xvf` them to new `~/backup` directory
7. Build and up docker services
8. Stop services
9. `rsync` backup directory to binded directory path from `step 3`
10. Repeat step 7

After that you can safely delete the extracted directories. Install `nginx` and copy config files from A -> B.

You might want to keep the `tar` file for a bit longer to prevent issues.
