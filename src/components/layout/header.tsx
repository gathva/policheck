import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold">PoliCheck</div>
        <ThemeToggle />
      </div>
    </header>
  );
}
