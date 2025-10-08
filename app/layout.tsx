import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Torre Marketing Lab | Esperienze Digitali Immersive",
  description:
    "Agenzia di marketing avanzato che unisce storytelling, dati e tecnologie immersive per accelerare la crescita del tuo brand.",
  metadataBase: new URL("https://torre-marketing-lab.example"),
  openGraph: {
    title: "Torre Marketing Lab",
    description:
      "Esperienze digitali immersive, animazioni dinamiche e strategie data-driven per brand ambiziosi.",
    type: "website",
    locale: "it_IT"
  },
  twitter: {
    card: "summary_large_image",
    title: "Torre Marketing Lab",
    description:
      "Interfacce spettacolari con texture fibra di carbonio, particelle dinamiche e illuminazione GSAP.",
    creator: "@torre_marketing"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-abyss text-slate-100",
          "selection:bg-ember/60 selection:text-white"
        )}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-carbon opacity-80" aria-hidden />
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,198,255,0.12),_transparent_60%)] mix-blend-screen" />
          <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
