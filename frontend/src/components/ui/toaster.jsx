"use client";
import React from "react";
import { useToast, TOAST_TYPES } from "@/hooks/use-toast";

// Toast component
const Toast = ({ toast, onDismiss }) => {
  const getToastStyles = (type) => {
    const baseStyles = "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
    
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return `${baseStyles} border-l-4 border-green-500`;
      case TOAST_TYPES.ERROR:
        return `${baseStyles} border-l-4 border-red-500`;
      case TOAST_TYPES.WARNING:
        return `${baseStyles} border-l-4 border-yellow-500`;
      case TOAST_TYPES.INFO:
      default:
        return `${baseStyles} border-l-4 border-blue-500`;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return "text-green-500";
      case TOAST_TYPES.ERROR:
        return "text-red-500";
      case TOAST_TYPES.WARNING:
        return "text-yellow-500";
      case TOAST_TYPES.INFO:
      default:
        return "text-blue-500";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case TOAST_TYPES.ERROR:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case TOAST_TYPES.WARNING:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case TOAST_TYPES.INFO:
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className={getToastStyles(toast.type)}>
      <div className="p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${getIconColor(toast.type)}`}>
            {getIcon(toast.type)}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">
              {toast.title}
            </p>
            {toast.description && (
              <p className="mt-1 text-sm text-gray-500">
                {toast.description}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => onDismiss(toast.id)}
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Toast container component
export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts.length) return null;

  return (
    <div 
      aria-live="assertive" 
      className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="transform transition-all duration-300 ease-in-out"
            style={{
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            <Toast toast={toast} onDismiss={dismiss} />
          </div>
        ))}
      </div>
    </div>
  );
}