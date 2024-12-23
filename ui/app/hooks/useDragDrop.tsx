import {DragEvent, useState} from "react";

export function useDragDrop() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>, callback: (files: FileList) => void) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            callback(e.dataTransfer.files);
            e.dataTransfer.clearData();
        }
    };

    return { isDragging, handleDragEnter, handleDragLeave, handleDragOver, handleDrop };
}

