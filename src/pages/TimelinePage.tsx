import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { epochs, timelineEvents } from '@/data/epochs';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function TimelinePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const navigate = useNavigate();

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  const getEpoch = (epochId: string) => epochs.find(e => e.id === epochId);

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F7] rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 bg-[#2F5D9F] rounded-full" />
            <span className="text-xs font-medium text-[#2F5D9F] font-ui uppercase tracking-wide">Interactive</span>
          </div>
          <h1 className="font-display text-5xl font-bold text-[#2A2A2A] mb-3">Russian History Timeline</h1>
          <p className="text-[#7A8499] font-ui text-lg">862 AD to Present — Drag to explore 1,200 years of history</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => scroll('left')} className="p-2.5 rounded-xl bg-white border border-[#EEF1F7] hover:bg-[#F5F7FA] text-[#7A8499] hover:text-[#2A2A2A] transition-all shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="p-2.5 rounded-xl bg-white border border-[#EEF1F7] hover:bg-[#F5F7FA] text-[#7A8499] hover:text-[#2A2A2A] transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-[#EEF1F7]" />
          <button onClick={() => setZoom(z => Math.max(0.7, z - 0.1))} className="p-2.5 rounded-xl bg-white border border-[#EEF1F7] hover:bg-[#F5F7FA] text-[#7A8499] transition-all shadow-sm">
            <ZoomOut className="w-5 h-5" />
          </button>
          <button onClick={() => setZoom(z => Math.min(1.5, z + 0.1))} className="p-2.5 rounded-xl bg-white border border-[#EEF1F7] hover:bg-[#F5F7FA] text-[#7A8499] transition-all shadow-sm">
            <ZoomIn className="w-5 h-5" />
          </button>
          <span className="text-sm text-[#7A8499] font-mono-accent">{Math.round(zoom * 100)}%</span>
        </div>

        {/* Timeline Container */}
        <div className="bg-white rounded-2xl border border-[#EEF1F7] shadow-sm overflow-hidden">
          {/* Epoch color bands */}
          <div className="flex h-3">
            {epochs.map(epoch => (
              <div
                key={epoch.id}
                className="flex-1"
                style={{ backgroundColor: epoch.color + '66' }}
                title={epoch.title}
              />
            ))}
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide py-16 px-8"
            style={{ cursor: 'grab' }}
            onMouseDown={(e) => {
              const el = scrollRef.current;
              if (!el) return;
              const startX = e.pageX - el.offsetLeft;
              const scrollLeft = el.scrollLeft;
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
            <div
              className="relative"
              style={{ minWidth: `${timelineEvents.length * 180 * zoom + 100}px`, height: '250px' }}
            >
              {/* Line */}
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#EEF1F7]" />

              {/* Events */}
              {timelineEvents.map((event, i) => {
                const epoch = getEpoch(event.epochId);
                const color = epoch?.color || '#2F5D9F';
                const isAbove = i % 2 === 0;
                const isActive = activeEvent === i;
                const leftPct = `${(i / (timelineEvents.length - 1)) * 88 + 6}%`;

                return (
                  <div
                    key={i}
                    className="absolute transform -translate-x-1/2 cursor-pointer group"
                    style={{ left: leftPct, top: '50%', marginTop: '-10px' }}
                    onMouseEnter={() => setActiveEvent(i)}
                    onMouseLeave={() => setActiveEvent(null)}
                    onClick={() => navigate(`/epochs/${event.epochId}`)}
                  >
                    {/* Dot */}
                    <div
                      className="w-5 h-5 rounded-full border-3 border-white shadow-lg transition-all duration-200 group-hover:scale-150 relative z-10"
                      style={{ backgroundColor: color, borderWidth: '3px' }}
                    />

                    {/* Connector */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-px"
                      style={{
                        backgroundColor: color + '88',
                        height: isAbove ? '60px' : '60px',
                        ...(isAbove ? { bottom: '100%', marginBottom: '2px' } : { top: '100%', marginTop: '2px' }),
                      }}
                    />

                    {/* Label Card */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-200 ${
                        isAbove ? 'bottom-full mb-14' : 'top-full mt-14'
                      }`}
                    >
                      <div className={`bg-white border-2 rounded-xl px-4 py-3 shadow-lg whitespace-nowrap transition-all duration-200 ${
                        isActive ? 'opacity-100 scale-105 shadow-xl' : 'opacity-90 scale-100'
                      }`} style={{ borderColor: color + '44' }}>
                        <div className="font-mono-accent text-sm font-bold mb-1" style={{ color }}>{event.year}</div>
                        <div className="text-xs text-[#2A2A2A] font-ui font-medium max-w-[130px] text-center leading-tight">{event.title}</div>
                        {epoch && (
                          <div className="text-[10px] text-[#7A8499] font-ui text-center mt-1">{epoch.title}</div>
                        )}
                      </div>
                    </div>

                    {/* Year label on line */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 font-mono-accent text-[11px] font-medium text-[#7A8499] whitespace-nowrap ${
                        isAbove ? 'top-full mt-2' : 'bottom-full mb-2'
                      }`}
                    >
                      {event.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Epoch Legend */}
        <div className="mt-8 bg-white rounded-2xl border border-[#EEF1F7] shadow-sm p-6">
          <h3 className="font-display text-lg font-bold text-[#2A2A2A] mb-4">Epochs</h3>
          <div className="flex flex-wrap gap-3">
            {epochs.map(epoch => (
              <button
                key={epoch.id}
                onClick={() => navigate(`/epochs/${epoch.id}`)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F7FA] hover:bg-[#EEF1F7] transition-colors group"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: epoch.color }} />
                <span className="text-xs font-medium text-[#2A2A2A] font-ui group-hover:text-[#2F5D9F]">{epoch.title}</span>
                <span className="text-[10px] text-[#7A8499] font-mono-accent">{epoch.period}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
