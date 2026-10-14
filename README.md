# spareforge.net media (orphan branch)

Encoded videos for spareforge.net. This branch shares no history with `main`,
so large binaries never bloat the site repository. The deploy workflow on
`main` checks this branch out into `public/media/` before `npm run build`.

| Folder | Content | Encode |
|---|---|---|
| hero/ | silent 6 s key-art loop (no HUD) | 1280x720 + 854x480, AV1 WebM + H.264 MP4 |
| trailer/ | 81 s gameplay showcase (music + game sound) | H.264 1080p / 720p, AAC |
| shorts/ | four 9:16 shorts, English AI narration, subtitles burned in, social end cards cut off | 720x1280 H.264, AAC 96k |
| loops/ | six 4 s pillar loops, silent | 640x360, AV1 WebM + H.264 MP4 |

Re-encode with `encode_media.sh` (sources in SpareForge/build and SpareForge_showcase_work).
Replace files by committing here; keep every file well under 100 MB.
