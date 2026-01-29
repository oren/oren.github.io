#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <image-path>"
    exit 1
fi

input="$1"
magick "$input" -resize 800x "$input"
