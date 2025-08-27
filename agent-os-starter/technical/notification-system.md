# Notification System Design

This document describes the design of the notification system, including events, channels, retries, and UX contracts.

## Events
The notification system will be event-driven. The following events will trigger notifications:
- `user.registered`: A new user has registered.
- `user.password_changed`: A user has changed their password.
- `task.completed`: A task has been completed.
- `billing.invoice_paid`: An invoice has been paid.
- `billing.invoice_failed`: An invoice payment has failed.

## Channels
The following channels will be supported for sending notifications:
- **Email:** For important notifications such as password resets and billing events.
- **In-App:** For less critical notifications such as task completions.
- **Push Notifications:** For mobile devices.

## Retries
- If a notification fails to send, the system will automatically retry up to 3 times.
- The retry interval will be exponential (e.g., 1 minute, 5 minutes, 15 minutes).
- If all retries fail, the error will be logged and the development team will be notified.

## UX Contracts

### Email Notifications
- All emails will be sent from a consistent email address.
- Emails will have a clear and concise subject line.
- Emails will be well-formatted and responsive.
- Users will be able to unsubscribe from non-essential emails.

### In-App Notifications
- In-app notifications will be displayed in a non-intrusive way.
- Notifications will be dismissible.
- A notification center will be available for users to view all their notifications.

### Push Notifications
- Push notifications will be used sparingly to avoid annoying users.
- Notifications will be clear and actionable.
- Users will be able to configure their push notification preferences.

## Technology Stack
- **Email:** [SendGrid](https://sendgrid.com/)
- **In-App:** [React Hot Toast](https://react-hot-toast.com/)
- **Push Notifications:** [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
