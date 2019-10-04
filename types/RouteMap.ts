interface RouteMeta {
  title?: string
  enablePullDownRefresh?: boolean
}
interface RouteMap {
  path: string
  redirect?: string
  name?: string
  meta?: RouteMeta
  component?(): any
}
