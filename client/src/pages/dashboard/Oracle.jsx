import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, AlertCircle, RefreshCw, Send, Bot } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const Oracle = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-default pb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
            Oracle AI <Sparkles className="text-accent-purple" size={28} />
          </h1>
          <p className="text-muted mt-2">Predictive intelligence and actionable insights powered by Gemini.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Main Insights Panel */}
        <div className="md:col-span-2 space-y-6">

          {/* Daily Brief */}
          <div className="bg-card border border-accent-purple/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="text-accent-purple" size={24} />
              <h2 className="text-xl font-bold text-primary">Today's Briefing</h2>
            </div>

            <div className="space-y-4 text-muted leading-relaxed relative z-10">
              <p>Based on historical data for Tuesdays and the current weather forecast (Rainy), expect a <strong>12% increase in attendance</strong> for dinner today.</p>
              <p>The planned <strong>Aloo Gobi</strong> has historically seen a <strong>high waste ratio (18%)</strong> during rainy days. Consider reducing preparation by 5kg.</p>

              <div className="bg-surface/50 border border-default rounded-xl p-4 mt-4">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <TrendingUp size={16} className="text-accent-green" />
                  Recommendation
                </h4>
                <p className="text-sm">Substitute Aloo Gobi with Onion Pakoras as a side snack. Past data shows a 94% positive sentiment correlation with rainy weather.</p>
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-card border border-default rounded-2xl flex flex-col h-[400px]">
            <div className="p-4 border-b border-default bg-surface/30">
              <h3 className="font-bold text-primary">Ask Oracle</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col">
              {/* Dummy Chat */}
              <div className="self-end bg-surface border border-default rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                <p className="text-sm">What should I plan for next Monday's breakfast?</p>
              </div>

              <div className="self-start relative group flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0 border border-accent-purple/20">
                  <Sparkles className="text-accent-purple" size={14} />
                </div>
                <div className="bg-[#1a1528] border border-accent-purple/20 rounded-2xl rounded-tl-sm p-4">
                  <p className="text-sm text-primary leading-relaxed">
                    Next Monday is immediately after the long weekend. Our data indicates attendance drops by ~15% on such Mondays. <br /><br />
                    I recommend preparing <strong>Poha</strong> instead of Idli. Poha scales down better and generates 40% less waste on low-attendance days.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-default bg-surface/30">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about menu planning, waste trends, or student feedback..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-app border border-default text-primary rounded-xl pl-4 pr-12 py-3 outline-none focus:border-accent-purple transition-colors text-sm"
                  title="Prompt Oracle"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-purple text-white rounded-lg hover:bg-[#b05bff] transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar Alerts & Tasks */}
        <div className="space-y-6">
          <div className="bg-card border border-default rounded-2xl p-6">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
              <AlertCircle size={18} className="text-accent-orange" />
              Trend Alerts
            </h3>

            <div className="space-y-4">
              <div className="p-3 bg-surface rounded-xl border-l-2 border-accent-red">
                <h4 className="font-semibold text-sm text-primary mb-1">Rising Waste: Rice</h4>
                <p className="text-xs text-muted">Rice waste is up 8% this week across all lunches.</p>
              </div>
              <div className="p-3 bg-surface rounded-xl border-l-2 border-accent-yellow">
                <h4 className="font-semibold text-sm text-primary mb-1">Low Rating: Dal Makhani</h4>
                <p className="text-xs text-muted">Last 3 servings averaged 2.8/5 rating.</p>
              </div>
              <div className="p-3 bg-surface rounded-xl border-l-2 border-accent-green">
                <h4 className="font-semibold text-sm text-primary mb-1">Popularity Spike</h4>
                <p className="text-xs text-muted">Paneer dishes driving 20% higher attendance.</p>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-default text-muted hover:text-primary hover:border-accent-purple transition-colors font-medium">
            <RefreshCw size={16} /> Recalculate Models
          </button>
        </div>

      </div>
    </div>
  );
};

export default Oracle;