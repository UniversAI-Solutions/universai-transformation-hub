export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full opacity-50 blur-[140px] animate-glow"
        style={{ background: "radial-gradient(circle, oklch(0.45 0.22 260 / 70%), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.22 245), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.2 270), transparent 70%)" }}
      />
    </div>
  );
}

export function FloatingSquares() {
  // Mimics the floating glowing squares from the brand graphic
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[
        { size: 110, top: "12%", right: "6%", delay: "0s" },
        { size: 80, top: "30%", right: "22%", delay: "1.5s" },
        { size: 140, top: "50%", right: "10%", delay: "0.8s" },
        { size: 180, top: "70%", right: "18%", delay: "2.2s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-2xl animate-float"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            right: s.right,
            animationDelay: s.delay,
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.16 0.05 255) 30%, oklch(0.55 0.22 260 / 60%) 70%, oklch(0.7 0.2 250 / 30%) 100%)",
            border: "1px solid oklch(0.7 0.2 250 / 40%)",
            boxShadow: "0 0 60px oklch(0.6 0.22 255 / 50%), inset 0 0 40px oklch(0.16 0.05 255)",
          }}
        />
      ))}
    </div>
  );
}
