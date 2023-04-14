import { useState } from 'react';
import PopOutPanel from '@/components/ribbon/PopOutPanel';
import FileExplorer from '@/components/ribbon/FileExplorer';
import AdminPanel from '@/components/ribbon/AdminPanel';

const LeftRibbon = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const handleClick = (panel: string) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <>
      <div className="fixed left-0 top-0 h-full flex flex-col items-center space-y-4 p-4 bg-[#0E1117]">
        <button onClick={() => handleClick('data')}>
          <i className="fas fa-database"></i>
        </button>
        <button onClick={() => handleClick('admin')}>
          <i className="fas fa-cog"></i>
        </button>
      </div>
      <PopOutPanel
        isOpen={activePanel === 'data'}
        onClose={() => setActivePanel(null)}
        title="Data"
      >
        <FileExplorer />
      </PopOutPanel>
      <PopOutPanel
        isOpen={activePanel === 'admin'}
        onClose={() => setActivePanel(null)}
        title="Admin"
      >
        <AdminPanel />
      </PopOutPanel>
    </>
  );
};

export default LeftRibbon;
