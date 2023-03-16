Title: Freeup your diskspace with "dua"
Date: 03/15/23 22:36
Tags: ubuntu, freeup, diskspace
Authors: Do Anh Tu


This evening I want to freeup my diskspace, since 50 GB left (1/10 of my diskspace) is a warning.

Before that I've tried with `du` and `sort` but it's so slow and hard to use. 

Then I found `dua` (Disk Usage Analyzer) tool and it is a god send. So good.

To install, just run this command:

```bash
curl -LSfs https://raw.githubusercontent.com/Byron/dua-cli/master/ci/install.sh | \
    sh -s -- --git Byron/dua-cli --target x86_64-unknown-linux-musl --crate dua --tag v2.17.4
```

then `dua` any directory you want (with `/*` after path).

For example: `dua ~/.cache/*` and `dua ~/.local/*` may supprise you like it does to me.


Try and find out. Good luck.
