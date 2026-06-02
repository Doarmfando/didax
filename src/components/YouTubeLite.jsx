import { useMemo, useState } from "react";
import { Play } from "lucide-react";

function extractYouTubeId(url) {
  if (!url || url.includes("PENDIENTE")) return null;

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export default function YouTubeLite({ url, title, cover }) {
  const [active, setActive] = useState(false);
  const videoId = useMemo(() => extractYouTubeId(url), [url]);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : cover;

  if (!videoId) {
    return (
      <div className="video-placeholder">
        <div>
          <span>Video pendiente</span>
          <p>Reemplaza esta URL cuando tengas el enlace final de YouTube.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-lite">
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          className="video-poster"
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Reproducir video: ${title}`}
        >
          <img src={thumbnail} alt="" loading="lazy" />
          <span className="play-badge">
            <Play size={30} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
