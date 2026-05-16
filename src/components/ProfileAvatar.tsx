import { useState } from "react";

interface Props {
  size?: number;
  className?: string;
}

const ProfileAvatar = ({ size = 160, className = "" }: Props) => {
  const [errored, setErrored] = useState(false);
  return (
    <div
      className={`relative rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] ${className}`}
      style={{ width: size, height: size }}
    >
      {!errored ? (
        <img
          src="/profile.jpg"
          alt="Yembuluri H N Venkata Satya Narasimha"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 text-primary font-bold" style={{ fontSize: size * 0.32 }}>
          HN
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
