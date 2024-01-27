import { Button, buttonVariants } from '@/components/ui/button'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Button variant="destructive" size={'lg'}>
        Button
      </Button>
      <Link href={'https://www.google.es/'} className={buttonVariants({ variant: 'outline' })}>
        Click here
      </Link>
    </main>
  )
}
