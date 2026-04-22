@echo off
set GIT="C:\Program Files\Git\bin\git.exe"
set GH="C:\Program Files\GitHub CLI\gh.exe"
%GIT% commit -m "Initial CV website - Finnish and English versions"
%GH% auth login --web
