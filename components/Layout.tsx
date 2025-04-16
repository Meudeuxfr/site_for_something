import Head from "next/head";

const Layout = ({ children, title = "Your Site Title" }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold">YourLogo</div>
          <nav>
            <ul className="hidden md:flex space-x-4">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#features" className="hover:text-gray-400">Features</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 p-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
