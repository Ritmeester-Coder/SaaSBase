"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

type NotificationListProps = {
  notifications: Notification[];
};

export function NotificationList({ notifications }: NotificationListProps) {
  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  return (
    <div>
      {notifications.length === 0 ? (
        <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">
          <Bell className="mb-3 h-10 w-10 text-muted-foreground" />

          <p className="font-medium">No notifications</p>

          <p className="text-sm text-muted-foreground">
            You&apos;re all caught up.
          </p>
        </div>
      ) : (
        <>
          {unreadCount > 0 && (
            <div className="flex justify-end border-b px-6 py-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  console.log("Mark all as read");
                }}
              >
                Mark all as read
              </Button>
            </div>
          )}

          <div>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex gap-4 border-t px-6 py-5 first:border-t-0 ${
                  notification.unread ? "bg-muted/30" : ""
                }`}
              >
                <div className="pt-1">
                  {notification.unread ? (
                    <span className="block h-2 w-2 rounded-full bg-primary" />
                  ) : (
                    <span className="block h-2 w-2 rounded-full border border-muted-foreground" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium">{notification.title}</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
