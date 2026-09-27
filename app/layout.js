export const metadata = {
  title: "Brand's Wardrobe Kids Corner | Official Store",
  description: "Trending Kids Fashion, Tracksuits & Cargo Pants with 15% OFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans">{children}</body>
    </html>
  );
}
