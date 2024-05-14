export const verbose = (...args: any[]) => (console.debug as any)(...args);
export const warn = (...args: any[]) => (console.warn as any)(...args);
export const error = (...args: any[]) => (console.error as any)(...args);
