import React from "react";

interface ArtworkModalProps {
  artwork: any;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  // Handle clicks outside the modal content to close
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition-colors z-10 bg-white/50 rounded-full p-1"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
           {/* Image */}
           <div className="w-full h-64 md:h-80 bg-slate-100 rounded flex items-center justify-center overflow-hidden border border-slate-200">
             <img
               src={artwork.imageUrl.replace('600x400', '800x600')} // Request larger image for modal
               alt={artwork.title}
               className="max-h-full max-w-full object-contain"
               loading="lazy"
               onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                 const target = e.target as HTMLImageElement;
                 target.onerror = null; 
                 target.src='https://placehold.co/800x600/cccccc/ffffff?text=Image+Not+Available'; 
               }}
             />
           </div>

           {/* Text Details */}
           <h3 className="text-2xl font-serif text-indigo-900">{artwork.title}</h3>
           <p className="text-sm text-slate-500">{artwork.artist} ({artwork.year}) - {artwork.medium}</p>
           <p className="text-slate-700">{artwork.details || artwork.description}</p>

           <div className="pt-3 border-t border-slate-200">
              <h4 className="font-medium text-indigo-700 mb-1">Theological Themes:</h4>
              <div className="flex flex-wrap gap-2">
                 {artwork.theologicalThemes.map((theme: string) => (
                    <span key={theme} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                       {theme}
                    </span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;