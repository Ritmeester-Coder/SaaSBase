"use client";

import { Bell, Check, CheckCheck, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

const notifications: Notification[] = [
  {
    id: 1,
    title: "Welcome to SaaSBase",
    message: "Your workspace is ready to go.",
    time: "Just now",
    unread: true,
  },
  {
    id: 2,
    title: "Workspace switched",
    message: "You are now working in Acom Forge.",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 3,
    title: "Account updated",
    message: "Your account details were successfully updated.",
    time: "1 hour ago",
    unread: false,
  },
];

export function NotificationMenu() {
  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  return (
    <Popover>
      <PopoverTrigger
        className="bell-icon relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Notifications"
      >
        <Bell />

        {unreadCount > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-destructive" />
        )}
      </PopoverTrigger>

      <PopoverContent align="end" sideOffset={8} className="w-[380px] p-0">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <h3 className="font-semibold">Notifications</h3>

            <p className="text-xs text-muted-foreground">
              {unreadCount > 0
                ? `${unreadCount} unread notification${
                    unreadCount === 1 ? "" : "s"
                  }`
                : "You're all caught up"}
            </p>
          </div>

          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => {
                console.log("Mark all as read");
              }}
            >
              <CheckCheck />
              Mark all read
            </Button>
          )}
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex min-h-48 flex-col items-center justify-center px-4 text-center">
              <Info className="mb-3 h-8 w-8 text-muted-foreground" />

              <p className="font-medium">No notifications</p>

              <p className="text-sm text-muted-foreground">
                You&apos;re all caught up.
              </p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex gap-3 border-b px-4 py-4 last:border-b-0 ${
                  notification.unread ? "bg-muted/40" : ""
                }`}
              >
                <div className="mt-0.5">
                  {notification.unread ? (
                    <span className="flex h-2 w-2 rounded-full bg-primary" />
                  ) : (
                    <Check className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{notification.title}</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t px-4 py-2.5">
          <button
            type="button"
            className="w-full text-center text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={() => {
              console.log("View all notifications");
            }}
          >
            View all notifications
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
