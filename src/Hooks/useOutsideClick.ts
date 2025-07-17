import React, {useCallback, useEffect, useState} from 'react';
import {IProject} from "../Components/Projects/IProject.tsx";

export function useProjectSidebar() {
    const [selected, setSelected] = useState<IProject | null>(null);

    const open = useCallback((p: IProject) => setSelected(p), []);
    const close = useCallback(() => setSelected(null), []);

    return {
        selected,
        isOpen: selected !== null,
        open,
        close,
    };
}

export function useOutsideClick<T extends HTMLElement>(
    ref: React.RefObject<T>,
    handler: () => void,
    active = true
) {
    useEffect(() => {
        if (!active) return;

        function onPointerDown(e: PointerEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        window.addEventListener('pointerdown', onPointerDown);
        return () => window.removeEventListener('pointerdown', onPointerDown);
    }, [ref, handler, active]);
}