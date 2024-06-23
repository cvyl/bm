import { IRequestStrict, Router } from 'itty-router'
import render2 from 'render2'

import { Env } from './types'
import {
    siteConfig,
    loggerConfig,
    openGraphConfig,
    oEmbedConfig 
    } from './config'

type CF = [env: Env, ctx: ExecutionContext]
const router = Router<IRequestStrict, CF>()


router.all('*', () => { return new Response('Not Found', { status: 404 }) })
export { router }