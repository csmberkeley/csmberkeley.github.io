import sys
import os
# Checks if any folder in people matches the provided thing
fn = sys.argv[1]
size = os.path.getsize(fn)
b = open(fn, "rb").read()
for f in os.listdir("people"):
    f = os.path.join("people", f)
    # if os.path.getsize(f) == size:
    if open(f, "rb").read() == b:
        print(f)
