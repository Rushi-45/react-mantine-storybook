import DashboardLayout from "../templates/DashboardLayout";
import Card from "../molecules/Card";
import Badge from "../atoms/Badge";
import Avatar from "../atoms/Avatar";

const stats = [
  { label: "Total Users", value: "12,430", badge: "+12%", badgeVariant: "success" as const },
  { label: "Revenue", value: "$48,295", badge: "+5%", badgeVariant: "success" as const },
  { label: "Open Issues", value: "23", badge: "Needs attention", badgeVariant: "warning" as const },
];

const activity = [
  { name: "Alice Johnson", action: "joined the platform" },
  { name: "Bob Smith", action: "submitted a new report" },
  { name: "Carol White", action: "updated their profile" },
];

const DashboardPage = () => (
  <DashboardLayout>
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back, Jane!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="elevated">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <Badge variant={stat.badgeVariant} size="small">
                {stat.badge}
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card title="Recent Activity" variant="default">
        <ul className="flex flex-col gap-3">
          {activity.map(({ name, action }) => (
            <li key={name} className="flex items-center gap-3 text-sm text-gray-700">
              <Avatar name={name} size="small" />
              <span>
                <strong>{name}</strong> {action}
              </span>
              <Badge variant="info" size="small">
                New
              </Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </DashboardLayout>
);

export default DashboardPage;
