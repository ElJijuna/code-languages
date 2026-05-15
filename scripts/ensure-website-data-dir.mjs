import { mkdir } from "node:fs/promises";

await mkdir(new URL("../docs/data/", import.meta.url), { recursive: true });
