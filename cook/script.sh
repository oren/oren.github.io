dish="$1"

mkdir $dish && mv $dish.md $dish/README.md && cp baked-salmon/_navbar.md $dish/ && mv images/$dish* $dish/
