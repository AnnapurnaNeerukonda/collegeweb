export const mainMenu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/aboutUS',
  },
  {
    title: 'Contact Us',
    path: '/contact',
  },
  {
    title: 'Departments',
    id: '1',
    subMenu: [
      {
        title: 'DISCIPLINES',
        path: '/department', 
      },
      {
        divider: true,
      },
      {
        title: 'Information Technology',
        path: '/department', 
      },
      {
        title: 'Computer Science and Technology',
        path: '/department', 
      },
      {
        title: 'Electronics and Communication Engineering',
        path: '/department', 
      },
      {
        title: 'Artificial Engineering (AI)',
        path: '/department', 
      },
      {
        title: 'Electrical & Electronics Engineering',
        path: '/department', 
      },
      {
        title: 'Mechanical Engineering',
        path: '/department', 
      },
      {
        title: 'Civil Engineering (CE)',
        path: '/department', 
      },
    ],
   
  },
  {
    title: 'Branches', // New navigation item
    path:'/'
  },
  {
    title: 'Login',
    path: '/',
  },
];
export const site = {
  titleImage: 'public\images\logo.png',
};