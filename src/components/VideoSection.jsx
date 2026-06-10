import { Play } from "lucide-react";
import thumbnail from "../assets/images/video-thumbnail.jpg";

export default function VideoSection() {
  return (
    <div className="mt-20">

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">

        <div className="relative aspect-video">

          <img
            src={thumbnail}
            alt="Video"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-black/30" />

          <button className="absolute inset-0 flex items-center justify-center">

            <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">

              <Play
                size={28}
                fill="white"
                className="ml-1"
              />

            </div>

          </button>

        </div>

      </div>

    </div>
  );
}