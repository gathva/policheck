import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, HelpCircle } from "lucide-react";

interface Politician {
    id: string;
    full_name: string;
    political_party: string;
    position: string;
    profile_image_url: string | null;
    veracity_score?: number | null;
}

interface PoliticianCardProps {
    politician: Politician;
}

function VeracityBadge({ score }: { score: number | null | undefined }) {
    if (score === null || score === undefined) {
        return (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Sin análisis</span>
            </div>
        );
    }
    if (score >= 70) {
        return (
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{score.toFixed(0)}% veracidad</span>
            </div>
        );
    }
    if (score >= 40) {
        return (
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>{score.toFixed(0)}% veracidad</span>
            </div>
        );
    }
    return (
        <div className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-medium">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>{score.toFixed(0)}% veracidad</span>
        </div>
    );
}

function getPartyColor(party: string): string {
    const lower = party.toLowerCase();
    if (lower.includes("udi") || lower.includes("renovación") || lower.includes("evópoli") || lower.includes("republicano")) {
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
    }
    if (lower.includes("socialista") || lower.includes("comunista") || lower.includes("frente amplio") || lower.includes("convergencia")) {
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
    }
    if (lower.includes("democracia cristiana") || lower.includes("ppd") || lower.includes("demócratas") || lower.includes("liberal")) {
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300";
    }
    return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200";
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

export function PoliticianCard({ politician }: PoliticianCardProps) {
    return (
        <Link href={`/politicos/${politician.id}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-2xl">
            <Card className="overflow-hidden border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-0.5">
                <div className="flex items-start gap-4 p-5">
                    {/* Avatar / Foto */}
                    <div className="relative flex-shrink-0 h-16 w-16 rounded-full overflow-hidden border-2 border-border bg-muted">
                        {politician.profile_image_url ? (
                            <Image
                                src={politician.profile_image_url}
                                alt={politician.full_name}
                                fill
                                className="object-cover"
                                sizes="64px"
                                referrerPolicy="no-referrer"
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center text-xl font-bold text-muted-foreground">
                                {getInitials(politician.full_name)}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base leading-tight truncate group-hover:text-primary transition-colors">
                            {politician.full_name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5 truncate">
                            {politician.position}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between gap-2">
                            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full truncate max-w-[160px] ${getPartyColor(politician.political_party)}`}>
                                {politician.political_party.split("(")[0].trim()}
                            </span>
                            <VeracityBadge score={politician.veracity_score} />
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
