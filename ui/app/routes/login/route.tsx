import {LoginForm} from "~/components/login-form";

export default function Layout() {
    return (
        <section className={"flex min-h-svh w-full items-center justify-center p-6 md:p-10"}>
            <div className="w-full max-w-sm">
                <LoginForm/>
            </div>
        </section>
    )
}