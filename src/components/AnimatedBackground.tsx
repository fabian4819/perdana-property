export default function AnimatedBackground() {
  return (
    <>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg rotate-45 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-bounce animation-delay-4000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg rotate-12 animate-pulse animation-delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-float-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5000}ms`,
              animationDuration: `${3000 + Math.random() * 4000}ms`
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Waves */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50 animate-gradient-shift"></div>
      </div>
    </>
  )
}