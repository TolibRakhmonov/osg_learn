import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Домашняя'
      }
    },
    {
      path: '/about',
      meta: {
        title: 'О нас'
      }
      // component: () => import()
    },
    {
      path: '/website',
      meta: {
        title: 'Разработка веб-сайтов'
      }
      // component: () => import()
    },
    {
      path: '/design',
      meta: {
        title: 'Графический дизайн'
      }
      // component: () => import()
    },
    {
      path: '/smm',
      meta: {
        title: 'Комплексное продвижение'
      }
      // component: () => import()
    },
    {
      path: '/seo',
      meta: {
        title: 'Поисковая оптимизация'
      }
      // component: () => import()
    },
    {
      path: '/mobile',
      meta: {
        title: 'Мобилъные приложения'
      }
      // component: () => import()
    },
    {
      path: '/partners',
      meta: {
        title: 'Наши партнеры'
      }
      // component: () => import()
    },
    {
      path: '/contacts',
      meta: {
        title: 'Наши контакты'
      }
      // component: () => import()
    }
  ],
});
