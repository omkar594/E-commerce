const Navigation = () => {
    const [open, setOpen] = useState(false);
  

    const handleCategoryClick = (category, section, item, closeMenu) => {
        console.log("Navigating to:", /${category.id}/${section.id}/${item.id});
        navigate(`/${category.id}/${section.id}/${item.id}`);
        closeMenu();
    };

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 p-2 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Navigation links */}
                        <TabGroup>
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {NavigationData.categories.map((category) => (
                                        <Tab key={category.name} className="text-base font-medium text-gray-900">
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels>
                                {NavigationData.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p className="font-medium text-gray-900">{section.name}</p>
                                                <ul className="mt-6 flex flex-col space-y-6">
                                                    {section.items.map((item) => (
                                                        <li key={item.name}>
                                                            <button
                                                                onClick={() => handleCategoryClick(category, section, item, () => setOpen(false))}
                                                                className="text-gray-500 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Main header and navigation */}
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-black text-white">
                    Get free delivery on orders over 1000 Rupees
                </p>
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="lg:hidden p-2 text-gray-400"
                            >
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 lg:ml-0">
                                <a href="/">
                                    <img src="/path-to-logo.png" alt="Your Company Logo" className="h-8 w-auto" />
                                </a>
                            </div>

                            {/* Desktop navigation */}
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-6">
                                {NavigationData.categories.map((category) => (
                                    <Popover key={category.name} className="flex">
                                        <PopoverButton className="text-gray-700 hover:text-gray-800">
                                            {category.name}
                                        </PopoverButton>
                                        <PopoverPanel className="absolute inset-x-0 z-50 bg-white shadow">
                                            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p className="font-medium text-gray-900">{section.name}</p>
                                                        <ul className="mt-4 space-y-4">
                                                            {section.items.map((item) => (
                                                                <li key={item.name}>
                                                                    <button
                                                                        onClick={() => handleCategoryClick(category, section, item, () => setOpen(false))}
                                                                        className="text-gray-500 hover:text-gray-800"
                                                                    >
                                                                        {item.name}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    </Popover>
                                ))}
                            </div>

                            {/* Cart and other items */}
                            <div className="ml-auto flex items-center">
                                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                </a>
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-500">
                                        <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                                        <span className="ml-2 text-sm font-medium text-gray-700">0</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};