import { Button, buttonVariants } from '@/components/ui/button'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Button variant="default" size={"lg"}>Home</Button>
      <Link href={'https://www.google.es/'} className={buttonVariants({ variant: "default", size: "lg"})}>Click here</Link>
    </main>
  )
}
