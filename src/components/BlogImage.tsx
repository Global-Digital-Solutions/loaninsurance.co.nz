'use client';

interface BlogImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function BlogImage({ src, alt, category }: BlogImageProps) {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-sky-50 to-teal-50 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.img-fallback')) {
            const fallback = document.createElement('div');
            fallback.className = 'img-fallback absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-50 to-teal-50';
            fallback.innerHTML = `<span style="font-size:2rem">📄</span><span style="font-size:0.7rem;font-weight:700;color:#0d9488;text-transform:uppercase;letter-spacing:0.08em">${category}</span>`;
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}
