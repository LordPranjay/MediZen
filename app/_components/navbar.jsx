"use client";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="px-4 lg:px-16 py-4 flex justify-between items-center border-b">
            <Link href={'/'}>
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-primary border-2 border-foreground">
                        <GraduationCap />
                    </div>
                    <h1 className="text-lg font-bold">MediZen</h1>
                </div>
            </Link>
            <div className="flex gap-4">
                <Button onClick={() => window.open('https://youtu.be/fK0VT2xUwgs', '_blank')}>
                    Demo Video
                </Button>
            </div>
        </div>
    );
}

export default Navbar;