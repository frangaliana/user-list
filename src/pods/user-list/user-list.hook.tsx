import * as React from 'react'

export const useLoadMore = (): { page: number; elementRef: React.MutableRefObject<HTMLDivElement> } => {
  const [page, setPage] = React.useState(1)
  const elementRef = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setPage((prevPage) => prevPage + 1)
      }
    }
    const observer = new IntersectionObserver(onChange, { rootMargin: '100px' })

    observer.observe(elementRef.current)
  }, [])

  return { page, elementRef }
}
