export default function AnimatedBackground() {
  const shapes = Array.from({ length: 50 }); // number of floating shapes

  return (
    <div className="animated-bg">
      {shapes.map((_, idx) => (
        <span
          key={idx}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animationDelay: `${Math.random() * 20}s`
          }}
        ></span>
      ))}
    </div>
  );
}
