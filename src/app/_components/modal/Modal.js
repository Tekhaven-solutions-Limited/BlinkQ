"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - children: ReactNode
 * - closeOnBackdropClick: boolean (default true)
 * - ariaLabel: string
 * - className: string (optional extra classes for the modal container)
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick = true,
  ariaLabel = "Modal dialog",
  className = "",
  maxWidth = "720px",
  padding = 24,
}) {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  // ✅ Handle focus + scroll lock + restore behavior
  useEffect(() => {
    if (typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      previouslyFocused.current = document.activeElement;

      // Prevent background scroll
      document.body.style.overflow = "hidden";

      // Avoid focusing inside modal (prevents jumping to bottom)
      setTimeout(() => {
        backdropRef.current?.focus();
        if (modalRef.current) modalRef.current.scrollTop = 0;
      }, 50);
    } else {
      // Restore scroll and focus when closed
      document.body.style.overflow = originalOverflow || "";
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    }

    // ✅ Cleanup in case React delays effects
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  // ✅ Handle keyboard accessibility
  useEffect(() => {
    if (!isOpen) return;

    function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
      }

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey, { capture: true });
    return () =>
      document.removeEventListener("keydown", onKey, { capture: true });
  }, [isOpen, onClose]);

  // ✅ Backdrop click handler
  function onBackdropMouseDown(e) {
    if (!closeOnBackdropClick) return;
    if (e.target === backdropRef.current) onClose?.();
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 330, damping: 28 },
    },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.15 } },
  };

  // ✅ Render modal
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          ref={backdropRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onMouseDown={onBackdropMouseDown}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            ref={modalRef}
            className={`max-w-[720px] w-full mx-4 rounded-2xl shadow-xl outline-none ${className}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              maxWidth,
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <div style={{ position: "relative", padding }}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
}
