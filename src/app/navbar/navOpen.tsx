import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { RxHamburgerMenu } from "react-icons/rx"
  import Link from "next/link"
  
  const NavOpen = () => {
    return (
      <Sheet>
        <SheetTrigger className="md:hidden"> {/* Show only on mobile */}
          <RxHamburgerMenu />
        </SheetTrigger>
  
        <SheetContent>
          <SheetHeader>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
          <Link href={'/project'}>Project</Link>

          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  }
  
  export default NavOpen;
  