"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { getFramePaths } from "@/lib/frames";

export default function ScrollyCanvas({ scrollYProgress }: { scrollYProgress: any }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const framePaths = getFramePaths();

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        framePaths.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                loadedImages[index] = img;
                if (loadedCount === framePaths.length) {
                    setImages(loadedImages);
                    // Draw first frame immediately
                    if (loadedImages[0]) drawFrame(loadedImages[0]);
                }
            };
            img.onerror = () => {
                loadedCount++;
                // Handle gracefully if missing frame
                if (loadedCount === framePaths.length) {
                    setImages(loadedImages);
                    if (loadedImages[0]) drawFrame(loadedImages[0]);
                }
            };
        });

        const handleResize = () => {
            if (loadedImages.length > 0) {
                const latest = scrollYProgress.get();
                const frameIndex = Math.min(
                    Math.floor(latest * (loadedImages.length - 1)),
                    loadedImages.length - 1
                );
                if (loadedImages[frameIndex]) {
                    drawFrame(loadedImages[frameIndex]);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const drawFrame = (image: HTMLImageElement) => {
        const canvas = canvasRef.current;
        if (!canvas || !image) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Flash-free clear via deep #121212
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, rect.width, rect.height);

        // Dynamic "object-fit: cover" mathematics
        const imageAspect = image.width / image.height;
        const canvasAspect = rect.width / rect.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imageAspect > canvasAspect) {
            drawHeight = rect.height;
            drawWidth = image.width * (rect.height / image.height);
            offsetX = (rect.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = rect.width;
            drawHeight = image.height * (rect.width / image.width);
            offsetX = 0;
            offsetY = (rect.height - drawHeight) / 2;
        }

        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        if (images.length === 0) return;

        const frameIndex = Math.min(
            Math.floor(latest * (images.length - 1)),
            images.length - 1
        );

        const img = images[frameIndex];
        if (img) {
            requestAnimationFrame(() => {
                drawFrame(img);
            });
        }
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
        />
    );
}
