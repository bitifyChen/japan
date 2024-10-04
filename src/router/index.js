import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['token'])
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory('/japan/'),
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
