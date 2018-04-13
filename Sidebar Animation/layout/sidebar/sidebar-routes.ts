export class SidebarLink {
  text: string;
  icon: string;
  route: string;
}

export const sidebarLinks = [{
  text: 'Home',
  icon: 'fa-home',
  route: 'home'
},
{
  text: 'Data Viewer',
  icon: 'fa-table',
  route: 'data-viewer'
},
{
  text: 'Turnover Overview',
  icon: 'fa-check',
  route: 'turnover'
},
{
  text: 'Simulation Overview',
  icon: 'fa-info',
  route: 'changes'
},
{
  text: 'Input Data QA',
  icon: 'fa-warning',
  route: 'inputqa'
},
{
  text: 'Background Jobs',
  icon: 'fa-play',
  route: 'jobs'
},
{
  text: 'Approve Parameters',
  icon: 'fa-thumbs-up',
  route: 'approval'
},
{
  text: 'Manage Sales Channels',
  icon: 'fa-cogs',
  route: 'sales-channels'
},
{
  text: 'Manage Countries',
  icon: 'fa-flag',
  route: 'countries'
},
{
  text: 'Set Promotion Factor',
  icon: 'fa-gift',
  route: 'set-promotion-factor'
},
{
  text: 'Cron Job Settings',
  icon: 'fa-wrench',
  route: 'cron-job-settings'
},
{
  text: 'Users & Permissions',
  icon: 'fa-users',
  route: 'users'
}
] as Array<SidebarLink>;
