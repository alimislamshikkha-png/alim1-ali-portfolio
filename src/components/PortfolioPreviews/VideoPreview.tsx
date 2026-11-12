import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Sparkles, Scissors, Clock } from 'lucide-react';

export const VideoPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const duration = 14; // 14 second sample reel

  // Video script scenes with exact timestamps
  const scenes = [
    { start: 0, end: 3.5, hook: "STOP LOSING 4 HOURS", sub: "every day to messy admin work", cut: "Jump Cut #1" },
    { start: 3.5, end: 7.0, hook: "HERE'S THE 3-STEP FIX", sub: "that 7-figure founders use", cut: "Punch-in Zoom" },
    { start: 7.0, end: 11.0, hook: "DELEGATE & SYSTEMIZE", sub: "with standardized daily SOPs", cut: "B-Roll Graphic" },
    { start: 11.0, end: 14.0, hook: "GET YOUR TIME BACK", sub: "hire an organized remote partner", cut: "Final CTA" },
  ];

  // Playback loop timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            return 0; // loop
          }
          return parseFloat((prev + 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Canvas video renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Background gradient canvas
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0a1026');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#060a17');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Dynamic animated grid lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 1;
    const offset = (currentTime * 20) % 40;
    for (let x = -40; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x + offset, height);
      ctx.stroke();
    }

    // Dynamic wave sound visualizer at bottom
    if (isPlaying) {
      const bars = 24;
      const barWidth = width / bars - 4;
      for (let i = 0; i < bars; i++) {
        const h = Math.abs(Math.sin(currentTime * 4 + i)) * 40 + 10;
        ctx.fillStyle = i % 2 === 0 ? 'rgba(56, 189, 248, 0.6)' : 'rgba(168, 85, 247, 0.6)';
        ctx.fillRect(i * (barWidth + 4) + 2, height - h - 30, barWidth, h);
      }
    }

    // Current Scene Detection
    const currentScene = scenes.find((s) => currentTime >= s.start && currentTime < s.end) || scenes[0];

    // Animated dynamic zoom effect based on time
    const zoomProgress = (currentTime - currentScene.start) / (currentScene.end - currentScene.start);

    // Subject Avatar / Video Mockup Center Box
    ctx.save();
    ctx.translate(width / 2, height / 2 - 20);
    const scale = 1 + zoomProgress * 0.08;
    ctx.scale(scale, scale);

    // Holographic subject silhouette
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.beginPath();
    ctx.arc(0, -10, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(0, -25, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 20, 35, Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Word-by-word animated captions
    if (showCaptions) {
      ctx.save();
      ctx.textAlign = 'center';

      // Top hook phrase with yellow/cyan highlight
      ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(currentScene.hook, width / 2, height / 2 + 75);

      // Sub caption
      ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(currentScene.sub, width / 2, height / 2 + 100);

      // Pacing edit badge
      ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.fillStyle = '#c084fc';
      ctx.fillText(`[ ${currentScene.cut} ]`, width / 2, height / 2 + 125);

      ctx.restore();
    }
  }, [currentTime, isPlaying, showCaptions, aspectRatio]);

  return (
    <div className="space-y-6">
      {/* Top Video Toolbar: Aspect Ratio, Captions Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-300">Format:</span>
          <button
            onClick={() => setAspectRatio('9:16')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              aspectRatio === '9:16'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            9:16 Vertical Reel (Shorts/TikTok)
          </button>
          <button
            onClick={() => setAspectRatio('16:9')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              aspectRatio === '16:9'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            16:9 Landscape (YouTube)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCaptions(!showCaptions)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showCaptions
                ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Captions: {showCaptions ? 'Active' : 'Hidden'}
          </button>
        </div>
      </div>

      {/* Video Canvas & Playback Display */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Playable Canvas Mockup */}
        <div className="md:col-span-6 flex justify-center">
          <div
            className={`relative rounded-2xl overflow-hidden bg-black border border-cyan-500/30 shadow-2xl flex flex-col items-center justify-center ${
              aspectRatio === '9:16' ? 'w-64 h-[440px]' : 'w-full max-w-md h-72'
            }`}
          >
            <canvas
              ref={canvasRef}
              width={aspectRatio === '9:16' ? 256 : 448}
              height={aspectRatio === '9:16' ? 440 : 288}
              className="w-full h-full object-cover"
            />

            {/* Play/Pause overlay button when paused */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:scale-105 transition-transform"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 ml-1 fill-current" />
              </button>
            )}

            {/* Bottom Playback Scrubber Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-3 text-xs text-white">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 hover:text-cyan-400 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <div className="flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden cursor-pointer">
                <div
                  className="bg-cyan-400 h-1.5 rounded-full transition-all"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>

              <span className="font-mono text-[10px] text-slate-300">
                0:{currentTime < 10 ? `0${Math.floor(currentTime)}` : Math.floor(currentTime)} / 0:14
              </span>
            </div>
          </div>
        </div>

        {/* Video Editing Retention Metrics & Timeline Log */}
        <div className="md:col-span-6 space-y-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
              Editing Pacing & Retention Architecture
            </span>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Hook Retention Pacing</span>
              <span className="text-emerald-400 font-semibold font-mono">1.5s Jump Cut Interval</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Dead Air Elimination</span>
              <span className="text-white font-mono">100% Breath Removal</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Word-Level Captions</span>
              <span className="text-cyan-300 font-mono">High-Contrast Animated Subtitles</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Audio Leveling</span>
              <span className="text-white font-mono">-14 LUFS Normalized</span>
            </div>
          </div>

          {/* Timeline Cut List */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
              Timeline Marker Breakdown
            </span>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-400">0.0s – 3.5s</span>
                <span className="text-white font-medium">Hook: Problem Agitation</span>
                <span className="text-slate-400">Bold Subtitles</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-400">3.5s – 7.0s</span>
                <span className="text-white font-medium">Body: Solution Teaser</span>
                <span className="text-slate-400">Punch-In Zoom</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-400">7.0s – 11.0s</span>
                <span className="text-white font-medium">Deliverable: SOP Checklist</span>
                <span className="text-slate-400">B-Roll Cut</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-400">11.0s – 14.0s</span>
                <span className="text-white font-medium">Conversion: Direct CTA</span>
                <span className="text-emerald-400 font-semibold">Discovery Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
