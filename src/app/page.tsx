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
    <div className="flex min-h-full flex-1 items-start justify-center px-6 py-16 sm:py-24">
      <main className="flex w-full max-w-md flex-col items-center gap-10">
        <Profile
          name="김개발"
          bio="풀스택 개발자| 요즘에는 AI 개발에 관심이 많아요"
          avatarUrl="https://placehold.co/150x150/orange/white.png"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
