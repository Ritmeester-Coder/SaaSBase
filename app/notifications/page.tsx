import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { NotificationList } from "@/components/notification-list";

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

export default function NotificationsPage() {
  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>

        <p className="text-muted-foreground">
          View notifications for your account and workspace.
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>All notifications</CardTitle>

            <CardDescription>
              {unreadCount > 0
                ? `${unreadCount} unread notification${
                    unreadCount === 1 ? "" : "s"
                  }`
                : "You're all caught up"}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <NotificationList notifications={notifications} />
        </CardContent>
      </Card>
    </div>
  );
}
