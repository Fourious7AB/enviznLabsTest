import { useState } from "react";
import { Play } from "lucide-react";
import thumbnail from "../assets/images/video-thumbnail.jpeg";

export default function VideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="mt-20">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div className="relative h-[450px]">

          {!playVideo ? (
            <>
              <img
                src={thumbnail}
                alt="Video"
                className="w-full h-full object-cover "
              />

              <div className="absolute inset-0 bg-black/30" />

              <button
                onClick={() => setPlayVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Play
                    size={28}
                    fill="white"
                    className="ml-1"
                  />
                </div>
              </button>
            </>
          ) : (
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/duf3tdqit/video/upload/v1781067406/vidssave.com_A_day_in_the_life_of_a_sales_manager___See_how_they_run_360P_aurv8a.mp4"
                type="video/mp4"
              />
            </video>
          )}

        </div>
      </div>
    </div>
  );
}