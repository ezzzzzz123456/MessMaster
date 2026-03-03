import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const KPICard = ({ label, value, sub, icon: Icon, colorHex = '#38bdf8', emojiBg = '📊' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract numbers and prefixes/suffixes (e.g., "₹45,000" -> prefix: "₹", numeric: 45000)
  const numericString = value.toString().replace(/[^0-9.]/g, '');
  const numericValue = parseFloat(numericString) || 0;
  const prefix = value.toString().substring(0, value.toString().indexOf(numericString.charAt(0))) || '';
  const suffix = value.toString().substring(value.toString().indexOf(numericString.slice(-1)) + 1) || '';

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1500; // 1.5s as per spec

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo for smooth deceleration
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentVal = numericValue * easeOut;

      // Handle decimals nicely
      if (numericString.includes('.')) {
        setDisplayValue(currentVal.toFixed(1));
      } else {
        setDisplayValue(Math.floor(currentVal));
      }

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(numericValue); // ensure exact final value
      }
    };

    window.requestAnimationFrame(step);
  }, [numericValue, numericString]);

  // Format the number back with commas if it had them
  const formattedDisplayValue = Number(displayValue).toLocaleString('en-IN', {
    maximumFractionDigits: 1
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card border border-default rounded-xl p-6 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Ghost Emoji Background */}
      <div className="absolute -right-4 -bottom-6 text-8xl opacity-5 pointer-events-none select-none">
        {emojiBg}
      </div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-muted font-body font-medium">{label}</h3>
        {Icon && (
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${colorHex}1a`, color: colorHex }}>
            <Icon size={20} />
          </div>
        )}
      </div>

      <div className="relative z-10">
        <div className="text-3xl font-display font-bold text-primary flex items-baseline gap-1">
          <span>{prefix}</span>
          <span>{formattedDisplayValue}</span>
          <span className="text-xl text-muted">{suffix}</span>
        </div>
        {sub && (
          <p className="text-sm mt-2 font-body" style={{ color: colorHex }}>
            {sub}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default KPICard;