import { useState, useCallback, useEffect } from "react";

// Toast types
const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

// Default toast configuration
const DEFAULT_TOAST_CONFIG = {
  duration: 4000,
  position: "top-right",
};

let toastId = 0;

// Global toast state
let globalToasts = [];
let listeners = [];

// Notify listeners about toast changes
const notifyListeners = () => {
  listeners.forEach((listener) => listener([...globalToasts]));
};

// Add toast to global state
const addToast = (toast) => {
  const id = toastId++;
  const newToast = {
    id,
    ...DEFAULT_TOAST_CONFIG,
    ...toast,
    timestamp: Date.now(),
  };

  globalToasts = [...globalToasts, newToast];
  notifyListeners();

  // Auto-remove toast after duration
  if (newToast.duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }

  return id;
};

// Remove toast from global state
const removeToast = (id) => {
  globalToasts = globalToasts.filter((toast) => toast.id !== id);
  notifyListeners();
};

// Clear all toasts
const clearAllToasts = () => {
  globalToasts = [];
  notifyListeners();
};

// Toast hook
export const useToast = () => {
  const [toasts, setToasts] = useState(globalToasts);

  // Subscribe to toast changes
  useEffect(() => {
    const listener = (newToasts) => {
      setToasts(newToasts);
    };

    listeners.push(listener);

    // Cleanup listener on unmount
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const toast = useCallback((options) => {
    if (typeof options === "string") {
      return addToast({ title: options, type: TOAST_TYPES.INFO });
    }

    const { title, description, type = TOAST_TYPES.INFO, ...rest } = options;

    return addToast({
      title,
      description,
      type,
      ...rest,
    });
  }, []);

  // Convenience methods
  const success = useCallback((options) => {
    return toast({ ...options, type: TOAST_TYPES.SUCCESS });
  }, [toast]);

  const error = useCallback((options) => {
    return toast({ ...options, type: TOAST_TYPES.ERROR });
  }, [toast]);

  const warning = useCallback((options) => {
    return toast({ ...options, type: TOAST_TYPES.WARNING });
  }, [toast]);

  const info = useCallback((options) => {
    return toast({ ...options, type: TOAST_TYPES.INFO });
  }, [toast]);

  const dismiss = useCallback((id) => {
    removeToast(id);
  }, []);

  const dismissAll = useCallback(() => {
    clearAllToasts();
  }, []);

  return {
    toasts,
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
  };
};

// Export toast types for external use
export { TOAST_TYPES };