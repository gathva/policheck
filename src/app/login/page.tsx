import Link from "next/link";
import { login } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="w-full max-w-md space-y-8 bg-card border border-border p-8 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                        <span className="font-bold text-2xl tracking-tight">PoliCheck</span>
                    </Link>
                    <h2 className="text-center text-3xl font-extrabold text-foreground">
                        Inicia sesión
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        ¿No tienes cuenta?{" "}
                        <Link
                            href="/registro"
                            className="font-medium text-primary hover:text-primary/80"
                        >
                            Regístrate aquí
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" action={login}>
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
                                autoComplete="current-password"
                                required
                                className="mt-1"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
