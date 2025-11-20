import React, { useEffect, useState } from 'react';

function ImageUplode({ file }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setUrl(null);
      return;
    }

    if (file instanceof File || file instanceof Blob) {
      const objectUrl = URL.createObjectURL(file);
      setUrl(objectUrl);

      // Clean up when component unmounts or file changes
      return () => URL.revokeObjectURL(objectUrl);
    }

    if (typeof file === 'string' && file.trim() !== '') {
      setUrl(file);
    } else {
      setUrl(null);
    }
  }, [file]);

  // Only render the image if URL is valid
  if (!url) return null;

  return (
    <div className="mt-2">
      <img src={url} alt="preview" className="h-32 rounded border object-contain" />
    </div>
  );
}

export default ImageUplode;
