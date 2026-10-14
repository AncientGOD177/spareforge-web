#!/usr/bin/env bash
# Encodes all site videos into the orphan `media` worktree.
# Sources stay where they are; nothing here touches the main repo history.
set -euo pipefail
FF="/c/Users/Ibrahim/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.2-full_build/bin/ffmpeg"
OUT=/z/ClaudeCode/SpareForge-Web-media
SC=/z/ClaudeCode/SpareForge/build/showcase
IG=/z/ClaudeCode/SpareForge/build/instagram
WK=/z/ClaudeCode/SpareForge_showcase_work
mkdir -p "$OUT/hero" "$OUT/trailer" "$OUT/shorts" "$OUT/loops"
Q="-v error -y"
H264="-c:v libx264 -preset slow -pix_fmt yuv420p -movflags +faststart"
AV1="-c:v libsvtav1 -preset 6 -pix_fmt yuv420p10le"

what="${1:-all}"

# ---------- hero loop (silent, seamless crossfade, 0.75x speed) ----------
if [[ $what == all || $what == hero ]]; then
  # source: KA/take.avi (HUD-free 4K key-art take). Usable static-camera part is 3.9s..9.1s.
  # Slowed to 0.75x; the last 0.9s crossfades into the first 0.9s for a seamless loop.
  for size in 1280x720 854x480; do
    w=${size%x*}; h=${size#*x}
    FILT="[0:v]trim=start=3.9:end=9.1,setpts=(PTS-STARTPTS)/0.75,fps=24,scale=${w}:${h}:flags=lanczos,split[a][b];[a]trim=start=0.9,setpts=PTS-STARTPTS[main];[b]trim=end=0.9,setpts=PTS-STARTPTS[head];[main][head]xfade=transition=fade:duration=0.9:offset=$(python -c "print(round((9.1-3.9)/0.75-0.9-0.9,3))")[v]"
    $FF $Q -i "$WK/KA/take.avi" -filter_complex "$FILT" -map "[v]" -an $H264 -crf $([[ $w == 1280 ]] && echo 23 || echo 25) "$OUT/hero/hero-$h.mp4"
    $FF $Q -i "$WK/KA/take.avi" -filter_complex "$FILT" -map "[v]" -an $AV1 -crf $([[ $w == 1280 ]] && echo 33 || echo 36) "$OUT/hero/hero-$h.webm"
  done
fi

# ---------- trailer 16:9 ----------
if [[ $what == all || $what == trailer ]]; then
  T="$SC/SpareForge_Showcase_EN_16x9.mp4"
  $FF $Q -i "$T" -vf "fps=30,scale=1920:1080:flags=lanczos" $H264 -crf 25 -maxrate 1900k -bufsize 3800k -c:a aac -b:a 128k "$OUT/trailer/trailer-1080.mp4"
  $FF $Q -i "$T" -vf "fps=30,scale=1280:720:flags=lanczos" $H264 -crf 26 -maxrate 900k -bufsize 1800k -c:a aac -b:a 96k "$OUT/trailer/trailer-720.mp4"
  $FF $Q -i "$T" -vf "fps=30,scale=1920:1080:flags=lanczos" $AV1 -crf 42 -c:a libopus -b:a 96k "$OUT/trailer/trailer-1080.webm"
fi

# ---------- shorts 9:16 (AI narration, subtitles burned in) ----------
if [[ $what == all || $what == shorts ]]; then
  # Cut before each social end card ("join the community / link in bio"); short fade out.
  enc_short () { # src name duration
    local fo=$(python -c "print(round($3-0.5,2))")
    $FF $Q -i "$1" -t "$3" -vf "fps=30,scale=720:1280:flags=lanczos,fade=t=out:st=$fo:d=0.5" -af "afade=t=out:st=$fo:d=0.5" $H264 -crf 27 -maxrate 1300k -bufsize 2600k -c:a aac -b:a 96k "$OUT/shorts/$2.mp4"
  }
  enc_short "$SC/SpareForge_Short_Plus10Glow_EN.mp4" plus10-glow 29.4
  enc_short "$SC/SpareForge_Short_SkillVFX_EN.mp4" skill-vfx 12.2
  enc_short "$SC/SpareForge_Short_QuestGuidance_EN.mp4" quest-guidance 13.9
  enc_short "$IG/SpareForge_Reel_NewPlayerTutorial_EN.mp4" tutorial 19.3
fi

# ---------- pillar micro-loops 640x360, 4s, silent ----------
if [[ $what == all || $what == loops ]]; then
  loop () { # src start name [extra-filter-before-scale]
    local pre="${4:-}"
    local vf="${pre}fps=24,scale=640:360:flags=lanczos"
    $FF $Q -ss "$2" -t 4 -i "$1" -vf "$vf" -an $H264 -crf 28 "$OUT/loops/$3.mp4"
    $FF $Q -ss "$2" -t 4 -i "$1" -vf "$vf" -an $AV1 -crf 42 "$OUT/loops/$3.webm"
  }
  T1="$WK/T1/take.avi"
  TR="$SC/SpareForge_Showcase_EN_16x9.mp4"
  loop "$T1" 90 loot
  loop "$T1" 125.5 boss
  loop "$T1" 120 coop
  loop "$T1" 153.8 skills
  # refine glow: centre crop of the vertical short (+9 -> +10), captions cropped away
  loop "$SC/SpareForge_Short_Plus10Glow_EN.mp4" 21 refine "crop=1080:608:0:600,"
  # mounts: trailer segment, cropped to skip the HUD and the caption card
  loop "$TR" 45.2 mounts "crop=900:506:350:70,"
fi
echo "encode $what done"
ls -la "$OUT"/*/
