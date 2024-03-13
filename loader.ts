export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [`f_auto`, `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/dse9scwk1/image/upload//v1710335805/Assets/${src}`;
}
