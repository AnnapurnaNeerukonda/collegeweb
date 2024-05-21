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
        path: '/department/it', 
      },
      {
        title: 'Computer Science and Technology',
        path: '/department/cse', 
      },
      {
        title: 'Electronics and Communication Engineering',
        path: '/department/ece', 
      },
      {
        title: 'Artificial Engineering (AI)',
        path: '/department/ai', 
      },
      {
        title: 'Electrical & Electronics Engineering',
        path: '/department/eee', 
      },
      {
        title: 'Mechanical Engineering',
        path: '/department/me', 
      },
      {
        title: 'Civil Engineering (CE)',
        path: '/department/ce', 
      },
    ],
   
  },
  {
    title: 'Branches', // New navigation item
    path:'/leftsidebar'
  },
  {
    title: 'Login',
    path: '/Login',
  },
  {
    title:'Sign Up',
    path:'/signup'
  },
  {
    title:'Students',
    path:'/student'
  }
];
export const site = {
  titleImage: 'public\images\logo.png',
};