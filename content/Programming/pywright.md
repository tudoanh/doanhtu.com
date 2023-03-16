Title: Pywright - Render javascript websites  
Date: 11/19/22 22:36  
Tags: playwright, python, scraping, tutorial, pywright  
Authors: Do Anh Tu

## What is Playwright?

Demo: [pywright.fly.dev](https://pywright.fly.dev)

Playwright is a browser automation library from Microsoft. It can be used to automate tasks in the browser, for testing purpose.

But we can use it to scrape data from websites that use javascript to render the content.

Think about Facebook, Twitter, Instagram, etc. They use javascript to render the content. So we can't scrape them with normal tools like `requests` or `scrapy`.

Selenium is a popular tool for scraping javascript websites. It's powerful, have a lot of features, but it's slow and hard to use.

Playwright is a newplayer in this field. It's fast, have excelent simple API.

## What is Pywright?

**Pywright** is a API service writen in python that use Playwright to render javascript websites. You can easily deploy it to any cloud provider then use it as a service.

## Install Pywright

I've created a docker image for Playwright. It's contain a simple Flask API server, so you can use it as a microservice.

I will create only 2 `workers` by default, you can change it by setting `WORKERS` environment variable.

## How to use Pywright

Just use `POST` method to send a request to the server at endpoint `/scrape`.

The request body must be a JSON object with 1 field: `url`.

```json
{
  "url": "https://ipinfo.io"
}
```

The response will be a HTML string of the website.

## Example

Example with `httpie`:

```bash
http POST http://localhost:5000/scrape url=https://ipinfo.io
```

or with `curl`:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://ipinfo.io"}' http://localhost:5000/scrape
```

or with `requests`:

```python
import requests

url = "http://localhost:5000/scrape"

html = requests.post(url, json={"url": "https://ipinfo.io"}).text

print(html)
```
