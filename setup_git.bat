@echo off
set GIT="C:\Program Files\Git\bin\git.exe"
%GIT% config user.email "janne.henrik.juote@gmail.com"
%GIT% config user.name "Janne Juote"
%GIT% add .
%GIT% status
