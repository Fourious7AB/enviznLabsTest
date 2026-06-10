import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";
import avatar5 from "../assets/images/avatar-5.png";
import avatar6 from "../assets/images/avatar-6.png";

export default function FloatingAvatars() {
  return (
    <div className="relative h-[380px] w-full">

      <img
        src={avatar1}
        alt=""
        className="absolute top-0 left-10 w-28 h-28 rounded-full border-4 border-white/20"
      />

      <img
        src={avatar2}
        alt=""
        className="absolute top-8 right-8 w-24 h-24 rounded-full border-4 border-white/20"
      />

      <img
        src={avatar3}
        alt=""
        className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white/20"
      />

      <img
        src={avatar4}
        alt=""
        className="absolute bottom-24 left-0 w-24 h-24 rounded-full border-4 border-white/20"
      />

      <img
        src={avatar5}
        alt=""
        className="absolute bottom-0 left-[45%] w-24 h-24 rounded-full border-4 border-white/20"
      />

      <img
        src={avatar6}
        alt=""
        className="absolute bottom-20 right-0 w-28 h-28 rounded-full border-4 border-white/20"
      />
    </div>
  );
}