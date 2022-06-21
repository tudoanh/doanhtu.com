Title: Trick for Python dev
Date: 05/03/22 10:27
Tags: python, pyenv
Authos: Do Anh Tu

If you are a Python dev, I will share with you this trick to avoid future Python related problems.

After install a new, fresh OS, you should install those [dependencies](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)

Example, after installed a new Ubuntu for my PC, I will run this command

```bash
sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

Then I will install `pyenv`, which I think is the best python version management system.

```bash
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

And I never have a problem with Python anymore.
