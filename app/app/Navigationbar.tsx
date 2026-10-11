import ThemeToggle from "@/components/ThemeToggle";

const Navigationbar = () => {
    return (
        <>
            <nav className="flex width-full h-14 items-center p-2 border-b">
                <h1 className="flex-1 text-2xl font-medium">Rpa&apos;s bins</h1>
                <ThemeToggle />
            </nav>
        </>
    );
};

export default Navigationbar;
