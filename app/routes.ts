import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('./routes/layouts/home.tsx', [index('./routes/home/index.tsx')]),
  layout('./routes/layouts/main.tsx', [
    route('about', './routes/about/index.tsx'),
    route('contact', './routes/contact/index.tsx'),
    route('blogs', './routes/blogs/index.tsx'),
    route('projects', './routes/Projects/index.tsx'),
    route('projects/:id', './routes/Projects/details.tsx'),
    route('blogs/:slug', './routes/blogs/details.tsx'),
    route('*', './routes/errors/not-found.tsx'),
  ]),
] satisfies RouteConfig;
