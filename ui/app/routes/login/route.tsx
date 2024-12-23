import {LoginForm} from "~/components/login-form";
import {ActionFunctionArgs, json, redirect} from "@remix-run/node";
import {PocketBaseInstance} from "~/service/pocketbase";

export async function clientAction({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await PocketBaseInstance.instance.
    collection('users').
    authWithPassword(email, password);
    if (user) {
        PocketBaseInstance.instance.authStore.save(user.token, user.record);
        throw redirect('/');
    }

    return json({formError: 'Invalid username or password'})
}

export default function Layout() {
    return (
        <section className={"flex min-h-svh w-full items-center justify-center p-6 md:p-10"}>
            <div className="w-full max-w-sm">
                <LoginForm/>
            </div>
        </section>
    )
}
