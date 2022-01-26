export const routes = [
    {
      component: async () => {
        const module = await import('./pages/Route1');
    
        return module.Route1;
      },
      path: '/route1',
    },
    {
      component: async () => {
        const module = await import('./pages/Route2');
  
        return module.Route2;
      },
      path: '*',
    }
];
  
