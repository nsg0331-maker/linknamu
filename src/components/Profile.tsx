import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-[0_10px_28px_-6px_rgba(154,90,40,0.35)] ring-4 ring-white/80 sm:h-36 sm:w-36">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          fill
          sizes="(min-width: 640px) 144px, 112px"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold text-[#4a3626]">{name}</h1>
        <p className="mt-1.5 text-sm text-[#8a6f5c]">{bio}</p>
      </div>
    </div>
  );
}
