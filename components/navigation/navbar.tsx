import NavBarMenuItem from './NavBarMenuItem'
import { NavMenus } from './NavMenus'

export default function NavBar() {
  return (
    <div className='sticky z-[1] top-0 flex items-center place-content-center p-[30px_40px] gap-[10px] '>
      <div className='flex items-center bg-gray rounded-[100px] h-[48px] p-1 gap-1'>
        {NavMenus.map((menu, index) => (
          <NavBarMenuItem
            key={index + menu.href}
            title={menu.title}
            href={menu.href}
          />
        ))}
      </div>
    </div>
  )
}
