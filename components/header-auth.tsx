import { signOutAction } from '@/app/actions';
import Link from 'next/link';
import { Button } from './ui/button';
import { createClient } from '@/utils/supabase/server';
import { User, LogOut } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2 ps-5">
              <User size={15} /> {user.user_metadata.name}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex min-w-[20vw] flex-col p-3 sm:min-w-40 sm:px-5">
              <Link href={'/dashboard/'} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>

              <Link href={'/dashboard/reset-password'} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Reset Password
                </NavigationMenuLink>
              </Link>

              <hr className="my-2" />

              <NavigationMenuLink>
                <form action={signOutAction} className="flex justify-center">
                  <Button type="submit" variant={'ghost'}>
                    <LogOut size={15} />
                    <span className="ms-2">Sign out</span>
                  </Button>
                </form>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* <form action={signOutAction}>
          <Button type="submit" variant={'outline'}>
            Sign out
          </Button>
        </form> */}
      {/* </div> */}
    </NavigationMenu>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={'outline'}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={'default'}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
