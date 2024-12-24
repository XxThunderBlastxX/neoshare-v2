import {PocketBaseInstance} from "~/service/pocketbase";
import {Link, useLocation} from "@remix-run/react";
import {cn} from "~/lib/utils";

export default function Header() {
    const location = useLocation();

    return PocketBaseInstance.instance.authStore.isValid ?
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link className="btn btn-ghost text-xl" to={"/"}>neoShare</Link>
            </div>
            <div className="navbar-center lg:flex">
                <div className="menu menu-horizontal px-1 gap-2">
                    <Link to={"/upload"} className={cn("btn", {"bg-gradient-to-t from-[#24b7a6] to-[#31ECD9] text-black": location.pathname == "/upload"})}>Upload</Link>
                    <Link to={"/files"} className={cn("btn", {"bg-gradient-to-t from-[#24b7a6] to-[#31ECD9] text-black": location.pathname == "/files"})}>Files</Link>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn" href="#">Logout</a>
            </div>
        </div> :
        <Link to={"/login"}>
            <button className="btn btn-outline btn-success mb-8">
                Login
            </button>
        </Link>;
}