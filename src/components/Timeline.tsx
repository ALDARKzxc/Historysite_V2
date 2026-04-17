import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { epochs, timelineEvents } from '@/data/epochs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const navigate = useNavigate();

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  const getEpochColor = (epochId: string) => {
    const epoch = epochs.find(e => e.id === epochId);
    return epoch?.color || '#2F5D9F';
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 bg-[#2F5D9F] rounded-full" />
              <span className="text-xs font-medium text-[#2F5D9F] font-ui tracking-wide uppercase">Interactive</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#2A2A2A]">History Timeline</h2>
            <p className="text-[#7A8499] font-ui mt-2">
              862 AD to Present — 1,200 years of Russian history
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF1F7] text-[#7A8499] hover:text-[#2A2A2A] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF1F7] text-[#7A8499] hover:text-[#2A2A2A] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Scroll Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide px-8 md:px-16"
        style={{ cursor: 'grab' }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          let startX = e.pageX - el.offsetLeft;
          let scrollLeft = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
          };
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        }}
      >
        <div className="relative" style={{ minWidth: `${timelineEvents.length * 160 + 200}px`, height: '200px' }}>
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EEF1F7] to-transparent" />
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#EEF1F7]" />

          {/* Events */}
          {timelineEvents.map((event, i) => {
            const color = getEpochColor(event.epochId);
            const isAbove = i % 2 === 0;
            const isActive = activeEvent === i;

            return (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 cursor-pointer group"
                style={{ left: `${(i / (timelineEvents.length - 1)) * 88 + 6}%`, top: '50%', marginTop: '-8px' }}
                onClick={() => {
                  setActiveEvent(isActive ? null : i);
                  navigate(`/epochs/${event.epochId}`);
                }}
                onMouseEnter={() => setActiveEvent(i)}
                onMouseLeave={() => setActiveEvent(null)}
              >
                {/* Dot */}
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-200 group-hover:scale-150"
                  style={{ backgroundColor: color }}
                />

                {/* Label */}
                <div
                  className={`absolute ${isAbove ? 'bottom-full mb-3' : 'top-full mt-3'} left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-200`}
                >
                  <div className={`bg-white border rounded-xl px-3 py-2 shadow-lg border-[#EEF1F7] transition-all duration-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}`}>
                    <div className="font-mono-accent text-xs font-bold" style={{ color }}>{event.year}</div>
                    <div className="text-xs text-[#2A2A2A] font-ui font-medium max-w-[120px] text-center leading-tight mt-0.5">{event.title}</div>
                  </div>
                  {/* Connector line */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-px"
                    style={{
                      backgroundColor: color,
                      height: '12px',
                      ...(isAbove ? { top: '100%' } : { bottom: '100%' }),
                    }}
                  />
                </div>

                {/* Year label always visible */}
                <div
                  className={`absolute ${isAbove ? 'top-full mt-1' : 'bottom-full mb-1'} left-1/2 -translate-x-1/2 font-mono-accent text-[10px] font-medium text-[#7A8499] whitespace-nowrap`}
                >
                  {event.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
