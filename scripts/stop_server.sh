#!/bin/bash
rm -r /var/www/html/*
isExistApp = `pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop
fi

