import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="font-bold text-base tracking-tight">
            Poli<span className="text-primary">Check</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Políticos
          </Link>
          <Link href="/ranking" className="hover:text-foreground transition-colors">
            Ranking
          </Link>
          <Link href="/temas" className="hover:text-foreground transition-colors">
            Temas Públicos
          </Link>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-medium px-3 py-1.5 rounded-md border border-border hover:bg-muted transition-colors"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}
