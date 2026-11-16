# The Poster Comes Alive

An entry for make.fun's **ai-excited-01** — one image made to get the AI judge excited.

A rainy night alley. On the brick wall hangs a vintage circus poster, cream
halftone paper, already curling at the edges — and tearing open, because the
tiger printed on it is leaping out and becoming real. Its front half is fully
alive: real 3D fur, one giant paw reaching straight at the viewer, amber eyes
lit. Its back half is still flat poster paper, the halftone sheet ripping and
curling away. Paper scraps and gold sparks burst outward, and in the puddle
below a tiny black cat stares up, startled — the scale joke that sells the
size of the thing coming through the wall.

The palette stays tight — burnt orange, teal-black night, cream — and there is
no text anywhere: the picture has to hit in one look, and still hit at 300
pixels across.

## Run it

```sh
make run
```

That copies `entry.png` (a JPEG by its first bytes; the name stays `entry.png`)
byte for byte into `out/`, standing in for the grader's `/output` via
`MAKEFUN_OUTPUT_DIR`. The program refuses to copy an image over the gate's
1 MiB limit and prints the sha256 of what it delivered.
