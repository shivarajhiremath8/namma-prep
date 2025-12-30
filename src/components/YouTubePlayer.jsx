import { useState } from "react";

const getEmbedUrl = (url) => {
    if (!url) return null;

    if (url.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
    }

    if (url.includes("watch?v=")) {
        return `https://www.youtube.com/embed/${url.split("watch?v=")[1]}`;
    }

    return null;
};

const YouTubePlayer = ({ url }) => {
    const [play, setPlay] = useState(false);
    const embedUrl = getEmbedUrl(url);

    if (!embedUrl) return null;

    return (
        <div className="w-full">
            {!play ? (
                <button
                    onClick={() => setPlay(true)}
                    className="w-full flex items-center justify-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 py-3 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                    ▶ Watch explanation video
                </button>
            ) : (
                <div className="relative w-full pt-[56.25%] rounded-md overflow-hidden">
                    <iframe
                        src={embedUrl}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            )}
        </div>
    );
};

export default YouTubePlayer;
