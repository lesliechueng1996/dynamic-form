import Avatar from './Avatar';
import ThemeSwap from './ThemeSwap';

function AppHeader() {
  return (
    <div className="h-12 bg-primary flex px-5 items-center justify-between shadow-md">
      <h1 className="font-bold text-2xl">Dynamic Form</h1>
      <div className="flex gap-5 items-center">
        <ThemeSwap />
        <Avatar />
      </div>
    </div>
  );
}

export default AppHeader;
