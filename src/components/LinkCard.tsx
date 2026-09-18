import type { LinkItem } from "@/types/link";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center text-sm font-medium text-[#4a3626] shadow-[0_4px_16px_-4px_rgba(154,90,40,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_22px_-4px_rgba(154,90,40,0.22)]"
    >
      {link.icon && <span className="mr-2">{link.icon}</span>}
      {link.title}
    </a>
  );
}
