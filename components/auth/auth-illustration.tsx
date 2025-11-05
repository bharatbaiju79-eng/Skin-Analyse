export function AuthIllustration() {
  return (
    <div className="w-full max-w-md">
      <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />

        {/* Main book/study illustration */}
        <g>
          {/* Books stack */}
          <rect
            x="120"
            y="140"
            width="80"
            height="100"
            rx="8"
            fill="rgba(255, 255, 255, 0.95)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
          <rect
            x="140"
            y="120"
            width="80"
            height="100"
            rx="8"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
          <rect
            x="160"
            y="100"
            width="80"
            height="100"
            rx="8"
            fill="rgba(255, 255, 255, 0.9)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />

          {/* Book lines */}
          <line x1="130" y1="160" x2="190" y2="160" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
          <line x1="130" y1="180" x2="185" y2="180" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
          <line x1="130" y1="200" x2="175" y2="200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
        </g>

        {/* Floating elements */}
        <g>
          {/* Star 1 */}
          <circle cx="100" cy="100" r="6" fill="rgba(255, 255, 255, 0.8)" opacity="0.7" />
          {/* Star 2 */}
          <circle cx="280" cy="120" r="5" fill="rgba(255, 255, 255, 0.7)" opacity="0.6" />
          {/* Star 3 */}
          <circle cx="320" cy="240" r="4" fill="rgba(255, 255, 255, 0.6)" opacity="0.5" />

          {/* Decorative circles */}
          <circle cx="80" cy="260" r="8" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
          <circle cx="340" cy="280" r="10" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
        </g>

        {/* Motivational icons */}
        <g>
          {/* Lightbulb idea */}
          <path
            d="M 200 260 L 200 300 M 190 300 L 210 300 M 195 300 L 205 300"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="200" cy="250" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
        </g>
      </svg>

      {/* Text content */}
      <div className="mt-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Join StudyHub</h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Connect with students, share resources, and grow together in a supportive community.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-xs text-white/60">Students</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-xs text-white/60">Groups</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-xs text-white/60">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
