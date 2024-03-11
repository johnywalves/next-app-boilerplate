import GlobalStyles from '@/styles/global'

type ProvidersProps = {
  readonly children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
