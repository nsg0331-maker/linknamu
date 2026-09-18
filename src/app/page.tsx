import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import type { LinkItem } from "@/types/link";

const links: LinkItem[] = [
  { id: "1", title: "깃허브", url: "https://github.com", icon: "🐙" },
  { id: "2", title: "블로그", url: "https://blog.naver.com", icon: "✍️" },
  { id: "3", title: "이메일 문의", url: "mailto:hello@example.com", icon: "✉️" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-start justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:py-20">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        <Profile
          name="노상근"
          bio="세계 최강 바이브코더"
          avatarInitial="노"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
