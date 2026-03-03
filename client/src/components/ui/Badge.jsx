const Badge = ({ children, color = 'blue', className = '' }) => {
  const colorMap = {
    green: 'bg-[#00e6761a] text-accent-green border-accent-green/20',
    teal: 'bg-[#2dd4bf1a] text-accent-teal border-accent-teal/20',
    blue: 'bg-[#38bdf81a] text-accent-blue border-accent-blue/20',
    purple: 'bg-[#a78bfa1a] text-accent-purple border-accent-purple/20',
    orange: 'bg-[#ff6b2b1a] text-accent-orange border-accent-orange/20',
    red: 'bg-[#ff3d5a1a] text-accent-red border-accent-red/20',
    yellow: 'bg-[#fbbf241a] text-accent-yellow border-accent-yellow/20',
  };

  const selectedColor = colorMap[color] || colorMap.blue;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${selectedColor} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;