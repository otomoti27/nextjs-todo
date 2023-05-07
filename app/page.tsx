'use client'

import { Button, Container } from '@/_components'

export default function Home() {
  return <CustomButton>Hello World</CustomButton>
}

function CustomButton({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth='sm'>
      <Button variant='contained'>{children}</Button>
    </Container>
  )
}
