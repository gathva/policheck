import Link from "next/link";
import { signup } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Info } from "lucide-react";

export default async function RegistroPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedSearchParams = await searchParams;
    const message = typeof resolvedSearchParams.message === 'string' ? resolvedSearchParams.message : '';
    const error = typeof resolvedSearchParams.error === 'string' ? resolvedSearchParams.error : '';

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="w-full max-w-md space-y-8 bg-card border border-border p-8 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                        <span className="font-bold text-2xl tracking-tight">PoliCheck</span>
                    </Link>
                    <h2 className="text-center text-3xl font-extrabold text-foreground">
                        Crear cuenta
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        ¿Ya tienes cuenta?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-primary hover:text-primary/80"
                        >
                            Inicia sesión
                        </Link>
                    </p>
                </div>

                {message && (
                    <div className="p-4 rounded-md bg-blue-50 text-blue-800 flex items-start gap-3">
                        <Info className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">{message}</p>
                    </div>
                )}

                {error && (
                    <div className="p-4 rounded-md bg-red-50 text-red-800 flex items-start gap-3">
                        <Info className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <form className="mt-8 space-y-6" action={signup}>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1"
                                placeholder="tu@correo.com"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="mt-1"
                                placeholder="••••••••"
                                minLength={6}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Registrarse
                    </Button>
                </form>
            </div>
        </div>
    );
}
