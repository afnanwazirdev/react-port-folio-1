import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/** Scoped GSAP setup with automatic cleanup. Callback only runs when reduced-motion is NOT requested.
 *  cb receives { desktop } so you can branch on viewport. */
export default function useGsap(cb, deps = []) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(ref)
    mm.add({ ok: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1024px)' }, (ctx) => {
      if (!ctx.conditions.ok) return
      return cb({ desktop: ctx.conditions.desktop, root: ref.current })
    })
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
