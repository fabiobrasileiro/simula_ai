declare interface SiderbarProps {
  user: User;
}

declare interface FooterProps {
  user: User;
  type?: "mobile" | "desktop";
}

interface ResultData {
  id: string;
  title: string;
  score: string; // Exemplo: "7/10"
  time: string; // Exemplo: "05:32"
  date: string; // Exemplo: "16/01/2025"
}