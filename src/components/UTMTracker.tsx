"use client";

import { useEffect } from 'react';
import { parseAndStoreUTMParams } from '@/utils/utm';

export default function UTMTracker() {
    useEffect(() => {
        parseAndStoreUTMParams();
    }, []);

    return null;
}
