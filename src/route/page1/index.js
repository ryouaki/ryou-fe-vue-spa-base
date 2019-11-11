import Fullscreen from '@/layouts/Fullscreen';

export default {
  path: '/page1',
  component: Fullscreen,
  children: [
    {
      path: '',
      component: () => import('@/views/Page1'),
    }
  ]
};
