## Prerequisites
- you have npm installed
- there is a spinnaker/gate API running on localhost:8084

## Install
- clone this repo
- npm i -g yarn
- yarn install

## Start
- yarn start

## systemd setup
- in `~/.ssh/config`, add the following entry, after having replaced the values betwwen `<` and `>`:
```
Host spinnaker_tunnel
    HostName <SPINNAKER_HOST>
    IdentityFile <PRIVATE_KEY>
    User <USERNAME>
    LocalForward 9000 127.0.0.1:9000
    LocalForward 8084 127.0.0.1:8084
    LocalForward 8087 127.0.0.1:8087
    ServerAliveInterval 30
    ServerAliveCountMax 3
    ExitOnForwardFailure yes
```

- create `/lib/systemd/system/spinnaker_tunnel.service` with the following content:
```
[Unit]
Description=Setup and keep an ssh tunnel to the spinnaker api running
After=network.target ssh.service

[Service]
Environment=AUTOSSH_GATETIME=0
User=<USERNAME>
ExecStart=/usr/bin/autossh -vvv -M 0 -N spinnaker_tunnel
ExecStop=/usr/bin/pkill -f spinnaker_tunnel

# Restart every >2 seconds to avoid StartLimitInterval failure
RestartSec=5
Restart=always

[Install]
WantedBy=multi-user.target

```

- create `/lib/systemd/system/spinnaker_on_tv_webapp.service` with the following content :
```
[Unit]
Description=Runs a server that serves the spinnaker_on_tv web application
After=spinnaker_tunnel.service

[Service]
WorkingDirectory=/home/pi/Desktop/spinnaker_on_tv/
Environment=BROWSER=none
ExecStart=/bin/sh -c "yarn install && yarn start"
ExecStop=/usr/bin/pkill -f spinnaker_on_tv
Restart=always

[Install]
WantedBy=multi-user.target
```
- enable the systemd services:
```
sudo systemctl enable spinnaker_tunnel
sudo systemctl enable spinnaker_on_tv_webapp
```
- start the systemd services:
```
sudo systemctl start spinnaker_tunnel
sudo systemctl start spinnaker_on_tv_webapp
```
- check the systemd services statuses:
```
sudo systemctl status spinnaker_tunnel spinnaker_on_tv_webapp
```

Contributions are more than welcome !