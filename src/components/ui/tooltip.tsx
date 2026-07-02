import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "group z-50 relative before:absolute before:top-0 before:left-0 rounded-md before:bg-background before:border before:border-gray-300 shadow-sm before:inset-0 before:w-full before:h-full before:-z-10 bg-transparent w-fit origin-(--radix-tooltip-content-transform-origin) animate-in before:rounded-md px-3 py-1.5 text-xs text-balance text-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <div className="contents">
          <TooltipPrimitive.Arrow className="[span:has(&)]:-z-20 size-3 translate-y-[calc(-50%+-1px)] group-data-[side=top]:-translate-x-px group-data-[side=right]:-translate-x-px group-data-[side=bottom]:translate-x-px group-data-[side=left]:translate-x-px rotate-45 rounded-[2px] bg-gray-300 fill-gray-300 shadow-sm" />
          <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%-1px)] rotate-45 rounded-[2px] bg-background fill-background" />
        </div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
