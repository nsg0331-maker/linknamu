type ProfileProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function Profile({ name, bio, avatarInitial }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-900 text-3xl font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
        {avatarInitial}
      </div>
      <div>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
