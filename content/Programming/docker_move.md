Title: Move docker data to another location (Ubuntu)
Date: 18/03/21 20:12
Tags: programming
Authors: Do Anh Tu


Goal: I want to move my existing Docker data to new location (*/mnt/Data*), for more free space.

Solution:

1. Stop Docker service  
`sudo systemctl stop docker`

2. Edit `/etc/docker/daemon.json` and insert this  
```json
{
    "graph": "/mnt/Data/docker"
}
```

3. Move old data to new location  
`sudo rsync -aqxP /var/lib/docker /media/Data/`

4. Temporary move old data to other directory  
`sudo mv /var/lib/docker /var/lib/docker.old`

5. Start docker service  
`sudo systemctl start docker`

6. Check new config work  
`docker info | grep -i root`
This should output new location

7. Remove old data  

8. Profit
