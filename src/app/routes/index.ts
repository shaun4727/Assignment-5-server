import { Router } from 'express';
import { BlogRoutes } from '../../modules/blog/blog.route';

const router = Router()

const moduleRoutes = [
  {
    path: '/blog',
    route: BlogRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
