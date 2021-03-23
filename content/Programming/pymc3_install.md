Title: PyMC3 install tips (Ubuntu 20.04)
Date: 23/03/21 11:58
Tags: pymc3, theano, install
Authors: Do Anh Tu


To install and use PyMC3 with pyenv without Theano error, when install python you need to add flag **CONFIGURE_OPTS=--enable-shared**

Example:  

```bash
CONFIGURE_OPTS=--enable-shared pyenv install 3.8.5
```

Source: https://stackoverflow.com/questions/21342931/error-importing-theano
