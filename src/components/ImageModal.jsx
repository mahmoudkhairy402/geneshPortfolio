import React from "react";
import { Modal } from "./Modal";

/**
 * ImageModal – a thin wrapper around Modal that expects an array of image URLs.
 * Props:
 *   - isOpen: boolean
 *   - onClose: () => void
 *   - images: string[] – array of image src imports
 *   - currentIdx: number – index of the image to display
 *   - onPrev: () => void – show previous image
 *   - onNext: () => void – show next image
 */
export const ImageModal = ({ isOpen, onClose, images, currentIdx, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      src={images[currentIdx]}
      alt={`Image ${currentIdx + 1}`}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
};

export default ImageModal;
