# Hypnos discord bot

## Description

The bot features various different commands that can display information about the server and more. 

The bot is still a work in progress, some commands may not fully function or they may contain issues.

### Dependencies

* Any os, Linux & Windows install/run scripts are included
* Node 11 or higher

### Installing
* clone the repository with $ git clone https://github.com/HypnosServer/Discord-Bot.git or download and unzip the latest release
* Windows: Run the download.bat file
* Linux: ./download.sh
* Fill out config.json
* Recommended: edit some of the command files to contain your server's information

### Running the bot

* Windows: Run the start.bat file
* Linux: ./start.sh (has auto-restart)

## Help

If you run into any issues, please contact AFunkyMonk#9467 on discord. Or join the [Hypnos Discord](https://discord.gg/BKadJsM)

## Authors

Contributors names and contact info

ex. AFunkyMonk#9467  
ex. NotCreative#0041

## Commands

The bot's help command contains additional information on how to use commands 

If you would like to create a new command please see samplecommand.js

* Admin only
    * The bot admin role id can be specified in config.json
        - botstatus | allows you to change the bot's discord status
        - color | allows assignment of in game color via scoreboard teams
        - command-add | allows you to upload a js file from discord as a new command
        - execute | allows you to execute a command via rcon
        - op | grants op to a player via rcon
        - reload | reload a command from disk
* Member only
    * The bot member role id can be specified in config.json
        - backup-list | displays all the files in a directory (used for our backup system)
        - smp-region | sends specified region file over discord
        - cmp-region | sends specified region file over discord
        - grinder | gives and removes role specified in config.json
        - info | dms the user information about the server
        - ip | dms the user server ips
        - location | creates an editable embed of coord locations
        - structure | allows you to download structure files from cmps
* Public
    * Commands available for public user
        - age | displays the age of the server
        - hardware | displays embed of hardware
        - help | this command does magic
        - invite | displays discord invites
        - math | calculator command
        - ping | displays bot ping
        - score | send embed to discord of specified score - optional old image rendering mode coming soon
        - status | queries specific ip and displays information about the server
        - website | displays website links
        - world-size | displays world size information   

## Version History
* 0.5
    * Added a command
        - minesweeper | fun mini game
        - botstatus | allows you to switch the status of the bot
        - execute | execute any command through rcon
        - structure | download and upload structure files
        - grinder | allows members to give/remove grinder role from themselves
    * Additional changes
        - Changed cmp ports to be stored in config file
        - add command shows how many commands when used
        - fixed small issues with color and op command
* 0.4
    * Added a command
        - command-add | Direct upload more commands from discord
    * Additional changes
        - Switched from admin array to an admin role
* 0.3
    * Added some commands
        - op | Allows you to give or revoke op to a player via command
        - color | allows you to assign a color to a player via command
    * Additional minor changes
* 0.2
    * Added some commands
        - info | Sends info about the server in dm's
        - ip | Sends all the ips in dm's
        - hardware | Sends info about nc's servers
    * Changed some commands
        - invite | Fixed the group
        - math | Made it work in chat brigde, by outputting in plain text
        - score | Made it work with scoreboard above 2048 chars (new limmit is 5800 chars)
* 0.1
    * Initial Release
