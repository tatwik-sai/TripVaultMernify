export const HOST = process.env.NEXT_PUBLIC_SERVER_URL;

// Helper function to get full image URL from relative path
export const getImageUrl = (url) => {
    if (!url) return null;
    // If URL already starts with http, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // Otherwise, prepend the server URL
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8747';
    // Remove leading slash from url if present to avoid double slashes
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    return `${serverUrl}${cleanUrl}`;
};
