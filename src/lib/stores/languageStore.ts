import { writable } from 'svelte/store';

export const lang = writable<'pl' | 'en' | 'cz'>('pl');