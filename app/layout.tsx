import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-white">
        <ConvexClientProvider>{children}</ConvexClientProvider> {/* <--- Envolva */}
      </body>
    </html>
  );
}