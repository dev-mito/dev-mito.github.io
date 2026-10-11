import ThemeToggle from "@/components/ThemeToggle";

const Navigationbar = () => {
    return (
        <>
            <nav className="flex width-full h-14 items-center p-2 border-b">
                <span className="flex flex-1 items-center gap-2">
                    <h1 className="text-2xl font-medium">Rpa&apos;s bins</h1>
                    <h1 className="text-muted-foreground text-xl font-medium">
                        v1.0-R
                    </h1>
                </span>
                <ThemeToggle />
            </nav>
        </>
    );
};

export default Navigationbar;
