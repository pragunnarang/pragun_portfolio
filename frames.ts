export const getFramePaths = () => {
  return Array.from({ length: 120 }, (_, i) => {
    // Pads numbers to be strictly 3 digits (e.g. 000, 001, 119)
    const frameIndex = i.toString().padStart(3, '0');
    return `/sequence/frame_${frameIndex}_delay-0.067s.png`;
  });
};
