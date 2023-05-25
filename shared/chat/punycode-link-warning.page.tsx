import * as React from 'react'
import type * as Container from '../util/container'

const Warning = React.lazy(async () => import('./punycode-link-warning'))
type OwnProps = Container.ViewPropsToPageProps<typeof Warning>

const Screen = (p: OwnProps) => (
  <React.Suspense>
    <Warning {...p.route.params} />
  </React.Suspense>
)

export default {getScreen: () => Screen}
