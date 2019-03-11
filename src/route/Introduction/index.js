import Fullscreen from '@/layouts/Fullscreen';

export default {
  path: '/introduction',
  component: Fullscreen,
  children: [
    {
      path: 'index',
      component: () => import('@/views/Introduction'),
    }
  ]
};
