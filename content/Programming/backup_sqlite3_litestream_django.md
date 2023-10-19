Title: Backup Sqlite3 with Litestream - Tutorial
Date: 10/19/23 11:21
Tags: litestream, sqlite3, backup
Authors: Do Anh Tu

# What is backup and restore?

Backup: Imagine on a Sunday morning, your hard drive dies. You can't access anything. Your bitcoin wallet's private key is the only copy, and it's on that hard drive. Sounds horrifying, right? That's when a backup comes in handy and saves the day (and maybe your life too).

Restore: Backups are amazing, but if done incorrectly, you're screwed. So every time you make a backup, make sure to try restoring it, even just once is more than enough. You'll thank yourself later. You'll feel like a god, being able to see the future and prevent disasters.

In this era of information, it's crucial to have a snapshot of your important data somewhere else. Having three copies will do the trick. More is even better.

# What is Sqlite3?

Sqlite3 is an amazing database; you don't need to run any processes for your database anymore. Just write to a single database file `db.sqlite3` and you will have more than enough for 90% of whatever you want to build. And if you only have one file, backing up and restoring it is very simple, if you use Litestream.

# What is Litestream?

You can read more about Litestream [here](https://litestream.io/how-it-works/).

> Litestream is a streaming replication tool for SQLite databases. It runs as a separate background process and continuously copies write-ahead log pages from disk to one or more replicas. This asynchronous replication provides disaster recovery similar to what is available with database servers like Postgres or MySQL.

Summary: it's a backup tool for Sqlite3. And it's only write the changes, so it's very fast and space-efficient.

# Tutorial

Imagine you have a Django project, and you want to backup your Sqlite3 database. Here is how you do it.

Given that your database file is in `./db.sqlite3`.

Install Litestream (For ubuntu users)

```bash
wget 'https://github.com/benbjohnson/litestream/releases/download/v0.3.11/litestream-v0.3.11-linux-amd64.deb'

sudo dpkg -i litestream-v0.3.11-linux-amd64.deb

rm litestream-v0.3.11-linux-amd64.deb
```

First you need to set some ENVs:

```bash
export AWS_SECRET_ACCESS_KEY=your-aws-secret AWS_ACCESS_KEY_ID=your-aws-key REPLICA_URL="s3://backup/your-project"
```

### Backup

For example, you have a bucket on S3 named `backup`, and you want to backup your database to that bucket.

You can run this command to start backing up:

```bash
litestream replicate ./db.sqlite3 "${REPLICA_URL}"
```

That's it. You can run this command in a screen/tmux session, or use systemd to run it as a service. Now your database is backed up every time you write to it.
The interval is 1 second.

### Restore

To restore (on other location), all you need to do is

```bash
litestream restore -v -if-replica-exists -o ./db.sqlite3 "${REPLICA_URL}"
```

Awesome, right?
