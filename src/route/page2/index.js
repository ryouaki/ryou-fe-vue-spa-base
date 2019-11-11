import Fullscreen from '@/layouts/Fullscreen';

export default {
  path: '/page2',
  component: Fullscreen,
  children: [
    {
      path: '',
      component: () => import('@/views/Page2'),
    }
  ]
};
