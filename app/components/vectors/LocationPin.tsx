"use client";

import React from 'react'
import { useThemeStore } from '@/app/store'

type LocationPinProps = {
    scale?: number;
}

export default function LocationPin({ scale = 1 }: LocationPinProps) {
    const { currentTheme } = useThemeStore();

    return (
        <svg style={{ transform: `scale(${scale})` }} width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4853 21.1518L12 29.637L3.51472 21.1518C-1.17157 16.4654 -1.17157 8.86752 3.51472 4.18122C8.20101 -0.505069 15.7989 -0.505069 20.4853 4.18122C25.1716 8.86752 25.1716 16.4654 20.4853 21.1518ZM12 17.9998C14.9455 17.9998 17.3333 15.612 17.3333 12.6665C17.3333 9.72098 14.9455 7.33317 12 7.33317C9.05448 7.33317 6.66667 9.72098 6.66667 12.6665C6.66667 15.612 9.05448 17.9998 12 17.9998ZM12 15.3332C10.5272 15.3332 9.33333 14.1393 9.33333 12.6665C9.33333 11.1937 10.5272 9.99984 12 9.99984C13.4728 9.99984 14.6667 11.1937 14.6667 12.6665C14.6667 14.1393 13.4728 15.3332 12 15.3332Z" fill="#4B3C25" />
        </svg>
    )
}
